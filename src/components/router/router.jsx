import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ProductDetails from "../Product/ProductDetails/ProductDetails";
import Checkout from "../Checkout/Checkout";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/ProductDetails/:title',
      element: <ProductDetails />,
    },
    {
      path: '/Checkout/',
      element: <Checkout />
    }

  ]);
  
  export default router;