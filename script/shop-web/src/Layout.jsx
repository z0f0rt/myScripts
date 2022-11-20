import { Outlet } from "react-router-dom";
import { Head } from "./Head";
export function Layout(props) {
  return (
    <div className="App">
      <Head className="logo"/>
      <Outlet />
    </div>
  );
}

export default Layout;
