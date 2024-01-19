import { useDispatch, useSelector } from "react-redux";
import { openLoginModal, openSearchModal } from "../features/modal/modalSlice";
import { FaSearch } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { selectUser, signOutUser } from "../features/user/userSlice";
import { useState } from "react";
import { LogoVert } from "../assets";
import toast from "react-hot-toast";

const NavbarRight = () => {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const handleLogoutClick = async () => {
    dispatch(signOutUser());
    navigate("/");
    toast.success("Déconnecté ! À la prochaine.");
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const imagSrc = user && user?.photoURL ? user?.photoURL : LogoVert;

  return (
    <div className="flex items-center p-0 rounded-lg">
      <div onClick={() => dispatch(openSearchModal())}>
        <FaSearch className="text-[#02703b] mr-3 cursor-pointer" size={18} />
      </div>
      {user ? (
        <div className="inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:pr-0 flex">
          <div className="relative">
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#02703b]"
                onClick={toggleUserMenu}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={imagSrc}
                  alt="Image profile"
                />
              </button>
            </div>
            {menuOpen && (
              <div
                className={`absolute right-0 mt-3 z-10 w-48 origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
              >
                <Link
                  to="/profile"
                  onClick={handleLinkClick}
                  className="flex px-4 py-2 text-sm text-gray-800 rounded-t-md hover:bg-gray-100 transition-all duration-300"
                >
                  Votre Profile
                </Link>
                {user?.isAdmin && (
                  <Link
                    to="/parameter"
                    onClick={handleLinkClick}
                    className="flex px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-all duration-300"
                  >
                    Parametres
                  </Link>
                )}
                <button
                  onClick={handleLogoutClick}
                  className="logout-btn px-4 py-2 text-sm text-gray-800 flex flex-row items-center group rounded-b-md hover:bg-gray-100 transition-all duration-300 w-full"
                >
                  <span className="hidden sm:flex">Se deconnecter</span>
                  <FiLogOut
                    className="ml-2 group-hover:translate-x-2 transition-all duration-300"
                    size={16}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <button
            onClick={() => dispatch(openLoginModal())}
            className="bg-[#02703b] md:bg-white/5 scale-100 text-white md:border md:border-[#242424] text-sm flex items-center py-0.5 md:py-1.5 px-2 rounded hover:bg-[#02703b] hover:scale-105 hover:border-[#02703b] md:hover:text-[#ffffff] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300"
          >
            <span className="sm:flex font-medium max-[500px]:text-[12px] hidden">
              Se connecter
            </span>
            <FiLogIn className="ml-0 md:ml-2" size={24} title="Se connecter" />
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarRight;
