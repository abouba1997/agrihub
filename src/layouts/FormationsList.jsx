import { useDispatch, useSelector } from "react-redux";
import { BgGreen2 } from "../assets";
import { CourseCard } from "../components";
import { fetchCourses, selectCourses } from "../features/course/courseSlice";
import { useEffect } from "react";

const courses_i = [
  {
    title: "Advanced Mathematics",
    description:
      "Explore advanced mathematical concepts and problem-solving techniques.",
    instructor: "Prof. Smith",
    duration: "12 weeks",
    level: "Intermediate",
    price: 99.99,
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Master the fundamentals of data structures and algorithms for efficient programming.",
    instructor: "Dr. Johnson",
    duration: "10 weeks",
    level: "Advanced",
    price: 129.99,
  },
  {
    title: "Classic Literature Appreciation",
    description:
      "Dive into the world of classic literature and analyze timeless literary works.",
    instructor: "Dr. Davis",
    duration: "8 weeks",
    level: "Beginner",
    price: 79.99,
  },
  {
    title: "World History: From Ancient to Modern Times",
    description:
      "Journey through the significant events that shaped our world from ancient to modern times.",
    instructor: "Prof. White",
    duration: "14 weeks",
    level: "Intermediate",
    price: 109.99,
  },
  {
    title: "Classic Literature Appreciation",
    description:
      "Dive into the world of classic literature and analyze timeless literary works.",
    instructor: "Dr. Davis",
    duration: "8 weeks",
    level: "Beginner",
    price: 79.99,
  },
  {
    title: "World History: From Ancient to Modern Times",
    description:
      "Journey through the significant events that shaped our world from ancient to modern times.",
    instructor: "Prof. White",
    duration: "14 weeks",
    level: "Intermediate",
    price: 109.99,
  },
  {
    title: "Classic Literature Appreciation",
    description:
      "Dive into the world of classic literature and analyze timeless literary works.",
    instructor: "Dr. Davis",
    duration: "8 weeks",
    level: "Beginner",
    price: 79.99,
  },
  {
    title: "World History: From Ancient to Modern Times",
    description:
      "Journey through the significant events that shaped our world from ancient to modern times.",
    instructor: "Prof. White",
    duration: "14 weeks",
    level: "Intermediate",
    price: 109.99,
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
      <div className="bg-transparent p-4">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Bienvenue sur AgriHub Formations plateforme
        </h1>
        <p className="text-lg">
          Découvrez une multitude de cours spécialisés pour améliorer vos
          compétences en agriculture. Explorez les dernières techniques, astuces
          et bonnes pratiques pour optimiser votre production.
        </p>
        <div className="flex flex-wrap -mx-4">
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
