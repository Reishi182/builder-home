import About from "../pages/About";
import Home from "./../pages/Home";
import Desain from "../pages/Desain";
import Login from "./../pages/Login";
import Arsitek from "../pages/Arsitek";
import Account from "../pages/Account";
import Service from "./../pages/Service";
import Register from "./../pages/Register";
import Profile from "../features/account/Profile";
import AppLayout from "./../components/AppLayout";
import PageNotFound from "./../pages/PageNotFound";
import MyProject from "../features/account/MyProject";
import ForgetPassword from "./../pages/ForgetPassword";
import EditProfile from "../features/account/EditProfile";
import PersonalInfo from "../features/account/PersonalInfo";
import ResetPassword from "../features/account/ResetPassword";
import DeleteAccount from "../features/account/DeleteAccount";
import DetailArsitek from "../features/arsitek/DetailArsitek";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DetailProject from "../features/arsitek/DetailProject";
import DetailDesain from "../features/desain/DetailDesain";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="service/arsitek/:userId" element={<DetailArsitek />} />
          <Route path="service/desain/:itemId" element={<DetailDesain />} />
          <Route
            path="service/arsitek/:userId/project/:projectId"
            element={<DetailProject />}
          />
          <Route path="service" element={<Service />}>
            <Route index element={<Navigate replace to="arsitek" />} />
            <Route path="arsitek" element={<Arsitek />} />
            <Route path="desain" element={<Desain />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="account" element={<Account />}>
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-project" element={<MyProject />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="account/profile/edit" element={<EditProfile />}>
          <Route index element={<Navigate replace to="personal-info" />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="reset_password" element={<ResetPassword />} />
          <Route path="delete_account" element={<DeleteAccount />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="register" element={<Register />} />
        <Route path="reset_password/:step" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
