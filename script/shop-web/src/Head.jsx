import icon from "./logo.jpg";
export function Head(props) {
  return (
    <div className='container2'>
      <img  className={props.className} src={icon} width="100" height="100"/>
    </div>
  );
}
