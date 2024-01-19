import { SaladImage } from "../assets";
// import { CustomImagesSwiper } from "../components";

const Portfolio = () => {
  return (
    <>
      <section
        id="portfolio"
        className="flex flex-col w-full bg-white px-4 lg:px-0 max-w-screen-lg mx-auto"
      >
        <div className="flex justify-center max-w-screen-lg mx-auto w-full mt-14">
          <div className="flex flex-col w-full">
            <h2 className="mt-2 md:mt-4 mb-4 py-2 text-secondary uppercase relative text-center">
              <span className="py-2 before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-secondary before:h-1 before:w-[100px]">
                RETROUVEZ ICI NOTRE SUPERBE PORTFOLIO 😍
              </span>
            </h2>
            <p className="text-sm mb-4 md:text-base text-center">
              Pizza Magic vous sert de la magie authentiques préparées sur vos
              menus avec soin.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 rounded-lg">
            <img src={SaladImage} className="rounded-lg" alt="Speciale offre" />
          </div>
          {/* <h1>Notre gallery des images</h1>
          <div className="flex justify-center items-center">
            <CustomImagesSwiper />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
