import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

import Home from './../Pages/Home.jsx';
import IPhone17Pro from './../Pages/iPhone17Pro.jsx';


const router = createBrowserRouter ([
    {
      path: '/', element: <App/>,
      children: [
        {path: "/", element: <Home />},
        {path: "/iphone-17-pro", element: <IPhone17Pro/>}
      ]
    }

])

export default router