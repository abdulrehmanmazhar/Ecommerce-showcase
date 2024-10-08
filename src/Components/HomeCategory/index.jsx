import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import reactLogo from '../../assets/react.svg'
function HomeCategory() {
  return (
    <section className="homeCat mb-4">
    <div className="container">
    <h3 className="bannerHeading mt-4">FEATURED CATEGORIES</h3>
    <Swiper
                  slidesPerView={10}
                  spaceBetween={0}
                  navigation={true}
                  slidesPerGroup={1}
                  modules={[Navigation]}
                  className="mySwiper pt-3 d-flex align-items-center"
                >
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div><img src={reactLogo} alt="" /></div>
                    </SwiperSlide>
    </Swiper>
    </div>
  </section>
  )
}

export default HomeCategory