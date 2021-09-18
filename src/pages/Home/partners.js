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
              slidesPerView: 5,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide style={{height: "100%", minHeight: "54px"}}>
            <SwiperSlideBox>
              <img src="image/partners/part1.png" alt="" />
            </SwiperSlideBox>
          </SwiperSlide>
          <SwiperSlide style={{height: "100%", minHeight: "54px"}}>
            <SwiperSlideBox>
            <img src="image/partners/part2.png" alt="" />
            </SwiperSlideBox>
          </SwiperSlide>
          <SwiperSlide style={{height: "100%", minHeight: "54px"}}>
            <SwiperSlideBox>
            <img src="image/partners/part3.png" alt="" />
            </SwiperSlideBox>
          </SwiperSlide>
          <SwiperSlide style={{height: "100%", minHeight: "54px"}}>
            <SwiperSlideBox>
            <img src="image/partners/part4.png" alt="" />
            </SwiperSlideBox>
          </SwiperSlide>
          <SwiperSlide style={{height: "100%", minHeight: "54px"}}>
            <SwiperSlideBox>
            <img src="image/partners/part5.png" alt="" />
            </SwiperSlideBox>
          </SwiperSlide>
          <SwiperSlide style={{height: "100%", minHeight: "54px"}}>
            <SwiperSlideBox>
            <img src="image/partners/part1.png" alt="" />
            </SwiperSlideBox>
          </SwiperSlide>
          <SwiperSlide style={{height: "100%", minHeight: "54px"}}>
            <SwiperSlideBox>
            <img src="image/partners/part2.png" alt="" />
            </SwiperSlideBox>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
