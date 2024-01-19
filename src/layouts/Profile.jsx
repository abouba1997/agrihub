import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";
import { useEffect } from "react";
import { openLoginModal } from "../features/modal/modalSlice";
import { BgGreen1 } from "../assets";

const BgImgStyle = {
  backgroundImage: `url(${BgGreen1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Profile = () => {
  const { user } = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/");
      dispatch(openLoginModal());
    }
  }, [user, navigate, dispatch]);

  return (
    <section className="flex w-full flex-col" style={BgImgStyle}>
      <div className="flex flex-wrap sm:flex-row justify-center space-x-2 items-center mt-28 mb-2 sm:mb-4 md:mb-6 lg:mb-10">
        <Link
          to="/profile"
          className={`px-2 py-2 rounded-full border-2 hover:bg-secondary whitespace-nowrap mb-2 min-[500]:mb-0 ${
            location.pathname === "/profile"
              ? "bg-secondary text-white"
              : "bg-gray-400 text-gray-900"
          }`}
        >
          Profile
        </Link>
        <Link
          to="/profile/mes-formations"
          className={`px-2 py-2 rounded-full border-2 hover:bg-secondary whitespace-nowrap mb-2 min-[500]:mb-0 ${
            location.pathname === "/profile/mes-formations"
              ? "bg-secondary text-white"
              : "bg-gray-400 text-gray-900"
          }`}
        >
          Mes cours
        </Link>
      </div>
      <div className="flex items-center h-[calc(100vh-10rem)] justify-center max-w-screen-lg mx-auto w-full">
        <Outlet />
      </div>
    </section>
  );
};

export default Profile;
