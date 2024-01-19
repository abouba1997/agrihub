import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo1, MaliFlag } from "../assets";
import { loginUser, selectUser } from "../features/user/userSlice";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal } from "../features/modal/modalSlice";
import Input from "../components/Input";

const initialData = {
  telephone: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector(selectUser);
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (error) {
      toast.error(error.message, {
        duration: 6000,
        position: "bottom-center",
      });
    }
  }, [error]);

  const handleFormChange = (e) => {
    setFormData((prevLoginFormData) => ({
      ...prevLoginFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { telephone, password } = formData;
    if (!telephone || !password) {
      toast.error("Numéro de téléphone et mot de passe requis", {
        duration: 6000,
        position: "bottom-center",
      });
      return;
    }

    // Check if the entered value matches the desired format
    const isValidPhone = /^[5-9]\d{7}$/.test(telephone);

    if (!isValidPhone) {
      toast.error(
        "Le numéro de téléphone n'est pas correct! Verifier s'il vous plait.",
        {
          duration: 6000,
          position: "bottom-center",
        }
      );
      return;
    }

    const correctPhone = `+223${telephone}`;

    const newFomData = { correctPhone, password };

    // Dispatch the phone authentication thunk
    dispatch(loginUser(newFomData)).then((result) => {
      if (result?.error?.message === "Rejected") {
        toast.error("Erreur lors de la connéxion", {
          duration: 6000,
          position: "bottom-center",
        });
        return;
      }

      dispatch(closeLoginModal());
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto lg:py-0 max-w-sm">
      <div id="recaptcha-container"></div>
      <span className="flex flex-row items-center text-2xl font-semibold text-gray-900">
        <img className="w-20 md:w-48 h-auto" src={Logo1} alt="CTDIT Logo" />
      </span>
      <div className="w-full bg-white md:mt-0 sm:max-w-xl xl:p-0">
        <div className="p-0 sm:p-2 space-y-4 md:space-y-6 md:p-4">
          <h1 className="font-bold leading-tight tracking-tight text-gray-900 text-xl text-center">
            Inscrivez vous en toute simplicité sur notre plateforme!💡
          </h1>
          <form className="space-y-2" onSubmit={handleFormSubmit}>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Numéro de téléphone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-2.5 pointer-events-none">
                  <img
                    className="w-6 h-6"
                    src={MaliFlag}
                    alt="Drapeau du Mali"
                  />
                  <span className="ml-2 text-sm">+223</span>
                </div>
                <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-[85px] p-2.5"
                  placeholder="70000000"
                  value={formData.telephone}
                  onChange={handleFormChange}
                />
              </div>
              {/* Password input */}
              <p
                id="helper-text-explanation"
                className="mt-2 text-sm text-gray-500"
              >
                Tapez un numéro de téléphone qui correspond au format.
              </p>
            </div>
            <Input
              label="Votre mot de passe"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              placeholder="••••••••"
              required={true}
            />
            <button
              type="submit"
              className={`w-full text-white bg-secondary hover:bg-secondary/70 hover:scale-[1.02] focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300
              ${
                status === "loading"
                  ? "disabled:cursor-not-allowed disabled:bg-secondary/50"
                  : ""
              }`}
              disabled={status === "loading"}
            >
              {status === "loading" && (
                <CgSpinner size={24} className="inline me-3 animate-spin" />
              )}
              Envoyer le code
            </button>
            {/* Register button */}
            <div className="flex items-center">
              <p className="mb-0 mr-2">Vous avez deja un compte?</p>
              <button
                type="button"
                onClick={() => {
                  navigate("/register");
                }}
                className="inline-block rounded text-sm md:text-base text-secondary hover:underline font-medium leading-normal text-danger transition-all duration-300 ease-in-out"
              >
                S&apos;enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
