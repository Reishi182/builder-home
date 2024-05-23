import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./../components/AppLayout";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Service from "./../pages/Service";
import Register from "./../pages/Register";
import ResetPassword from "./../pages/ResetPassword";
import PageNotFound from "./../pages/PageNotFound";
import DetailArsitek from "../features/arsitek/DetailArsitek";
import Consult from "../features/about/Consult";
import Account from "../pages/Account";
import Arsitek from "../pages/Arsitek";
import Desain from "../pages/Desain";
import About from "../pages/About";
import Profile from "../features/account/Profile";
import MyProject from "../features/account/MyProject";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />}>
            <Route index element={<Navigate replace to="arsitek" />} />
            <Route path="arsitek" element={<Arsitek />} />
            <Route path="desain" element={<Desain />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="about/consult/:Id" element={<Consult />} />
          <Route path="account" element={<Account />}>
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my_project" element={<MyProject />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="register" element={<Register />} />
        <Route path="arsitek/:userId" element={<DetailArsitek />} />
        <Route path="reset_password/:step" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
