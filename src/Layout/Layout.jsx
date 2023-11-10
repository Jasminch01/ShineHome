import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-[80%] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
