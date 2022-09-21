import React, { useState } from "react";
import "./styles/App.css";
function App() {
  let arr = useState([
    {
      title: "Lord of the Rings. The Fellowship of the Ring",
      discr: "The first book of the greatest trilogy in the books world",
    },
    {
      title: "Lord of the Rings. The Two Towers",
      discr: "The first book of the greatest trilogy in the books world",
    },
    {
      title: "Lord of the Rings. Return the King",
      discr: "The first book of the greatest trilogy in the books world",
    },
  ]);
  return (
    <div className="flex-container">
      <div className="title">
        <div className="one">1.Властелин Колец </div>
        <div className="two">2.Властелин Колец Две Крепости</div>
        <div className="three">3.Властелин Колец Возвращение Короля</div>
        <div className="fore">4.Гарри Поттер и узник Азкабана</div>
        <div className="five">5.Зелёная миля</div>
        <div className="six">6.Граф Монте-Кристо</div>
        <div className="seven">Крестный отец</div>
      </div>
      <div className="discription" id="dis"></div>
    </div>
  );
}
export default App;
