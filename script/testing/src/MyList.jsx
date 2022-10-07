export function MyList(props) {
  console.log(props.list);
  return (
    <div className={props.className}>
      {props.list.map((elem, index) => {
        return (
          <p onClick={() => props.onElemClick(index)} key={elem.id}>
            {elem.text}
          </p>
        );
      })}
    </div>
  );
}
