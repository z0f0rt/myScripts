import React, { useState } from "react";
import './styles/App.css';
function App() {
  // const [count, setCount] = useState(0);
  // const [notification, setNotification] = useState();
  // function increment() {
  //   setCount(count + 1);
  //   setNotification();
  // }

  // function decrement() {
  //   setCount(count - 1);
  //   setNotification();
  // }

  // function multiply2() {
  //   setCount(count * 2);
  //   setNotification();
  // }

  // function root() {
  //   if (count >= 0) {
  //     setCount(Math.sqrt(count));
  //     setNotification();
  //   } else {
  //     setNotification("Ошибка");
  //   }
  // }
  // function clear() {
  //   setCount(0);
  //   setNotification();
  // }
  // function square() {
  //   setCount(count ** 2);
  //   setNotification();
  // }
  return (
  //   <div className="App">
  //     <h1>{count}</h1>
  //     <button onClick={increment}>+</button>
  //     <button onClick={decrement}>-</button>
  //     <button onClick={multiply2}>x2</button>
  //     <button onClick={root}>&radic;</button>
  //     <button onClick={square}>square</button>
  //     <button onClick={clear}>clear</button>
  //     <h1>{notification}</h1>
    // </div>
    <div className="books">
    <div className="book_title">
      <strong>Властелин колец. Братсво Кольца</strong>
      <div className="book_discription">
        Хоббит Бильбо Бэггинс, главный герой повести «Хоббит», достигнув
        почтенного возраста 111 лет, уходит на покой и оставляет племяннику
        Фродо волшебное кольцо, делающее всякого своего носителя невидимым. От
        мага Гэндальфа Фродо узнаёт, что ему досталось не простое кольцо, а
        само Кольцо Всевластья, творение тёмного властелина Саурона, врага
        свободных народов Средиземья из страны Мордор, созданное, чтобы
        подчинить себе все прочие волшебные кольца. Кольцо обладает
        собственной волей и способно продлевать жизнь владельца, одновременно
        порабощая его, искажать помыслы и вызывать у него желание обладать
        Кольцом. С помощью Кольца Саурон, побеждённый много лет назад, может
        вернуть себе утерянную силу. Уничтожить Кольцо можно только одним
        способом — сбросив его в жерло Огненной Горы Ородруин в Мордоре, где
        оно и было выковано.
      </div>
    </div>
  </div>
  );
}

export default App;
