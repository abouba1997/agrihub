import { Link } from "react-router-dom";
import { BgGreen2 } from "../assets";

const BgImgStyle = {
  backgroundImage: `url(${BgGreen2})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Markeplace = () => {
  return (
    <section
      style={BgImgStyle}
      className="flex h-screen w-full justify-center items-center px-2 pt-36 lg:px-0 text-black"
    >
      <div className="bg-transparent h-[calc(100vh-9rem)] flex flex-col items-center justify-center">
        <p className="font-bold text-3xl">
          Se presentera la marketplace (Marche de produit agricole)
        </p>
        <p className="font-bold italic text-xl text-secondary flex">
          Implementation de la page cours
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

export default Markeplace;
