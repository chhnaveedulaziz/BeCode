import * as express from 'express';
const router = express.Router();

import paymentController from '../controllers/payment';

// ======== Public routes ======== //
router.post('/create', paymentController.store);

export default router;
