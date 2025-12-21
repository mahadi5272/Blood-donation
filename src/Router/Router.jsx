import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Donation from "../Pages/Donation";
import SignIn from "../Pages/Auth/SignUp";
import Search from "../Pages/Search";
import DashbordLayout from "../Layouts/DashbordLayout";
import AddReqest from "../Pages/Dashbord/AddReqest";
import PriveteRoute from "../priveteRoute/PriveteRoute";
import AllRequest from "../Pages/Dashbord/AllUsers";
import AllUsers from "../Pages/Dashbord/AllUsers";
import MyRequest from "../Pages/Dashbord/MyRequest";
import Successe from "../Pages/Payment/Successe";
import cenceled from "../Pages/Payment/cenceled";
import Profile from "../Pages/Dashbord/Profile";
import TotalBloodDonet from "../Pages/Dashbord/TotalBloodDonet";
import OverVew from "../Pages/Dashbord/OverVew";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "donation-requests",
        Component: Donation,
      },
      {
        path: "search",
        Component: Search,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "sign-up",
        Component: SignIn,
      },
      {
        path: "payment-success",
        Component: Successe,
      },
      {
        path: "payment-cancelled",
        Component: cenceled,
      },
    ],
  },
  {
    path: "dashbord-layout",
    element: (
      <PriveteRoute>
        <DashbordLayout></DashbordLayout>
      </PriveteRoute>
    ),
    children: [
      {
        index: true,
        Component: OverVew,
      },
      {
        path: "add-request",
        Component: AddReqest,
      },
      {
        path: "all-AllUsers",
        Component: AllUsers,
      },
      {
        path: "my-request",
        Component: MyRequest,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "all-requests",
        Component: TotalBloodDonet,
      },
    ],
  },
]);
