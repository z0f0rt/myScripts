import express, { static as expressstatic } from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { PORT } from "./constants.js";
import { filterLowerPrice, filterUpperPrice, valueSorted } from "./filters.js";
import { filtersAgregatorFabric } from "./filtersAgregator.js";
import { splitForPages } from "./pages.js";
import { products } from "./products.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use("/static", expressstatic(__dirname + "/public"));
app.use(express.static("static"));
app.listen(PORT, () => {
  console.log(`Сервер удачно запустился на порте: ${POST}...`);
});

const filters = [filterLowerPrice, filterUpperPrice];

app.get("/products", (req, res) => {
  let count = req.query.count; // сколько элементов должно быть на странице
  let page = req.query.page; // какую страницу отправить
  count = Number(count);
  page = Number(page);

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

  let filteredProducts = filterProd(products); //отфильтрованный массив подмассивов
  console.log(filteredProducts);

  let sortedSelectFilter = valueSorted(req, filteredProducts);

  let productsPaginated = splitForPages(sortedSelectFilter, count);

  let pageArr = productsPaginated[page - 1];
  if (pageArr === undefined) {
    pageArr = [];
  }

  res.status(200).json({
    page: pageArr,
    howManyPages: productsPaginated.length,
  });
});
