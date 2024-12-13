import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Pages/Home";
import { Register } from "../Pages/Pages/Register";
import { Signin } from "../Pages/Pages/Signin";




export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<h1>Route Not Found</h1>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/signin",
            element:<Signin></Signin>
        },
      ]
    },
  ]);



  