import { ERROR_CODES, SUCCESS_CODE } from "../Utils/global";
import db from "../Models";
import { Request, Response } from "express";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const store = async (req: Request, res: Response) => {
  try {
    const order = await db.order.findByPk(req.body.orderId);
    if (!order) {
      return res.status(ERROR_CODES.NOT_FOUND).json({
        message: "Invalid Order",
      });
    }
    const product = await db.product.findByPk(order.productId);
    if (!product) {
      return res.status(ERROR_CODES.NOT_FOUND).json({
        message: "Invalid Item",
      });
    }
    if (!product.isAvailable) {
      return res.status(ERROR_CODES.NOT_FOUND).json({
        message: "Item Not Available",
      });
    }
    const token = await createToken(req.body);
    if (token.error) {
      return res.status(ERROR_CODES.BAD_REQUEST).json({
        message: token.error,
      });
    }
    if (!token.id) {
      return res.status(ERROR_CODES.BAD_REQUEST).json({
        message: "Payment Failed",
      });
    }
    const charge = await createCharge(token.id, req.body.amount);
    if (charge && charge.status == "succeeded") {
      db.payment.create({
        amount: req.body.amount,
        status: "success",
        orderId: req.body.orderId,
      });
      return res.status(SUCCESS_CODE).json({
        message: "payment completed Successfully !",
      });
    } else {
      return res.status(ERROR_CODES.BAD_REQUEST).json({
        message: "Payment Failed!",
      });
    }
  } catch (error) {
    return res.status(ERROR_CODES.BAD_REQUEST).json({
      message: error.toString(),
    });
  }
};

const createCharge = async (tokenId: number, amount: string) => {
  let charge: {
    status: string;
    error: string;
    amount: number;
    currency: string;
    source: number;
    description: string;
  } = {
    amount: 0,
    currency: "",
    description: "",
    source: 0,
    error: "",
    status: "",
  };
  try {
    charge = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      source: tokenId,
      description: "My first payment",
    });
  } catch (error) {
    charge.error = error.message;
  }
  return charge;
};

const createToken = async (cardData: {
  cardNumber: string;
  month: string;
  year: string;
  cvv: string;
}) => {
  let token: {
    id: number;
    number: number;
    exp_month: string;
    exp_year: string;
    cvc: string;
    error: string;
  } = {
    number: 0,
    exp_month: "",
    exp_year: "",
    cvc: "",
    error: "",
    id: 0,
  };
  try {
    token = await stripe.tokens.create({
      card: {
        number: cardData.cardNumber,
        exp_month: cardData.month,
        exp_year: cardData.year,
        cvc: cardData.cvv,
      },
    });
  } catch (error) {
    switch (error.type) {
      case "StripeCardError":
        token.error = error.message;
        break;
      default:
        token.error = error.message;
        break;
    }
  }
  return token;
};

const paymentController = {
  store,
};

export default paymentController;
