import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Home from "./pages/home";
import Movie from "./pages/movie";
import WebSeries from "./pages/webseries";
import Bookmark from "./pages/bookmark";

export const router = createBrowserRouter([
{
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
},
{
    path: "/movie",
    element: <Movie/>,
    errorElement: <Error/>
},
{
    path: "/webseries",
    element: <WebSeries/>,
    errorElement: <Error/>
},
{
    path: "/bookmark",
    element: <Bookmark/>,
    errorElement: <Error/>
},

])