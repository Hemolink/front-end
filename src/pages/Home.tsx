import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetBloodLevels } from "../api";
import Banner3 from "../assets/carousel/banner_doacao.jpeg";
import Banner2 from "../assets/carousel/banner_Hemo.jpg";
import Banner from "../assets/carousel/banner_site_doador.png";
import { BloodBank } from "../components/BloodBank";
import { News } from "../components/News";
import { newsData } from "../content/news";

export const Home = () => {
  const { isLoading, data } = useGetBloodLevels();

  return (
    <div className="mb-14">
      <Swiper
        className="w-full h-auto"
        navigation={true}
        modules={[Navigation]}
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
        <News content={newsData} />
        <BloodBank isLoading={isLoading} content={data ?? []} />
      </div>
    </div>
  );
};
