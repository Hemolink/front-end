import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { BloodBank } from "../components/BloodBank";
import { News } from "../components/News";
import { newsData } from "../content/news";
import { useGetBloodLevels } from "../api";

import Banner from "../assets/carousel/banner_site_doador.png";
import Banner2 from "../assets/carousel/banner_agendamento_doacao_sangue_1.jpg";
import Banner3 from "../assets/carousel/cta_banco_sangue_1.jpg";
//import Banner2 from "../assets/carousel/banner_Hemo.jpg";
//import Banner3 from "../assets/carousel/banner_doacao.jpeg";

export const Home = () => {
  const { isLoading, data } = useGetBloodLevels();

  return (
    <>
      <Swiper
        className="w-full h-[450px]"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
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

      <div className="grid grid-cols-2 my-8 gap-4">
        <News content={newsData} />
        <BloodBank isLoading={isLoading} content={data ?? []} />
      </div>
    </>
  );
};
