import {createHashRouter} from "react-router-dom";
import App from '../pages/App';
import Contacts from "../pages/Contacts";

import Main from "../pages/Main"
import Packaging from "../pages/Packaging"
import Reviews from '../pages/Reviews'
import Product from '../pages/Product'



const router = createHashRouter ([
    {
      path: "/",
      element: <App/>,
      children:[
        {
        element: <Main/>,
        index: true,
      },
      {
        path: "/contacts",
        element: <Contacts/>,
      },

      {
        path: "/packaging",
        element: <Packaging/>,
      },
      {
        path: "/product/:name",
        element: <Product/>,

      },
      // TODO: костиль із шляхами на продукти/головну
      {
        path: "/product/",
        element: <Main/>,

      },
      {
        path: "/reviews",
        element: <Reviews/>,
      }
    ]
    },
  ]);

export default router