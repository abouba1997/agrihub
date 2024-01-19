import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#02703b]/30 mt-auto">
      <div className="mx-auto w-full max-w-screen-lg p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#02703b] sm:text-center">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              AgriHub™
            </Link>
            . Tous droits réservés.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-[#02703b] hover:text-gray-900">
              <FaFacebookF className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-[#02703b] hover:text-gray-900 ms-5">
              <FaInstagram className="w-4 h-4" />
              <span className="sr-only">Instagram community</span>
            </a>
            <a href="#" className="text-[#02703b] hover:text-gray-900 ms-5">
              <FaTiktok className="w-4 h-4" />
              <span className="sr-only">Tiktok account</span>
            </a>
            <a href="#" className="text-[#02703b] hover:text-gray-900 ms-5">
              <FaTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
