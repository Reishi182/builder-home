import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./../components/AppLayout";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Service from "./../pages/Service";
import Register from "./../pages/Register";
import ResetPassword from "./../pages/ResetPassword";
import PageNotFound from "./../pages/PageNotFound";
import Arsitek from "../pages/Arsitek";
import Desain from "../pages/Desain";

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
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset_password/:step" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
