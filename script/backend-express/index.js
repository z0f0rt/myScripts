import express from "express";
import cors from "cors";
import phone from "./public/images/phone.png";
import camera from "./public/images/camera.png";
import notebook from "./public/images/notebook.jpg";
import shurik from "./public/images/shurik.jpg";
import viteshka from "./public/images/viteshka.jpg";
import screen from "./public/images/screen.jpg";

const POST = 5000;
const app = express();
app.use(cors());

const products = [
  {
    name: "Смартфон Samsung Galaxy Z Fold4 512 ГБ бежевый",
    image: phone,
    price: 117565,
  },
  {
    name: "Экшн-камера GoPro HERO 11 Black Edition черный",
    image: camera,
    price: 28699,
  },
  {
    name: '17.3" Ноутбук MSI GT77 Titan 12UHS-066RU черный',
    image: notebook,
    price: 177499,
  },
  {
    name: "Дрель-шуруповерт DeWalt XRP DCD996P2 XR18V",
    image: shurik,
    price: 8750,
  },
  {
    name: "Вытяжка каминная Kaiser AT 6433 Eco серебристый/черный",
    image: viteshka,
    price: 15300,
  },
  {
    name: '31.5" Монитор Samsung Odyssey G7 C32G75TQSI черный',
    image: screen,
    price: 45500,
  },
];

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.listen(POST, () => {
  console.log(`Сервер удачно запустился на порте:${POST}...`);
});
