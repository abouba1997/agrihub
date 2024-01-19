import { RxCross2 } from "react-icons/rx";

const Modal = ({ isOpen, closeModal, children }) => {
  return isOpen ? (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div
        className="fixed inset-0 z-20 flex items-center justify-center px-4 sm:px-0 cursor-pointer"
        onClick={() => closeModal}
      >
        <div
          className="bg-white p-4 rounded-lg shadow-lg max-w-screen-md relative cursor-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="">{children}</div>
          <div className="absolute top-0 right-0 mt-4 mr-4 flex justify-end">
            <button
              className="px-1.5 py-0.5 bg-transparent rounded-md border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
              onClick={closeModal}
            >
              <RxCross2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
