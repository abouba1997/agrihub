// CoursePage.jsx

import { useSelector } from "react-redux";
import { BgGreen1, CarrotImage, Logo2 } from "../assets";
import {
  selectCourses,
  setCurrentCourse,
} from "../features/course/courseSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReactPlayer from "react-player";

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
  backgroundImage: `url(${BgGreen1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
};

const CourseDetails = () => {
  const navigate = useNavigate();
  const { currentCourse } = useSelector(selectCourses);
  const location = useLocation();

  const imageSrc = currentCourse?.image ? currentCourse?.image : Logo2;
  const duree = currentCourse?.duration
    ? currentCourse.duration
    : "10 Semaines";

  useEffect(() => {
    if (location.pathname !== "/course-details") {
      setTimeout(() => {
        setCurrentCourse(null);
        navigate("/formations");
      }, 1000);
    }
  }, [location, navigate]);

  return (
    <section
      style={BgImgStyle}
      className="flex flex-col h-screen w-full justify-center items-center px-2 pt-36 lg:px-0 text-white"
    >
      <div className="max-w-screen-xl w-full flex flex-col gap-10">
        <div className="w-full">
          {/* image section */}
          <div className="order-1 flex justify-center relative">
            <div className="w-full sm:w-auto">
              {/* main image */}
              <div className="flex items-center justify-center rounded-3xl overflow-hidden">
                <img
                  src={imageSrc}
                  alt="Implantation de carrot"
                  className="w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] border-[8px] border-white md:h-[350px] md:w-[350px] lg:w-[calc(100vh-3rem)] mx-5 lg:h-[350px] rounded-3xl object-cover inline-block hover:scale-[1.01] hover:border-[8px] hover:border-white duration-200 cursor-pointer"
                />
              </div>
              {/* list image */}
            </div>
          </div>
          {/* text section */}
          <div className="flex flex-col items-center justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 lg:pl-2 xl:ml-2 xl:pl-0">
            <p className="px-4 mt-7 sm:px-0 text-center sm:text-start font-normal text-lg min-[300px]:text-base sm:text-lg md:text-xl lg:text-xl">
              {currentCourse?.description}
            </p>
            <p className="px-4 sm:px-0 text-center sm:text-start font-medium text-lg min-[300px]:text-base sm:text-lg md:text-xl lg:text-xl">
              <strong>Duration:</strong> {duree}
            </p>
          </div>
        </div>
        <div className="w-full sm:pl-44">
          <h1 className="text-3xl font-bold text-white text-center sm:text-left">
            {currentCourse?.titre}
          </h1>
          <h2 className="text-2xl mt-6 mb-4">Sections du Cours :</h2>
          <ul>
            {TechniquesDeCultureDesCarottes.parts.map((part, index) => (
              <li key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{part.title}</h3>
                <p className="text-black mb-2">{part.description}</p>
                <div className="h-72 w-[80%] rounded-xl">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=iodAfFDCS5E&pp=ygUQbWFsaSBhZ3JpY3VsdHVyZQ%3D%3D"
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
