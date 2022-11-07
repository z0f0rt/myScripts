import { Outlet } from "react-router-dom";
import { Head } from "./Head";
export function Layout(props) {
  return (
    <div className="App">
      <Head className="logo" bascketValue={props.bascketValue} countAll={props.countAll} />
      <Outlet />
    </div>
  );
}

export default Layout;
