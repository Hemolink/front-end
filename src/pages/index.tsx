import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Header } from "../components";
import { About } from "./About";
import { Appointment } from "./Appointment";
import { Donate } from "./Donate";
import { Home } from "./Home";

export const route = {
  home: "/",
  about: "/sobre",
  donate: "/porque-doar",
  appointment: "/agendamento",
};

export const Routes = () => {
  return (
    <>
      <Header />
      <RouterRoutes>
        <Route path={route.home} element={<Home />} />
        <Route path={route.about} element={<About />} />
        <Route path={route.appointment} element={<Donate />} />
        <Route path={route.donate} element={<Appointment />} />
      </RouterRoutes>
    </>
  );
};
