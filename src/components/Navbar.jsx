import { useDispatch, useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Logo2 } from "../assets";
import {
  closeLoginModal,
  closeMobileMenu,
  closeSearchModal,
  openMobileMenu,
  selectLoginModalOpen,
  selectMobileMenuOpen,
  selectSearchModalOpen,
} from "../features/modal/modalSlice";
import { Modal } from "../modals";
import Search from "./Search";
import NavbarRight from "./NavbarRight";
import { setActiveLink } from "../features/page/pageSlice";
import { Login } from "../layouts";
import { NavbarLinks } from "../utils/data";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isSearchModalOpen = useSelector(selectSearchModalOpen);
  const isLoginModalOpen = useSelector(selectLoginModalOpen);
  const isMobileMenuOpen = useSelector(selectMobileMenuOpen);

  return (
    <>
      <div className="absolute top-4 sm:top-2 md:-top-3 lg:-top-6 right-0 sm:right-6">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse py-1"
        >
          <img
            src={Logo2}
            alt="CTDIT Logo Image"
            className="w-28 h-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:w-48 lg:h-48"
          />
        </Link>
      </div>
      <div className="absolute top-12 z-20 w-[60%] sm:w-[80%] bg-white/35 backdrop-filter shadow-md rounded-e-full">
        {/* Desktop and Tablet */}
        <div className="hidden md:flex max-w-screen-lg justify-between px-2 mx-auto">
          <ul className="flex h-12 gap-4">
            {NavbarLinks.map((link) => (
              <li key={link.id} className="font-medium h-full">
                {/* <Link
                  to={link.path}
                  className="cursor-pointer text-white hover:text-[#02703b] md:text-[13px] lg:text-base h-full flex items-center relative after:absolute after:h-[2.5px] after:bottom-0 after:left-0 after:hover:bg-[#02703b] after:w-0 hover:after:w-full after:bg-[#02703b] after:transition-all after:duration-500"
                > */}
                <Link
                  to={link.path}
                  className={`cursor-pointer hover:text-[#02703b] md:text-[13px] lg:text-base h-full flex items-center relative after:absolute after:h-[2.5px] after:bottom-0 after:left-0 after:hover:bg-[#02703b] after:w-0 hover:after:w-full after:bg-[#02703b] after:transition-all after:duration-500 ${
                    location.pathname === link.path
                      ? "after:w-full text-secondary"
                      : "text-white"
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <NavbarRight />
        </div>

        {/* Mobile  */}
        <div className="flex flex-col md:hidden w-full bg-white/35 h-full rounded-e-full">
          <div className="flex justify-between px-4">
            <div className="md:hidden flex items-center">
              {isMobileMenuOpen ? (
                <span
                  className="p-2 hover:bg-neutral-100 rounded-md text-gray-500 cursor-pointer focus:ring-2 focus:ring-black"
                  tabIndex={0}
                  onClick={() => dispatch(closeMobileMenu())}
                >
                  <IoMdClose size={24} />
                </span>
              ) : (
                <span
                  className="p-2 hover:bg-neutral-100 rounded-md text-gray-500 cursor-pointer focus:ring-2 focus:ring-slate-500"
                  tabIndex={0}
                  onClick={() => dispatch(openMobileMenu())}
                >
                  <FiMenu size={24} />
                </span>
              )}
            </div>
            <NavbarRight />
          </div>
          {isMobileMenuOpen && (
            <div className={`md:hidden`}>
              <div className="space-y-1 pb-3 pt-2">
                {NavbarLinks.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className={`text-[#1C086B]/70 cursor-pointer block px-3 py-2 text-base font-medium leading-6 ${
                      location.pathname === link.path
                        ? "bg-[#1C086B]/20 border-l-4 border-l-[#1C086B]"
                        : "bg-white hover:bg-[#1C086B]/5"
                    }`}
                    onClick={() => {
                      dispatch(closeMobileMenu());
                      dispatch(setActiveLink(link.path));
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Search Modal */}
      <Modal
        isOpen={isSearchModalOpen}
        closeModal={() => dispatch(closeSearchModal())}
      >
        <Search />
      </Modal>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        closeModal={() => dispatch(closeLoginModal())}
      >
        <Login />
      </Modal>
      {/* <Cart /> */}
    </>
  );
};

export default Navbar;
