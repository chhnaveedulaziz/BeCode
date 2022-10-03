import express from "express";
import routes from "./Routes/index";
import bodyParser from "body-parser";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
