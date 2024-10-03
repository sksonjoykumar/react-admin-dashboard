import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { singleUserData } from "./usersData/usersData";
function App() {
  const Layout = () => {
    return (
      <div className="main bg-[#2a3447] text-white px-1 md:px-5 pt-2">
        <Navbar />
        <div className="mainContainer flex">
          <div className="menu w-auto lg:w-[210px] py-[.2rem] px-5 border-r border-r-gray-600">
            <Menu />
          </div>
          <div className="content py-2 px-5 w-full">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User {...singleUserData} />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
