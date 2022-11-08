import express from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://liaonew1492:liaoliaoliao1492@cluster0.o1pez.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
