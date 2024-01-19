import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Business,
  CourseDetails,
  Dashboard,
  Main,
  Marketplace,
  NotFound,
  Register,
  Root,
} from "./layouts";
import FormationsList from "./layouts/FormationsList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/formations" element={<FormationsList />} />
      <Route path="course-details" element={<CourseDetails />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/about" element={<About />} />
      <Route path="/business" element={<Business />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
