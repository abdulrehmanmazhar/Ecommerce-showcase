import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper/modules";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { FaCartShopping } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import IconButton from "@mui/material/IconButton";

function ProductDetail() {
  const [ID, setID] = useState(1);
  return (
    <section className="productDetail section">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
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
            <h2>Italian style chicken meatballs</h2>
            <ul className="list list-inline d-flex align-items-center">
              <li className="list-inline-item ">
                <div className="d-flex align-items-center">
                  <span className="text-light mr-2">Brand :</span>
                  <span className="">Welch's</span>
                </div>
              </li>
              <li className="list-inline-item d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <Rating
                    className="mt-2 mb-2"
                    name="read-only"
                    value={4.5}
                    readOnly
                    size="small"
                    precision={0.5}
                  />
                  <span className="text-light ml-2">1 Review</span>
                </div>
              </li>
            </ul>
            <div className="d-flex info big align-items-end">
              <div className="oldPrice">$9.25</div>
              <div className="netPrice ml-3 text-danger">$5.25</div>
            </div>
            <div className="badge badge-success mt-3">IN STOCK</div>
            <p className="mt-3 about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              nam consectetur similique totam culpa impedit quisquam quos dolore
              illum error.
            </p>
            <div className="d-flex align-items-center mt-3">
              <ul className="list list-inline">
                <li
                  className={
                    ID === 1
                      ? `list-inline-item all active`
                      : "list-inline-item all"
                  }
                  onClick={() => setID(1)}
                >
                  Variant1
                </li>
                <li
                  className={
                    ID === 2
                      ? `list-inline-item all active`
                      : "list-inline-item all"
                  }
                  onClick={() => setID(2)}
                >
                  Variant2
                </li>
                <li
                  className={
                    ID === 3
                      ? `list-inline-item all active`
                      : "list-inline-item all"
                  }
                  onClick={() => setID(3)}
                >
                  Variant3
                </li>
                <li
                  className={
                    ID === 4
                      ? `list-inline-item all active`
                      : "list-inline-item all"
                  }
                  onClick={() => setID(4)}
                >
                  Variant4
                </li>
                <li
                  className={
                    ID === 5
                      ? `list-inline-item all active`
                      : "list-inline-item all"
                  }
                  onClick={() => setID(5)}
                >
                  Variant5
                </li>
                <li
                  className={
                    ID === 6
                      ? `list-inline-item all active`
                      : "list-inline-item all"
                  }
                  onClick={() => setID(6)}
                >
                  Variant6
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center mt-3">
              <QuantityBox></QuantityBox>
              <Button className="btn-purple btn-lg btn-big btn-round">
                <FaCartShopping />
                &nbsp; Add to Cart
              </Button>
              <Tooltip title="add to wishlist" className="ml-4 tooltip">
                <IconButton>
                  <FaRegHeart />
                </IconButton>
              </Tooltip>
              <Tooltip title="compare" className="ml-4 tooltip">
                <IconButton>
                  <MdCompareArrows />
                </IconButton>
              </Tooltip>
            </div>
            <div className="d-flex align-items-center mt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="part2"></div>

        </div>
      </div>
    </section>
  );
}

export default ProductDetail;