import { PartnerList } from "./style/partnerList";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Partners = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="dark:bg-darkMode-600 dark:text-white text-center pt-12 pb-24">
      <div className="container mx-auto px-4 xl:px-28">
        <Swiper
          loop={true}
          autoplay={{
              delay: 1200,
              disableOnInteraction: false
          }}
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {PartnerList.map((item) => {
            return (
              <SwiperSlide className="flex items-center cursor-pointer">
                {item}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
