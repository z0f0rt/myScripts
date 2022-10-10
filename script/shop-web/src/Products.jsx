import phone from "./phone.jpg";
import camera from "./camera.jpg";
import notebook from "./notebook.jpg";
import shurik from "./shurik.jpg";
import viteshka from "./viteshka.jpg";
import screen from "./screen.jpg";

export function Products(props) {
  return (
    <div className={props.WindowProducts}>


      <div className={props.prod1}>
        <img src={phone} width="100" height="100" />
        <br />
        <br />
        Смартфон Samsung Galaxy Z Fold4 512 ГБ бежевый
        <br />
        <br />
        <button onClick={props.sum}>+</button>
        <div>{props.count}</div>
        <button onClick={props.minus}>-</button>
      </div>



      <div className={props.prod2}>
        <img src={camera} width="100" height="100" />
        <br />
        <br />
        Экшн-камера GoPro HERO 11 Black Edition черный
        <br />
        <br />
        <button onClick={props.sum}>+</button>
        <div>{props.count}</div>
        <button onClick={props.minus}>-</button>
      </div>



      <div className={props.prod3}>
        <img src={notebook} width="100" height="100" />
        <br />
        <br />
        17.3" Ноутбук MSI GT77 Titan 12UHS-066RU черный
        <br />
        <br />
        <button onClick={props.sum}>+</button>
        <div>{props.count}</div>
        <button onClick={props.minus}>-</button>
      </div>



      <div className={props.prod4}>
        <img src={viteshka} width="100" height="100" />
        <br />
        <br />
        Вытяжка каминная Kaiser AT 6433 Eco серебристый/черный
        <br />
        <br />
        <button onClick={props.sum}>+</button>
        <div>{props.count}</div>
        <button onClick={props.minus}>-</button>
      </div>


      <div className={props.prod5}>
        <img src={shurik} width="100" height="100" />
        <br />
        <br />
        Дрель-шуруповерт DeWalt XRP DCD996P2 XR18V
        <br />
        <br />
        <button onClick={props.sum}>+</button>
        <div>{props.count}</div>
        <button onClick={props.minus}>-</button>
      </div>

      

      <div className={props.prod6}>
        <img src={screen} width="100" height="100" />
        <br />
        <br />
        31.5" Монитор Samsung Odyssey G7 C32G75TQSI черный
        <br />
        <br />
        <button onClick={props.sum}>+</button>
        <div>{props.count}</div>
        <button onClick={props.minus}>-</button>
      </div>
    </div>
  );
}
