import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const ProfilePage = () => {
  const { user } = useSelector(selectUser);
  console.log(user);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white max-w-xs w-[280px] shadow-xl rounded-md p-4 sm:p-6 mx-2 sm:mx-0">
        <div className="mb-6">
          <div className="flex flex-col justify-between mb-4 space-y-2">
            <div>
              <h3 className="text-lg font-semibold">Nom - Prenom</h3>
              <p className="text-gray-600">{`${user?.prenom} ${user?.nom}`}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-gray-600">
                {user?.telephone
                  ? user?.telephone
                  : "Pas de numéro de téléphone fourni."}
              </p>
            </div>
          </div>
        </div>
        <p>Autres donnees en cours d&apos;implementation</p>
      </div>
    </div>
  );
};

export default ProfilePage;
