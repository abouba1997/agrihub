import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { openLoginModal } from "../features/modal/modalSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate("/");
      toast.error("Veuillez");
      dispatch(openLoginModal());
    }
  }, [user, navigate, dispatch]);

  return <div>Dashboard</div>;
};

export default Dashboard;
