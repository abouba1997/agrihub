import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-center items-center mt-5 h-auto text-2xl text-primary bg-secondary/50">
      <FaExclamationTriangle size={"7em"} className="text-secondary" />
      <h1 className="font-semibold text-3xl italic mt-3">404</h1>
      <p className="leading-10 mt-3 italic">
        Désolé, cette page n&apos;existe pas.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="px-2 py-1 bg-secondary text-white hover:bg-primary scale-100 hover:scale-105 transition-all duration-500 mt-6 rounded-md text-base"
      >
        Rétournez en arrière
      </button>
    </div>
  );
};

export default NotFound;
