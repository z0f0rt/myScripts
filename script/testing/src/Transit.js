import { texts } from "./texts";

export function Transit(props) {
  return (
<div className="left">
      {texts.map((text) => (
        <div
          key={text.id}
          onClick={() => props.setTexts(text.text)}
        >
          {text.title}
        </div>
      ))}
    </div>
  );
}