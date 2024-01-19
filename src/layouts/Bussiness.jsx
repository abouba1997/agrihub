import { Link } from "react-router-dom";
import { BgGreen1 } from "../assets";

const BgImgStyle = {
  backgroundImage: `url(${BgGreen1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Bussiness = () => {
  return (
    <section
      style={BgImgStyle}
      className="flex h-screen w-full justify-center items-center px-2 pt-36 lg:px-0 text-black"
    >
      <div className="bg-transparent h-[calc(100vh-9rem)] flex flex-col items-center justify-center">
        <p className="font-bold text-xl text-center text-white">
          Bienvenue au centre d&apos;affaires d&apos;AgriHub, un lieu de
          convergence pour les entrepreneurs locaux déterminés à investir dans
          des projets agricoles. Les particuliers ont l&apos;opportunité de
          présenter leurs projets, sollicitant ainsi une assistance précieuse
          pour mener à bien leurs initiatives. AgriHub sert de plateforme
          dynamique pour faciliter ces échanges, favorisant ainsi le
          développement fructueux de projets agricoles, allant du marché des
          produits
        </p>
        <p className="font-bold italic text-xl text-secondary flex">
          Page et ses fonctionalites en cours d&apos;implementation
        </p>
        <Link
          to="/"
          className="px-2 py-1 bg-secondary text-white hover:bg-primary scale-100 hover:scale-105 transition-all duration-500 mt-6 rounded-md text-base"
        >
          Rétournez en arrière
        </Link>
      </div>
    </section>
  );
};

export default Bussiness;
