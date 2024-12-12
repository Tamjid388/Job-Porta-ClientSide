import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";




export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<h1>Route Not Found</h1>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);



  