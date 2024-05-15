import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layout";
import Post from "./pages/post";
import Posts from "./pages/posts";
import ErrorPage from "./pages/404";
import "./styles/global.scss";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Posts/>,
            },
            {
                path: "/:id",
                element: <Post/>,
            },
            {
                path: "/error",
                element: <ErrorPage/>,
            },
            {
                path: "*",
                element: <ErrorPage/>,
            },
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
