import { useNavigate } from "react-router-dom";
import { GirlLearner } from "../assets";
// import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer">
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md h-full hover:shadow-2xl"
        onClick={() => {
          navigate("/course-details");
          // dispatch(setCurrentCourse(course));
        }}
      >
        <img
          className="w-full h-40 object-cover object-center"
          src={GirlLearner}
          alt="Course Image"
        />

        <div className="p-4 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl text-secondary font-semibold mb-2">
              {course?.titre}
            </h2>
            <p className="text-gray-600 mb-4">{course?.description}</p>

            <div className="flex items-center justify-between mb-auto">
              <p className="text-sm text-gray-500">
                {course?.formateur ? course?.formateur : "Nom Formateur"}
              </p>
              <p className="text-lg font-bold text-green-600">
                {course?.price
                  ? course?.price?.toFixed(2)
                  : parseInt(5000).toLocaleString("fr-FR")}{" "}
                FCFA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
