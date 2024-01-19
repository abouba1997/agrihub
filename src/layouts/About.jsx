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

const About = () => {
  return (
    <section
      style={BgImgStyle}
      className="flex h-screen w-full justify-center items-center px-2 pt-36 lg:px-0 text-white"
    >
      <div className="bg-transparent h-[calc(100vh-9rem)] flex flex-col items-center justify-center">
        <p className="font-bold text-3xl">
          Se presentera les informations concernat l&apos;entreprise et la
          plateforme
        </p>
        <p className="font-bold italic text-xl text-secondary flex">
          Page en cours d&apos;implementation
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

export default About;
