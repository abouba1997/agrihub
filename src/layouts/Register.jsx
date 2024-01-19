import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { openLoginModal } from "../features/modal/modalSlice";
import { Logo1 } from "../assets";
import { useEffect, useState } from "react";
// import {
//   selectUser,
//   signInWithGoogle,
//   signUpWithEmailPassword,
// } from "../features/user/userSlice";
import toast from "react-hot-toast";
import { registerUser, selectUser } from "../features/user/userSlice";

const initialData = {
  prenom: "",
  nom: "",
  telephone: "",
  password: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user, status } = useSelector(selectUser);
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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
    const { nom, prenom, telephone, password } = formData;
    if (!nom || !prenom || !telephone || !password) {
      toast.error("telephone ou Mot de passe requis");
      return;
    }

    await dispatch(registerUser(formData)).then((result) => {
      if (result?.error?.message === "Rejected") {
        toast.error("Erreur: utilisateur existe ou invalide");
        return;
      }

      toast.success(
        "utilisateur cree avec succes, vous pouvez vous connecter pour plus d'accessibilite"
      );
      navigate("/");
    });
  };

  return (
    <section className="gradient-form h-screen bg-neutral-200 z-50">
      <div className="max-w-[450px] sm:max-w-[500px] md:max-w-screen-sm lg:max-w-screen-lg h-full p-3 sm:p-4 md:p-6 lg:p-10 mx-auto">
        <div className="gap-6 flex h-full w-full flex-wrap items-center justify-center text-neutral-800">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="gap-0 lg:flex justify-center lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 p-4 md:p-6">
                    {/* Logo */}
                    <div className="text-center">
                      <div className="flex flex-row items-center justify-center">
                        <img
                          src={Logo1}
                          alt="Boulangerie du peuple"
                          className="w-14 md:w-24 h-auto"
                        />
                      </div>
                      <h4 className="mb-6 mt-1 pb-1 text-xl font-semibold flex flex-col">
                        <span className="relative pb-2 before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-[80px] before:bg-gradient-to-r before:from-secondary before:to-primary">
                          AgriHub
                        </span>
                      </h4>
                    </div>
                    <form
                      className="space-y-1 md:space-y-2"
                      onSubmit={handleFormSubmit}
                    >
                      <p className="text-center">
                        🌟Prenez quelques instants pour vous inscrire et formez
                        vous en toute simplicité sur notre plateforme!💡
                      </p>
                      {/* prenom and nom */}
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <label
                            htmlFor="prenom"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Prénom
                          </label>
                          <input
                            type="text"
                            name="prenom"
                            id="prenom"
                            value={formData.prenom}
                            onChange={handleFormChange}
                            className="text-xs min-[320px]:text-sm sm:text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                            placeholder="Votre prénom"
                            required={true}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="nom"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Nom
                          </label>
                          <input
                            type="text"
                            name="nom"
                            id="nom"
                            value={formData.nom}
                            onChange={handleFormChange}
                            className="text-xs min-[320px]:text-sm sm:text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5"
                            placeholder="Votre nom"
                            required={true}
                          />
                        </div>
                      </div>
                      {/* <!--Email input--> */}
                      <Input
                        label="Votre numero de telephone"
                        type="text"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleFormChange}
                        placeholder="+22377777777"
                        required={true}
                      />

                      {/* Password input */}
                      <Input
                        label="Votre mot de passe"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormChange}
                        placeholder="••••••••"
                        required={true}
                      />

                      {/* Submit button */}
                      <div className="pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className={`bg-gradient-to-r from-secondary to-primary inline-block w-full rounded px-6 pb-2 pt-2.5 text-base font-normal hover:scale-[1.02] leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-300 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] ${
                            status === "loading"
                              ? "disabled:cursor-not-allowed disabled:bg-secondary/50"
                              : ""
                          }`}
                          disabled={status === "loading"}
                        >
                          {status === "loading" ? (
                            <>
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 me-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                />
                              </svg>{" "}
                              en cours...
                            </>
                          ) : (
                            <>S&apos;inscrire</>
                          )}
                        </button>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center">
                        <p className="mb-0 mr-2">Vous avez deja un compte?</p>
                        <button
                          type="button"
                          onClick={() => {
                            dispatch(openLoginModal());
                            navigate("/");
                          }}
                          className="inline-block rounded text-sm md:text-base text-secondary hover:underline font-medium leading-normal text-danger transition-all duration-300 ease-in-out"
                        >
                          Se connecter
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div className="hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-secondary to-primary">
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We sommes plus qu&apos;une pizzeria et une boulangerie
                    </h4>
                    <p className="text-sm">
                      En plus de nos délicieuses pizzas, nous vous proposons une
                      incroyable variété de produits frais ! De délicieux
                      croissants dorés, des gâteaux succulents, des pâtes
                      fraîches, de savoureux chawarmas, des glaces artisanales,
                      des pains chauds et croustillants, des boissons
                      rafraîchissantes, et bien d&apos;autres délices vous
                      attendent. Goûtez à la diversité de nos saveurs, que ce
                      soit pour nos pizzas ou pour une multitude d&apos;autres
                      plaisirs gourmands !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
