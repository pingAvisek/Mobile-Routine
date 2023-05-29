import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="mobile-routine-container container mx-auto m-4 p-4 md:p-0">
      <Navbar />
      <main className="container mx-auto my-4">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
