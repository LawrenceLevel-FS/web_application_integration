import mongoose from "mongoose";
import bodyParser from "body-parser";
import ccRoutes from "./routes/ccRoutes";
import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:28017/wdv4416a49", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connection Established"));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// * Routes * //

app.use("/", ccRoutes);

// * Start * //

app.listen(PORT, () => {
  console.log(`WAI Assignment Server running on ${PORT}`);
});
