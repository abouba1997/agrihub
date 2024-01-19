// CoursePage.jsx

import { BgGreen2, CarrotImage } from "../assets";

const TechniquesDeCultureDesCarottes = {
  title: "Techniques de Culture des Carottes",
  description:
    "Ce cours approfondit les méthodes de culture spécifiques aux carottes, couvrant les aspects tels que le sol idéal, les techniques d'irrigation, et les soins nécessaires pour une croissance optimale.",
  difficulty: "Intermédiaire",
  duration: "4 semaines",
  image: CarrotImage,
  parts: [
    {
      title: "Introduction",
      description: "Introduction aux techniques de culture des carottes.",
      videoUrl: "https://example.com/intro-video",
    },
    {
      title: "Chapitre 1: Préparation du Sol",
      description: "Préparation du sol pour la culture des carottes.",
      videoUrl: "https://example.com/chapter1-video",
    },
    {
      title: "Chapitre 2: Techniques d'Irrigation",
      description:
        "Exploration des méthodes d'irrigation efficaces pour les cultures de carottes.",
      videoUrl: "https://example.com/chapter2-video",
    },
    {
      title: "Chapitre 3: Gestion des Ravageurs",
      description:
        "Gestion des ravageurs dans la culture des carottes et stratégies de prévention.",
      videoUrl: "https://example.com/chapter3-video",
    },
  ],
};

const BgImgStyle = {
  backgroundImage: `url(${BgGreen2})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};

const CourseDetails = () => {
  return (
    <section
      style={BgImgStyle}
      className="flex flex-col h-screen w-full justify-center items-center px-2 pt-36 lg:px-0 text-white"
    >
      <div className="my-4">
        <h1 className="text-3xl font-bold text-white">
          {TechniquesDeCultureDesCarottes.title}
        </h1>
      </div>
      <div className="max-w-screen-xl w-full flex">
        <div className="grid grid-cols-1 w-full sm:w-1/2">
          {/* text section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 lg:pl-2 xl:ml-2 xl:pl-0">
            <p className="px-4 sm:px-0 text-center sm:text-start font-medium text-lg min-[300px]:text-2xl sm:text-xl md:text-2xl lg:text-3xl">
              {TechniquesDeCultureDesCarottes.description}
            </p>
            <p className="px-4 sm:px-0 text-center sm:text-start font-medium text-lg min-[300px]:text-2xl sm:text-xl md:text-2xl lg:text-3xl">
              <strong>Difficulty:</strong>{" "}
              {TechniquesDeCultureDesCarottes.difficulty}
            </p>
            <p className="px-4 sm:px-0 text-center sm:text-start font-medium text-lg min-[300px]:text-2xl sm:text-xl md:text-2xl lg:text-3xl">
              <strong>Duration:</strong>{" "}
              {TechniquesDeCultureDesCarottes.duration}
            </p>
          </div>
          {/* image section */}
          <div className="order-1 flex justify-center items-center relative">
            <div className="w-full sm:w-auto">
              {/* main image */}
              <div className="flex items-center justify-center rounded-3xl overflow-hidden">
                <img
                  src={CarrotImage}
                  alt="Implantation de carrot"
                  className="w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] border-[8px] border-white md:h-[350px] md:w-[350px] lg:w-[350px] lg:h-[250px] rounded-3xl mx-auto object-cover inline-block hover:scale-[1.01] hover:border-[8px] hover:border-white duration-200 cursor-pointer"
                />
              </div>
              {/* list image */}
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl mt-6 mb-4">Sections du Cours :</h2>
          <ul>
            {TechniquesDeCultureDesCarottes.parts.map((part, index) => (
              <li key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{part.title}</h3>
                <p className="text-gray-600 mb-2">{part.description}</p>
                <a
                  href={part.videoUrl}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
