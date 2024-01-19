import { BgGreen1, GirlLearner, Logo2 } from "../assets";
import { Link } from "react-router-dom";

const BgImgStyle = {
  backgroundImage: `url(${BgGreen1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Formation = () => {
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
      <section
        id="home"
        style={BgImgStyle}
        className="flex min-h-screen w-full justify-center items-center px-2 lg:px-0 text-white"
      >
        <div className="max-w-screen-xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 text-black sm:text-white">
            {/* text section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 lg:pl-2 xl:ml-2 xl:pl-0">
              <h1 className="max-w-2xl text-lg min-[300px]:text-2xl sm:text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-4xl xl:text-5xl">
                Cours 100% en ligne
              </h1>
              <div>
                <p className="px-4 sm:px-0 text-center sm:text-start font-medium text-lg min-[300px]:text-2xl sm:text-xl md:text-2xl lg:text-3xl">
                  Pratique
                </p>
                <p className="px-4 sm:px-0 text-center sm:text-start font-medium text-lg min-[300px]:text-2xl sm:text-xl md:text-2xl lg:text-3xl">
                  Suivi-accompagnemet
                </p>
                <p className="px-4 sm:px-0 text-center sm:text-start font-medium text-lg min-[300px]:text-2xl sm:text-xl md:text-2xl lg:text-3xl">
                  Certification
                </p>
              </div>
              <div className="max-w-2xl font-normal md:text-base lg:text-lg my-4 bg-black/50 rounded-md">
                <span className="text-justify text-white text-xs min-[300px]:text-sm min-[640px]:text-[13px] md:text-lg lg:text-xl xl:text-3xl font-light italic rounded-e-full py-2 px-4">
                  Nos cours offrent une expérience d&apos;apprentissage
                  entièrement en ligne, garantissant une flexibilité maximale
                  pour les apprenants. En mettant l&apos;accent sur la pratique,
                  nos programmes sont conçus pour être immersifs, permettant aux
                  participants d&apos;appliquer directement leurs connaissances
                  dans des situations réelles.
                </span>
              </div>
              <div>
                <button
                  to="/order"
                  className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-white px-4 py-2 rounded-full transition-transform hover:scale-105  duration-200"
                >
                  Inscrivez-vous
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="order-1 sm:order-2 flex justify-center items-center relative">
              <div className="w-full sm:w-auto">
                {/* main image */}
                <div className="flex items-center justify-center rounded-3xl overflow-hidden">
                  <img
                    src={GirlLearner}
                    alt="Implantation de carrot"
                    className="w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] border-[8px] border-white md:h-[350px] md:w-[350px] lg:w-[450px] lg:h-[450px] rounded-3xl mx-auto object-cover inline-block hover:scale-[1.01] hover:border-[8px] hover:border-white duration-200 cursor-pointer"
                  />
                </div>
                {/* list image */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Formation;
