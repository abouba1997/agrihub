import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Root;
