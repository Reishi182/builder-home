import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mx-auto w-full ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
