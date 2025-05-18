import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Addcoffee from "../pages/Addcoffee";
import Details from "../pages/Details";
import Update from "../pages/Update";
import Register from "../Auth/Register";
import User from "../components/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
          index: true,
          loader: () =>fetch('http://localhost:3000/coffees'),
          element: <Home/>
        },
        {
          path: '/addcoffee',
          element: <Addcoffee/>

        },
        {
          path: '/details/:id',
          loader: ({params}) =>fetch(`http://localhost:3000/coffees/${params.id}`),
          element: <Details/>
        },
        {
          path: '/update/:id',
          loader: ({params}) =>fetch(`http://localhost:3000/coffees/${params.id}`),
          element: <Update/>
        },

        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/users',
          loader: ()=> fetch('http://localhost:3000/users'),
          element: <User/>
        }
    ]
  },
]);