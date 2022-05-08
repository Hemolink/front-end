import { Route, Routes as RouterRoutes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </RouterRoutes>
  );
};
