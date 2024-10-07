import React from 'react'
import HomeBanner from '../../Components/HomeBanner'
import banner1 from '../../assets/banner1.jpg'
import Button from "@mui/material/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import slideBanner1 from '../../assets/slideBanner1.jpg'
import slideBanner2 from '../../assets/slideBanner2.jpg'
import ProductItem from '../../Components/ProductItem';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
function Home() {
  return (
    <>
    <HomeBanner images={
      [slideBanner1,slideBanner2]
      // [
      //       "https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
      //       'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
      //     ]
          }></HomeBanner>
          <section className='homeProducts'>
            <div className="conatiner">
              <div className="row">
                <div className="col-md-3">
                  <img className='banner cursor' src={banner1} alt="" />
                </div>
                <div className="col-md-9">
                  <div className="d-flex align-items-center">
                    <div className="info w-75">
                      <h3 className='bannerHeading'>BEST SELLING</h3>
                      <p>Here are our proud most popular items among our customers.</p>
                    </div>
                    <Button>View All  <FaArrowRightLong />
                    </Button>
                  </div>
                  <div className="product_row w-100">
                  <Swiper
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>

      </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Home