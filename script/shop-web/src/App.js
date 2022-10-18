import React from "react";
import "./App.css";
import { Head } from "./Head";
import { Product } from "./Product";
import { useState } from "react";
import phone from "./phone.png";
import camera from "./camera.png";
import notebook from "./notebook.jpg";
import shurik from "./shurik.jpg";
import viteshka from "./viteshka.jpg";
import screen from "./screen.jpg";
import sorry from "./sorry.png";
// import { Solution } from "./Solution";
// import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);

  let allCounts = [count1, count2, count3, count4, count5, count6];

  let bascketValue = allCounts.reduce((acc, v) => {
    return acc + v;
  });

  return (
    <div className="App">
    
        <Head className="logo" bascketValue={bascketValue} />
      

      <div className="WindowProduct1">
        <Product
          name="Смартфон Samsung Galaxy Z Fold4 512 ГБ бежевый"
          className="prod1"
          item={phone}
          sorry={sorry}
          count={count1}
          setCount={setCount1}
        />
        <Product
          name="Экшн-камера GoPro HERO 11 Black Edition черный"
          className="prod2"
          sorry={sorry}
          item={camera}
          count={count2}
          setCount={setCount2}
        />
        <Product
          name='17.3" Ноутбук MSI GT77 Titan 12UHS-066RU черный'
          className="prod3"
          sorry={sorry}
          item={notebook}
          count={count3}
          setCount={setCount3}
        />
        <div className="WindowProduct2">
          <Product
            name="Вытяжка каминная Kaiser AT 6433 Eco серебристый/черный"
            className="prod4"
            sorry={sorry}
            item={viteshka}
            count={count4}
            setCount={setCount4}
          />
          <Product
            name="Дрель-шуруповерт DeWalt XRP DCD996P2 XR18V"
            className="prod5"
            sorry={sorry}
            item={shurik}
            count={count5}
            setCount={setCount5}
          />
          <Product
            name='31.5" Монитор Samsung Odyssey G7 C32G75TQSI черный'
            className="prod6"
            sorry={sorry}
            item={screen}
            count={count6}
            setCount={setCount6}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
