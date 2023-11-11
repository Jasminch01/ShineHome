import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Service from "../Pages/Service/Service";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path : 'about',
        element: <About></About>
      },
      {
        path : 'contact-us',
        element : <ContactUs></ContactUs>
      },
      {
        path : 'service',
        element : <Service></Service>
      }
    ],
  },
]);

export default Router;
