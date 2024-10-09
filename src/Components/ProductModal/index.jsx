import React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function ProductModal({ toggle }) {
  return (
    <Dialog className="productModal" open={true}>
      <div>
        <Button className="close_" onClick={toggle}>
          <IoMdClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          Italian style chiken meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brand:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={4.5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
          <hr />
          <div className="row mt-2 productDetails">
            <div className="col-md-5">
            <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        zoom={true}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper productDetailSwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
            </div>
            <div className="col-md-7">
                <div className="d-flex info align-items-center">
                    <div className="oldPrice">$9.25</div>
                    <div className="netPrice ml-3 text-danger">$5.25</div>
                </div>
                <div className="badge badge-success">IN  STOCK</div>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, error?</p>
                <div className="d-flex align-items-center justify-content-around mb-5">
                <QuantityBox></QuantityBox>
                <Button className="btn-purple btn-lg btn-big btn-round">Add to Cart</Button>
                </div>
                <div className="d-flex align-items-center justify-content-start ">
                  <Button className="btn-round btn-purple-inv wishlist-btn" variant="outlined"><FaRegHeart className="mr-2" />
                  add to wishlist</Button>
                  <Button className="btn-round btn-purple-inv wishlist-btn compare ml-4" variant="outlined"><MdCompareArrows                  className="mr-2" />
                  Compare</Button>
                </div>
            </div>


          </div>
      </div>
    </Dialog>
  );
}

export default ProductModal;
