import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="max-w-7xl px-5 mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layout;
