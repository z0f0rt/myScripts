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

const filters = [filterLowerPrice, filterUpperPrice];

app.get("/products", (req, res) => {
  let count = req.query.count; // сколько элементов должно быть на странице
  let thatPageSend = req.query.whichPageSend; // какую страницу отправить
  let first = req.query.first;
  let second = req.query.second;
  if(first === undefined && second === undefined){

  }
  const pages = () => {
    count = Number(count);
    let arr = [];
    for (let i = 0; i < products.length; i += count) {
      let page = products.slice(i, i + count);
      arr.push(page);
    }
    return arr;
  };
  let whichPageNeedArr = pages();

  res.status(200).json({
    page: whichPageNeedArr[thatPageSend],
    howManyPages: whichPageNeedArr.length,
  });
});

app.get("/price-filter", (req, res) => {
  let count = req.query.count; // сколько элементов должно быть на странице
  let thatPageSend = req.query.whichPageSend; // какую страницу отправить
  const pages = () => {
    count = Number(count);
    let arr = [];
    for (let i = 0; i < products.length; i += count) {
      let page = products.slice(i, i + count);
      arr.push(page);
    }
    return arr;
  };
  let whichPageNeed = pages();
  const filtersAgregator = filtersAgregatorFabric(filters, req);
  const filterProd = (whichPageNeed) => {
    let result = [];
    for (let i = 0; i < whichPageNeed.length; i++) {
      if (filtersAgregator(whichPageNeed[i])) {
        result.push(whichPageNeed[i]);
      }
    }
    return result;
  };
  let kek = filterProd(whichPageNeed[thatPageSend]);
  console.log(kek);
  res.status(200).json(kek);
});

app.use("/static", expressstatic(__dirname + "/public"));
