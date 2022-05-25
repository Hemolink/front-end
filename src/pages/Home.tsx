import { CakeIcon, CloudIcon } from "@heroicons/react/outline";
import React from "react";
import { useQuery } from "react-query";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner3 from "../assets/carousel/banner_doacao.jpeg";
import Banner2 from "../assets/carousel/banner_Hemo.jpg";
import Banner from "../assets/carousel/banner_site_doador.png";
import { BloodBank } from "../components/BloodBank";
import { News } from "../components/News";
import { api } from "../services/api";

const news = [
  {
    icon: <CakeIcon />,
    title: "Confira: Novas orientações para doar durante a pandemia.",
    url: "",
  },
  {
    icon: <CakeIcon />,
    title: "Compatibilidade: Doador e receptor.",
    url: "",
  },
  {
    icon: <CakeIcon />,
    title: "Campanhas de doação de sangue.",
    url: "",
  },
  {
    icon: <CloudIcon />,
    title: "Ronaldo brilha muito no corinthians",
    url: "",
  },
];

const bloodBank = [
  {
    id: 1,
    type: "A+",
    level: 10,
  },
  {
    id: 2,
    type: "A-",
    level: 10,
  },
  {
    id: 3,
    type: "B+",
    level: 45,
  },
  {
    id: 4,
    type: "B-",
    level: 100,
  },
  {
    id: 5,
    type: "X-",
    level: 55,
  },
  {
    id: 6,
    type: "X-",
    level: 50,
  },
  {
    id: 7,
    type: "X-",
    level: 34,
  },
  {
    id: 8,
    type: "X-",
    level: 88,
  },
];

export const Home = () => {
  // const { isLoading, error, data } = useQuery("blood-bank", () =>
  //   api.get("/sangue")
  // );

  return (
    <div className="mb-14">
      <Swiper
        className="w-full h-auto"
        navigation={true}
        modules={[Navigation]}
        // spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={Banner} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="Banner" />
        </SwiperSlide>
      </Swiper>

      <div className="grid grid-cols-2">
        <News content={news} />
        {/* {isLoading && <span>Carregando...</span>}
        {!isLoading && <BloodBank content={bloodBank} />} */}
        <BloodBank content={bloodBank} />
      </div>
    </div>
  );
};
