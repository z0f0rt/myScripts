import express, { static as expressstatic } from "express";
import { products } from "./products.js";
import { POST } from "./constants.js";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { filterLowerPrice, filterUpperPrice } from "./filters.js";
import { filtersAgregatorFabric } from "./filtersAgregator.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());

app.listen(POST, () => {
  console.log(`Сервер удачно запустился на порте: ${POST}...`);
});

// app.get("/", (req, res) => {
//   res.status(200).json(products);
// });

app.get("/get-new-page", (req, res) => {
  let thatPageSend = req.query.whichPageSend;
  const pages = () => {
    let count = req.query.count;
    count = Number(count);
    let arr = [];
    for (let i = 0; i < products.length; i += count) {
      let page = products.slice(i, i + count);
      arr.push(page);
    }
    return arr;
  };
  let whichPageNeed = pages();

  res.status(200).json({
    page: whichPageNeed[thatPageSend],
    howManyPages: whichPageNeed.length,
  });
});

app.get("/", (req, res) => {
  const pages = () => {
    let count = req.query.c;
    count = Number(count);
    let arr = [];
    for (let i = 0; i < products.length; i += count) {
      let page = products.slice(i, i + count);
      arr.push(page);
    }
    return arr;
  };
  let firstPage = pages();
  res.status(200).json({ page: firstPage[0], howManyPages: firstPage.length });
});
const filters = [filterLowerPrice, filterUpperPrice];

app.get("/price-filter", (req, res) => {
  const filtersAgregator = filtersAgregatorFabric(filters, req);
  const filterProd = (products) => {
    let result = [];
    for (let i = 0; i < products.length; i++) {
      if (filtersAgregator(products[i])) {
        result.push(products[i]);
      }
    }
    return result;
  };
  let kek = filterProd(products);
  res.status(200).json(kek);
});

app.use("/static", expressstatic(__dirname + "/public"));
