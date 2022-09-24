import React, { useState } from "react";
import "./styles/App.css";
import { books } from "./books.js";
import { Title } from "./Title";

export default function App() {
  const [discr, setDiscr] = useState("");
  return (
    <div className="flex-container">
      <Title setDiscr={setDiscr} />
      <div className="discription">{discr}</div>
    </div>
  );
}
