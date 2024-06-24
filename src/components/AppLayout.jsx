import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="mx-auto h-auto w-full ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
