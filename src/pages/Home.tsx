import { CakeIcon, CloudIcon } from "@heroicons/react/outline";
import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../assets/carousel/banner_site_doador.png";
import { BloodBank } from "../components/BloodBank";
import { News } from "../components/News";

type Props = {};

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
    level: "low",
  },
  {
    id: 2,
    type: "A-",
    level: "low",
  },
  {
    id: 3,
    type: "B+",
    level: "medium",
  },
  {
    id: 4,
    type: "B-",
    level: "high",
  },
];

export const Home = (props: Props) => {
  return (
    <div>
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
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>

      <div className="grid grid-cols-2">
        <News content={news} />
        <BloodBank content={bloodBank} />
      </div>
    </div>
  );
};
