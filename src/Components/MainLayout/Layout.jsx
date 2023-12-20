import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <Navbar />
        <div className="px-5 md:px-10">
        <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
