import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import ResDetails from "./components/ResDetails";
import Login from "./components/Login";

const App = () => (
  <div>
    <div>
      <div className="bg-gray-100 py-2 shadow-lg mb-8">
        <div className="max-w-[1600px] mx-auto ">
          <Header />
        </div>
      </div>
    <div >
        <div className="max-w-[1600px] mx-auto ">
        <Outlet />
        </div>
   
    </div>

      
    <div className="bg-gray-100 h-56">
        <Footer />
    </div>
     
    </div>
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturants/:resId",
        element: <ResDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
