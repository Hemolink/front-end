import { Route, Routes as RouterRoutes } from "react-router-dom";
import { Header } from "../components";
import { About } from "./About";
import { Appointment } from "./Appointment";
import { Donate } from "./Donate";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { Login } from "./Login";
import { Quiz } from "./Quiz";
import { Register } from "./Register";

export const route = {
  home: "/",
  about: "/sobre",
  donate: "/porque-doar",
  appointment: "/agendamento",
  login: "/login",
  register: "/register",
  quiz: "/quiz",
};

export const Routes = () => {
  return (
    <>
      <Header />
      <Layout>
        <RouterRoutes>
          <Route path={route.home} element={<Home />} />
          <Route path={route.about} element={<About />} />
          <Route path={route.donate} element={<Donate />} />
          <Route path={route.appointment} element={<Appointment />} />
          <Route path={route.login} element={<Login />} />
          <Route path={route.register} element={<Register />} />
          <Route path={route.quiz} element={<Quiz />} />
        </RouterRoutes>
      </Layout>
    </>
  );
};
