import { PartnerList } from "./style/partnerList";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Partners = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="dark:bg-darkMode-800 dark:text-white text-center pt-12 pb-24">
      <div className="container mx-auto px-7 xl:px-28">
        <Swiper
        spaceBetween={25}
        slidesPerView={2}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
          768: {
            spaceBetween: 35,
            slidesPerView: 5
          },
        }}
          loop={true}
          autoplay={{
              delay: 1200,
              disableOnInteraction: false
          }}
          
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {PartnerList.map((item) => {
            return (
              <SwiperSlide className="flex items-center cursor-pointer rounded-xl xl:px-3">
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
