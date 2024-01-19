import { Link } from "react-router-dom";
import { HiLocationMarker, HiOfficeBuilding, HiPhone } from "react-icons/hi";
import { Logo1, Logo2 } from "../assets";
import { Footer } from "../components";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col w-full bg-white">
      {/* Contact us page */}
      <div className="text-gray-900 px-4 lg:px-0">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#02703b] relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-tr before:from-[#02703b] before:to-[#1a4a33] transition-all ease-in-out duration-300">
            Nous contacter
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl sm:font-normal">
            Rencontrez-vous un problème technique? Souhaitez-vous nous donner
            votre avis sur une fonctionnalité bêta? Besoin d&apos;informations
            sur notre plan Business? Faites-nous savoir.
          </p>
          <div className="w-full flex flex-col lg:flex-row justify-between items-center">
            <form className="space-y-8 w-[100%] min-[450px]:w-[80%] mx-auto lg:w-8/12 flex flex-col justify-start">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm sm:text-base font-medium text-gray-900"
                >
                  Votre email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="nom@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm sm:text-base font-medium text-gray-900"
                >
                  Objet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Faites-nous savoir comment nous pouvons vous aider."
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm sm:text-base font-medium text-gray-900"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Laissez un commentaire..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#02703b] sm:w-fit hover:bg-[#02703b]/80 focus:ring-4 focus:outline-none focus:ring-primary/30"
              >
                Envoyer le message
              </button>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 items-center w-[100%] min-[450px]:w-[80%] mt-6 px-4 gap-10 lg:ml-5 sm:px-6 md:px-8 mx-auto lg:w-4/12">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center text-[#02703b] p-2 rounded-lg bg-gray-300">
                    <HiOfficeBuilding className="text-[28px] lg:text-[40px]" />
                  </div>
                  <p className="font-extrabold text-lg sm:text-xl leading-8 my-2">
                    Information:
                  </p>
                  <div className="flex flex-row items-center justify-center">
                    <img src={Logo2} className="h-8 me-3" alt="FlowBite Logo" />
                    <img src={Logo1} className="h-8 me-3" alt="FlowBite Logo" />
                  </div>
                  <div className="flex flex-col items-center text-gray-900 text-center">
                    <span>Pizza Magic</span>
                    <span>La boulangerie du peuple</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center text-[#02703b] p-2 rounded-lg bg-gray-300">
                    <Link
                      target="_blank"
                      to="https://www.google.com/maps/place/%C3%89changeur+pour+Pi%C3%A9tons+1/@12.5938472,-8.0597651,21z/data=!4m6!3m5!1s0xe51cbe017ef2d23:0x300a9416d92b6a46!8m2!3d12.5937806!4d-8.0597615!16s%2Fg%2F11rfdfsb1j?entry=ttu"
                    >
                      <HiLocationMarker className="text-[28px] lg:text-[40px]" />
                    </Link>
                  </div>
                  <p className="font-extrabold text-lg sm:text-xl leading-8 my-2">
                    Addresse:
                  </p>
                  <div className="flex flex-col items-center text-gray-900 text-center">
                    <span>SebeniKoro, Bamako</span>
                    <span>Après seulement le premier échangeur</span>
                    <span>La boulangerie du peuple</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center text-[#02703b] p-2 rounded-lg bg-gray-300">
                    <Link to="tel:+22375064545">
                      <HiPhone className="text-[28px] lg:text-[40px]" />
                    </Link>
                  </div>
                  <p className="font-extrabold text-lg sm:text-xl leading-8 mb-2">
                    Contact:
                  </p>
                  <div className="flex flex-col items-center text-gray-900 text-center">
                    <span>Nous sommes toujours heureux de vous aider.</span>
                    <span className="text-[#02703b] font-bold text-xl mt-4">
                      94671596 / 73810023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer page */}
      <Footer />
    </section>
  );
};

export default Contact;
