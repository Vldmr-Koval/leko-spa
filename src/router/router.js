import {createBrowserRouter} from "react-router-dom";
import App from '../pages/App';
import Contacts from "../pages/Contacts";

import TestingPage from "../pages/TestingPage"
import Main from "../pages/Main"
import Packaging from "../pages/Packaging"


const router = createBrowserRouter([
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
        path: "/testing",
        element: <TestingPage/>,
      },
      {
        path: "/packaging",
        element: <Packaging/>,
      }
    ]
    },
  ]);

export default router