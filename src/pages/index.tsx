import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Header } from "../components";
import { About } from "./About";
import { Appointment } from "./Appointment";
import { Donate } from "./Donate";
import { Home } from "./Home";
import Layout from "./Layout";
import { Login } from "./Login";

export const route = {
  home: "/",
  about: "/sobre",
  donate: "/porque-doar",
  appointment: "/agendamento",
  login: "/login",
};

export const Routes = () => {
  return (
    <>
      <Header />
      <Layout>
        <RouterRoutes>
          <Route path={route.home} element={<Home />} />
          <Route path={route.about} element={<About />} />
          <Route path={route.appointment} element={<Donate />} />
          <Route path={route.donate} element={<Appointment />} />
          <Route path={route.login} element={<Login />} />
        </RouterRoutes>
      </Layout>
    </>
  );
};
