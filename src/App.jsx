import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./sections/HomePage";
import Discover from "./sections/Discover";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
]);
const App = () => {
  return (
    <main className="">
      <RouterProvider router={appRoutes} />
    </main>
  );
};

export default App;
