import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import Payment from "../pages/Payment";
import ProtectedRoute from "../features/Auth/ProtectedRoute";
import UserForum from "../features/account/UserForum";
import Project from "../pages/Project";
import ForgetPasswordToken from "../pages/ForgetPasswordToken";
import UploadProject from "../features/project/UploadProject";

const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const Desain = lazy(() => import("../pages/Desain"));
const Login = lazy(() => import("../pages/Login"));
const Arsitek = lazy(() => import("../pages/Arsitek"));
const Account = lazy(() => import("../pages/Account"));
const Service = lazy(() => import("../pages/Service"));
const Register = lazy(() => import("../pages/Register"));
const Profile = lazy(() => import("../features/account/Profile"));
const AppLayout = lazy(() => import("../components/AppLayout"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const MyProject = lazy(() => import("../features/account/MyProject"));
const ForgetPassword = lazy(() => import("../pages/ForgetPassword"));
const EditProfile = lazy(() => import("../features/account/EditProfile"));
const PersonalInfo = lazy(() => import("../features/account/PersonalInfo"));
const ResetPassword = lazy(() => import("../features/account/ResetPassword"));
const DeleteAccount = lazy(() => import("../features/account/DeleteAccount"));
const DetailArsitek = lazy(() => import("../features/arsitek/DetailArsitek"));
const DetailProject = lazy(() => import("../features/arsitek/DetailProject"));
const DetailDesain = lazy(() => import("../features/desain/DetailDesain"));
const Transaction = lazy(() => import("../features/account/Transaction"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
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
              <Route path="proyek" element={<Project />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route
              path="service/proyek/upload-proyek"
              element={<UploadProject />}
            />
            <Route
              path="service/proyek/upload-proyek/:projectId"
              element={<UploadProject />}
            />
            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="profile" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="my-project" element={<MyProject />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="forum" element={<UserForum />} />
            </Route>
            <Route
              path="account/transaction/:paymentId"
              element={<Payment />}
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route
            path="account/profile/edit"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="personal-info" />} />
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="reset_password" element={<ResetPassword />} />
            <Route path="delete_account" element={<DeleteAccount />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
          <Route path="register" element={<Register />} />
          <Route path="reset_password" element={<ForgetPassword />} />
          <Route
            path="reset_password/:token"
            element={<ForgetPasswordToken />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
