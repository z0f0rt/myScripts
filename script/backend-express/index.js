import express, { static as expressstatic } from "express";
import { products } from "./products.js";
import { POST } from "./constants.js";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());

app.listen(POST, () => {
  console.log(`Сервер удачно запустился на порте: ${POST}...`);
});

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.use("/static", expressstatic(__dirname + "/public"));
