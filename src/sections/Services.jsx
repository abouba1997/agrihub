import {
  OrangeImage,
  AnanasImage,
  SaladImage,
  Logo1,
  BgWhite,
} from "../assets";

const BgImgStyle = {
  backgroundImage: `url(${BgWhite})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Services = () => {
  return (
    <section
      id="services"
      style={BgImgStyle}
      className="flex h-screen w-full bg-white px-4 lg:px-0"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto mt-14">
        <div className="flex flex-col">
          <h2 className="mt-2 md:mt-4 mb-2 py-2 text-secondary uppercase text-center relative">
            <span className="text-[#02703b] py-2 before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[#02703b] before:h-1 before:w-[100px]">
              CE QU&apos;ON VOUS PROPOSE
            </span>
          </h2>
          <p className="text-sm md:text-base text-center">
            Bienvenue chez AgriHub, l&apos;expérience ultime de
            l&apos;agriculture numérique ! Découvrez nos solutions innovantes
            cultivées avec dévouement, à intégrer dans vos pratiques agricoles.
          </p>
          <div className="flex flex-row items-center justify-center mt-0 md:mt-5">
            <img
              src={Logo1}
              alt="Boulangerie du peuple"
              className="w-36 md:w-44 h-auto"
            />
          </div>
          <p className="text-sm md:text-base text-center md:mt-5">
            Explorez bien au-delà de nos solutions agricoles de pointe chez
            AgriHub ! En plus de notre gamme de technologies agricoles,
            découvrez une multitude de possibilités : des cours de formations
            agricole, en passant par les conseils personnalisés des proprietes
            des cours. Plongez dans l&apos;univers AgriHub et savourez une
            variété exceptionnelle de solutions pour une agriculture connectée
            et performante.
          </p>
        </div>
        <div className="mt-1 mb-1 sm:mt-3 md:mt-8 w-full mx-auto">
          <h1 className="text-center text-[#02703b] text-xl sm:text-2xl md:text-4xl max-w-screen-md mx-auto font-semibold mb-4">
            Votre Partenaire Agricole et Formations
          </h1>
          <div className="grid gap-1 sm:gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <img
                src={AnanasImage}
                alt="Image pour facile a commander"
                className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 object-cover rounded-lg border-[4px] border-[#02703b] mb-2"
              />
              <div className="max-w-[250px] text-center">
                <p className="font-bold text-base sm:text-xl md:text-2xl text-center">
                  Facile À Cultiver
                </p>
                <span className="text-center text-xs sm:text-sm md:text-base leading-[5px]">
                  Explorez les processus simplement dans langagues locales
                  (français et bambara)
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={SaladImage}
                alt="Image pour la livraison rapide"
                className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 object-cover rounded-lg border-[4px] border-[#02703b] mb-2"
              />
              <div className="max-w-[250px] text-center mb-auto">
                <p className="font-bold text-base sm:text-xl md:text-2xl text-center">
                  Vidéo pratique
                </p>
                <span className="text-center text-xs sm:text-sm md:text-base">
                  Vidéo pratique couvrant toutes les phases de la production
                  jusqu&apos;à la récolte.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={OrangeImage}
                alt="Image pour la meilleure qualite des services"
                className="w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 object-cover rounded-lg border-[4px] border-[#02703b] mb-2"
              />
              <div className="max-w-[250px] text-center">
                <p className="font-bold text-base sm:text-xl md:text-2xl text-center">
                  Meilleure qualité
                </p>
                <span className="text-center text-xs sm:text-sm md:text-base">
                  Un réseau de distribution hautement efficace.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
