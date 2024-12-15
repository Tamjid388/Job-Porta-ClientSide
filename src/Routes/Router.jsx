import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Pages/Home";
import { Register } from "../Pages/Pages/Register";
import { Signin } from "../Pages/Pages/Signin";
import { JobDetails } from "../Pages/Pages/JobDetails/JobDetails";
import { PrivateRoute } from "./PrivateRoute";
import { JobApply } from "../Pages/JobApply";




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
            path:"/jobs/:id",
            element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:"/jobApply/:id",
          element:<PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
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



  