import { useDispatch, useSelector } from "react-redux";
import {
  AnanasImage,
  BgGreen2,
  CarrotImage,
  FillePlantationImage,
  GarsImage,
  OrangeImage,
  SaladImage,
  TerrainImage,
  TomateImage,
} from "../assets";
import { CourseCard } from "../components";
import { fetchCourses, selectCourses } from "../features/course/courseSlice";
import { useEffect } from "react";

const courses_i = [
  {
    titre: "Production des Carrottes",
    image: CarrotImage,
    description:
      "Maîtrisez les fondamentaux des techniques avancées de culture agricole pour une agriculture efficace.",
    instructor: "Dr. Johnson",
    duration: "10 semaines",
    level: "Avancé",
    price: 12999,
  },
  {
    titre: "Formation en production de la salade",
    image: SaladImage,
    description:
      "Explorez le monde des cultures légumières et analysez les pratiques agricoles intemporelles.",
    instructor: "Dr. Davis",
    duration: "8 semaines",
    level: "Débutant",
    price: 17999,
  },
  {
    titre: "Formation en production de la pasteques",
    image: FillePlantationImage,
    description:
      "Parcourez l'histoire des cultures agricoles et découvrez les pratiques qui ont façonné l'agriculture moderne.",
    instructor: "Prof. White",
    duration: "14 semaines",
    level: "Intermédiaire",
    price: 20000,
  },
  {
    titre: "Production pratiques des cereales",
    image: TerrainImage,
    description:
      "Explorez des concepts mathématiques appliqués à l'agriculture pour une planification efficace.",
    instructor: "Prof. Smith",
    duration: "12 semaines",
    level: "Intermédiaire",
    price: 15000,
  },
  {
    titre: "Production des ananas fruitées",
    image: AnanasImage,
    description:
      "Découvrez le monde des cultures fruitées et analysez les pratiques agricoles intemporelles.",
    instructor: "Dr. Davis",
    duration: "8 semaines",
    level: "Débutant",
    price: 25000,
  },
  {
    titre: "Formation en production d'Hor-sol de melon",
    image: GarsImage,
    description:
      "Explorez les pratiques agricoles innovantes qui ont façonné l'agriculture moderne.",
    instructor: "Prof. White",
    duration: "14 semaines",
    level: "Intermédiaire",
    price: 35000,
  },
  {
    titre: "Production des oranges",
    image: OrangeImage,
    description:
      "Découvrez l'art de la culture fruitée et analysez les pratiques agricoles intemporelles.",
    instructor: "Dr. Davis",
    duration: "8 semaines",
    level: "Débutant",
    price: 35000,
  },
  {
    titre: "Production des tomates",
    image: TomateImage,
    description:
      "Explorez les pratiques agricoles diversifiées qui ont façonné l'agriculture moderne.",
    instructor: "Prof. White",
    duration: "14 semaines",
    level: "Intermédiaire",
    price: 25500,
  },
];

const BgImgStyle = {
  backgroundImage: `url(${BgGreen2})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const FormationsList = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector(selectCourses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <section
      style={BgImgStyle}
      className="flex h-screen w-full justify-center items-center px-2 pt-36 lg:px-0 text-white"
    >
      <div className="bg-transparent p-4 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
          Bienvenue sur AgriHub - Onglet formation
        </h1>
        <div className="w-full flex flex-col sm:flex-row justify-around items-center my-4">
          <div className="font-bold text-secondary text-xl sm:text-3xl md:text-5xl lg:text-7xl mx-2 my-2 sm:my-0 italic">
            Video
          </div>
          <div className="font-bold text-secondary text-xl sm:text-3xl md:text-5xl lg:text-7xl mx-2 my-2 sm:my-0 italic">
            Audio
          </div>
          <div className="font-bold text-secondary text-xl sm:text-3xl md:text-5xl lg:text-7xl mx-2 my-2 sm:my-0 italic">
            Fichiers PDF
          </div>
        </div>
        <p className="text-lg text-center mb-4">
          Découvrez une multitude de cours spécialisés pour améliorer vos
          compétences en agriculture. Explorez les dernières techniques, astuces
          et bonnes pratiques pour optimiser votre production.
        </p>
        <div className="flex flex-wrap -mx-4">
          {courses_i?.length > 0 &&
            courses_i?.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          {courses?.length > 0 &&
            courses?.map((course) => (
              <CourseCard key={course?.id} course={course} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FormationsList;
