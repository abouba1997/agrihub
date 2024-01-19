import { Logo1 } from "../assets";

const Search = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:py-0 max-w-screen-lg w-full">
      <span className="flex flex-row items-center mb-6 text-2xl font-semibold text-gray-900">
        <img className="w-20 md:w-28 h-auto" src={Logo1} alt="CTDIT Logo" />
      </span>
      <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-lg xl:p-0 space-y-2">
        <div className="p-1 sm:p-2 md:p-4 space-y-4 md:space-y-6">
          <input
            type="text"
            className="text-sm text-secondary sm:text-base h-10 w-full px-1 sm:px-3 rounded-t-md z-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] outline-none focus:outline-none focus:border-b-[3px] border-b-2 border-secondary focus:transition-all focus:duration-200"
            placeholder="Rechercher tous ce vous voulez..."
          />
        </div>
        <div className="min-h-[200px] max-w-full">
          <p className="text-center text-secondary/70 text-sm leading-5">
            Pas de résultats!!!🤷‍♂️🚫❌😕🤔🔍
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
