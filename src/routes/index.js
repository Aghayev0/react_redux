import { createBrowserRouter } from "react-router-dom";
import Home from "pages/home";
import Fav from "pages/Favorites/Fav";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/favorites",
    element: <Fav/>
  }
]);