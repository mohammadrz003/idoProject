import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import styled from "styled-components";
import { mediaQueries } from "../../mediaQueries";

const Partners = () => {
  SwiperCore.use([Autoplay]);

  const SwiperSlideBox = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 7px;
    padding: 0 0;
    height: 54px;

    ${mediaQueries("xl")`
      padding: 0 10px;
    `}
  `;

  return (
    <div className="dark:bg-darkMode-800 dark:text-white text-center py-20">
      <h4 className="text-center pb-16 text-secondery-300 dark:text-white dark:text-opacity-90 text-3xl font-bold">
        Partners
      </h4>
      <div className="container mx-auto px-7 xl:px-28">
        <Swiper
          style={{ maxWidth: "400px" }}
          spaceBetween={25}
          slidesPerView={2}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              spaceBetween: 25,
              slidesPerView: 2,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={{ height: "100%", minHeight: "54px" }}>
            <SwiperSlideBox>
              <a href="https://giftedhands.io/" target="_blank">
                <img src="image/partners/giftedhands.png" alt="" />
              </a>
            </SwiperSlideBox>
          </SwiperSlide>
          <SwiperSlide style={{ height: "100%", minHeight: "54px" }}>
            <SwiperSlideBox>
              <a href="https://www.certik.org/" target="_blank">
                <img src="image/partners/certik.png" alt="" />
              </a>
            </SwiperSlideBox>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
