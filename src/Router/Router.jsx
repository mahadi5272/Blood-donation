import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Donation from "../Pages/Donation";
import SignIn from "../Pages/Auth/SignUp";
import Search from "../Pages/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      { index:true, 
        Component:Home
    },
    {
        path:"donation-requests",
        Component:Donation
    },
    {
        path:'search',
        Component:Search
    },
    {
        path:"login",
        Component:Login
    },
    {
        path:"sign-up",
        Component:SignIn
    }
    ]   
  },
]);