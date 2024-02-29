import React from "react";
import { Link } from "react-router-dom";
import Trusted from "../components/trusted";

const Home = () => {
  return (
    <>
      {/* <!-- Start Hero Slider Section--> */}
      <div className="hero-slider-section">
        {/* <!-- Slider main container --> */}
        <div className="hero-slider-active swiper-container">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Start Hero Single Slider Item --> */}
            <div className="hero-single-slider-item swiper-slide">
              {/* <!-- Hero Slider Image --> */}
              <div className="hero-slider-bg">
                <img
                  src="assets/images/hero-slider/home-1/hero-slider-1.jpg"
                  alt=""
                />
              </div>
              {/* <!-- Hero Slider Content --> */}
              <div className="hero-slider-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-auto">
                      <div className="hero-slider-content">
                        <h4 className="subtitle">New collection</h4>
                        <h2 className="title">
                          Modern Curtains <br />
                          to make your house <br /> Asthetic
                        </h2>
                        <Link
                          to="product-details-default.html"
                          className="btn btn-lg btn-outline-golden"
                        >
                          shop now 
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Hero Single Slider Item -->
          <!-- Start Hero Single Slider Item --> */}
            <div className="hero-single-slider-item swiper-slide">
              {/* <!-- Hero Slider Image --> */}
              <div className="hero-slider-bg">
                <img
                  src="assets/images/hero-slider/home-1/hero-slider-2.jpg"
                  alt=""
                />
              </div>
              {/* <!-- Hero Slider Content --> */}
              <div className="hero-slider-wrapper">
                <div className="container">
                  <div className="row">
                    <div className="col-auto">
                      <div className="hero-slider-content">
                        <h4 className="subtitle">New collection</h4>
                        <h2 className="title">
                          Luxy curtains <br />
                          Design Award
                        </h2>
                        <Link
                          to="product-details-default.html"
                          className="btn btn-lg btn-outline-golden"
                        >
                          shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Hero Single Slider Item --> */}
          </div>

          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination active-color-golden"></div>

          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-button-prev d-none d-lg-block"></div>
          <div className="swiper-button-next d-none d-lg-block"></div>
        </div>
      </div>
      {/* <!-- End Hero Slider Section-->

    <!-- Start Service Section --> */}
      <div className="service-promo-section section-top-gap-100">
        <div className="service-wrapper">
          <div className="container">
            <div className="row">
              {/* <!-- Start Service Promo Single Item --> */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="image">
                    <img src="assets/images/icons/service-promo-1.png" alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">FREE SHIPPING</h6>
                    <p>
                      Get 10% cash back, free shipping, free returns, and more
                      at 1000+ top retailers!
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Promo Single Item -->
            <!-- Start Service Promo Single Item --> */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="image">
                    <img src="assets/images/icons/service-promo-2.png" alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">30 DAYS MONEY BACK</h6>
                    <p>
                      100% satisfaction guaranteed, or get your money back
                      within 30 days!
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Promo Single Item -->
            <!-- Start Service Promo Single Item --> */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="image">
                    <img src="assets/images/icons/service-promo-3.png" alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">SAFE PAYMENT</h6>
                    <p>
                      Pay with the world’s most popular and secure payment
                      methods.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Promo Single Item -->
            <!-- Start Service Promo Single Item --> */}
              <div className="col-lg-3 col-sm-6 col-12">
                <div
                  className="service-promo-single-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="image">
                    <img src="assets/images/icons/service-promo-4.png" alt="" />
                  </div>
                  <div className="content">
                    <h6 className="title">LOYALTY CUSTOMER</h6>
                    <p>
                      Card for the other 30% of their purchases at a rate of 1%
                      cash back.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Service Promo Single Item --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Service Section -->

    <!-- Start Banner Section --> */}
      <div className="banner-section section-top-gap-100 section-fluid">
        <div className="banner-wrapper">
          <div className="container-fluid">
            <div className="row mb-n6">
              <div className="col-lg-6 col-12 mb-6">
                {/* <!-- Start Banner Single Item --> */}
                <div
                  className="banner-single-item banner-style-1 banner-animation img-responsive"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <div className="image">
                    <img
                      src="assets/images/untitled folder/city-scape.png"
                      alt="Cityscape Design"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title"> Windowviel</h4>
                    <h5 className="sub-title">We design your home</h5>
                    <Link
                      to="/products"
                      className="btn btn-lg btn-outline-golden icon-space-left"
                    >
                      <span className="d-flex align-items-center">
                        discover now
                        <i className="ion-ios-arrow-thin-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* <!-- End Banner Single Item --> */}
              </div>

              <div className="col-lg-6 col-12 mb-6">
                <div className="row mb-n6">
                  {/* <!-- Start Banner Single Item --> */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="image">
                        <img
                          src="assets/images/untitled folder/mandala-art-1.jpg"
                          alt="Mandala design"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <br />
                        </h4>
                        <Link to="/products" className="link-text">
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Banner Single Item -->
                <!-- Start Banner Single Item --> */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="image">
                        <img
                          src="assets/images/untitled folder/big-horizontal (1).png"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <br />
                        </h4>
                        <Link to="/products" className="link-text">
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Banner Single Item -->
                <!-- Start Banner Single Item --> */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    >
                      <div className="image">
                        <img
                          src="assets/images/untitled folder/three-with-sofa-hires-hollywood.jpg"
                          alt="hollywood"
                        />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          roller
                          <br />
                          scroll
                        </h4>
                        <Link to="/products" className="link-text">
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Banner Single Item -->
                <!-- Start Banner Single Item --> */}
                  <div className="col-lg-6 col-sm-6 mb-6">
                    <div
                      className="banner-single-item banner-style-2 banner-animation img-responsive"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="image">
                        <img
                          src="assets/images/untitled folder/cowarking.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <h4>
                          Interior <br />
                          Asthetics
                        </h4>
                        <Link to="/products">
                          <span>Shop now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Banner Single Item --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Banner Section -->

    <!-- Start Product Default Slider Section --> */}
      <div className="product-default-slider-section section-top-gap-100 section-fluid">
        {/* <!-- Start Section Content Text Area --> */}
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">THE NEW ARRIVALS</h3>
                    <p>Preorder now to receive exclusive deals & gifts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Start Section Content Text Area --> */}
        <div
          className="product-wrapper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product-slider-default-2rows default-slider-nav-arrow">
                  {/* <!-- Slider main container --> */}
                  <div className="swiper-container product-default-slider-4grid-2row">
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                      {/* <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-1.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-2.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tag">
                            <span>sale</span>
                          </div>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="/singleproduct/1">
                                Aliquam lobortis
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$75.00 - $85.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-4.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tag">
                            <span>sale</span>
                          </div>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Condimentum posuere
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">
                              <del>$89.00</del> $80.00
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tag">
                            <span>sale</span>
                          </div>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Cras neque metus
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">
                              <del>$70.00</del> $60.00
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-7.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-8.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Donec eu libero ac
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$74</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-9.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-10.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Epicuri per lobortis
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$68</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-11.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Kaoreet lobortis sagit
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$95.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-7.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Condimentum posuere
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$115.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-9.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Convallis quam sit
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$75.00 - $85.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Dolorum fuga eget
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$71.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-4.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-7.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tag">
                            <span>sale</span>
                          </div>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Duis pulvinar obortis
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">
                              <del>$84.00</del> $75.00
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-8.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Dolorum fuga eget
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$90</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-10.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Duis pulvinar obortis
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$86.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item --> */}
                    </div>
                  </div>
                  {/* <!-- If we need navigation buttons --> */}
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Product Default Slider Section -->

    <!-- Start Banner Section --> */}
      <div className="banner-section section-top-gap-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              {/* <!-- Start Banner Single Item --> */}
              <div
                className="banner-single-item banner-style-3 banner-animation img-responsive"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="image">
                  <img
                    className="img-fluid"
                    src="assets/images/banner/banner-style-3-img-1.jpg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h3 className="title">Modern Curtains Basic Collection</h3>
                  <h5 className="sub-title">
                    We design your home more beautiful
                  </h5>
                  <Link
                    to="product-details-default.html"
                    className="btn btn-lg btn-outline-golden icon-space-left"
                  >
                    <span className="d-flex align-items-center">
                      discover now <i className="ion-ios-arrow-thin-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              {/* <!-- End Banner Single Item --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Banner Section -->

    <!-- Start Product Default Slider Section --> */}
      <div className="product-default-slider-section section-top-gap-100 section-fluid section-inner-bg">
        {/* <!-- Start Section Content Text Area --> */}
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">BEST SELLERS</h3>
                    <p>Add our best sellers to your weekly lineup.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Start Section Content Text Area --> */}
        <div className="product-wrapper" data-aos="fade-up" data-aos-delay="0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="product-slider-default-1row default-slider-nav-arrow">
                  {/* <!-- Slider main container --> */}
                  <div className="swiper-container product-default-slider-4grid-1row">
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-9.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-10.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Epicuri per lobortis
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$68</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-11.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Kaoreet lobortis sagit
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$95.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-7.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Condimentum posuere
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$115.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-9.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Convallis quam sit
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$75.00 - $85.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-1.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-2.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tag">
                            <span>sale</span>
                          </div>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Aliquam lobortis
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$75.00 - $85.00</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-4.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tag">
                            <span>sale</span>
                          </div>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Condimentum posuere
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">
                              <del>$89.00</del> $80.00
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="tag">
                            <span>sale</span>
                          </div>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Cras neque metus
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">
                              <del>$70.00</del> $60.00
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="product-default-single-item product-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="product-details-default.html"
                            className="image-link"
                          >
                            <img
                              src="assets/images/product/default/home-1/default-7.jpg"
                              alt=""
                            />
                            <img
                              src="assets/images/product/default/home-1/default-8.jpg"
                              alt=""
                            />
                          </Link>
                          <div className="action-link">
                            <div className="action-link-left">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalAddcart"
                              >
                                Add to Cart
                              </Link>
                            </div>
                            <div className="action-link-right">
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#modalQuickview"
                              >
                                <i className="icon-magnifier"></i>
                              </Link>
                              <Link to="wishlist.html">
                                <i className="icon-heart"></i>
                              </Link>
                              <Link to="compare.html">
                                <i className="icon-shuffle"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="content-left">
                            <h6 className="title">
                              <Link to="product-details-default.html">
                                Donec eu libero ac
                              </Link>
                            </h6>
                            <ul className="review-star">
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="fill">
                                <i className="ion-android-star"></i>
                              </li>
                              <li className="empty">
                                <i className="ion-android-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="content-right">
                            <span className="price">$74</span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item --> */}
                    </div>
                  </div>
                  {/* <!-- If we need navigation buttons --> */}
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Product Default Slider Section -->

    <!-- Start Banner Section --> */}
      <div className="banner-section">
        <div className="banner-wrapper clearfix">
          {/* <!-- Start Banner Single Item --> */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/banner/banner-style-4-img-1.jpg"
                alt=""
              />
            </div>
            <Link to="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Nature</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right"></i>
              </span>
            </Link>
          </div>
          {/* <!-- End Banner Single Item -->
        <!-- Start Banner Single Item --> */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/banner/banner-style-4-img-2.jpg"
                alt=""
              />
            </div>
            <Link to="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Mandala</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right"></i>
              </span>
            </Link>
          </div>
          {/* <!-- End Banner Single Item -->
        <!-- Start Banner Single Item --> */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/banner/banner-style-4-img-3.jpg"
                alt=""
              />
            </div>
            <Link to="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Cityscape</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right"></i>
              </span>
            </Link>
          </div>
          {/* <!-- End Banner Single Item -->
        <!-- Start Banner Single Item --> */}
          <div
            className="banner-single-item banner-style-4 banner-animation banner-color--golden float-left img-responsive"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="image">
              <img
                className="img-fluid"
                src="assets/images/banner/banner-style-4-img-4.jpg"
                alt=""
              />
            </div>
            <Link to="product-details-default.html" className="content">
              <div className="inner">
                <h4 className="title">Horizon</h4>
                <h6 className="sub-title">20 products</h6>
              </div>
              <span className="round-btn">
                <i className="ion-ios-arrow-thin-right"></i>
              </span>
            </Link>
          </div>
          {/* <!-- End Banner Single Item --> */}
        </div>
      </div>
      {/* <!-- End Banner Section -->

    <!-- Start Blog Slider Section --> */}
      <div className="blog-default-slider-section section-top-gap-100 section-fluid">
        {/* <!-- Start Section Content Text Area --> */}
        <div
          className="section-title-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content-gap">
                  <div className="secton-content">
                    <h3 className="section-title">THE LATEST BLOGS</h3>
                    <p>
                      Present posts in a best way to highlight interesting
                      moments of your blog.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Start Section Content Text Area --> */}
        <div className="blog-wrapper" data-aos="fade-up" data-aos-delay="200">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-default-slider default-slider-nav-arrow">
                  {/* <!-- Slider main container --> */}
                  <div className="swiper-container blog-slider">
                    {/* <!-- Additional required wrapper --> */}
                    <div className="swiper-wrapper">
                      {/* <!-- Start Product Default Single Item --> */}
                      <div className="blog-default-single-item blog-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="blog-single-sidebar-left.html"
                            className="image-link"
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/blog/blog-grid-home-1-img-1.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link to="blog-single-sidebar-left.html">
                              Blog Post One
                            </Link>
                          </h6>
                          <p>
                            Donec vitae hendrerit arcu, sit amet faucibus nisl.
                            Cras pretium arcu ex. Aenean posuere libero eu augue
                            condimentum rhoncus. Praesent
                          </p>
                          <div className="inner">
                            <Link
                              to="blog-single-sidebar-left.html"
                              className="read-more-btn icon-space-left"
                            >
                              Read More
                              <span>
                                <i className="ion-ios-arrow-thin-right"></i>
                              </span>
                            </Link>
                            <div className="post-meta">
                              <Link to="#" className="date">
                                24 Apr
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="blog-default-single-item blog-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="blog-single-sidebar-left.html"
                            className="image-link"
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/blog/blog-grid-home-1-img-2.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link to="blog-single-sidebar-left.html">
                              Blog Post Two
                            </Link>
                          </h6>
                          <p>
                            Donec vitae hendrerit arcu, sit amet faucibus nisl.
                            Cras pretium arcu ex. Aenean posuere libero eu augue
                            condimentum rhoncus. Praesent
                          </p>
                          <div className="inner">
                            <Link
                              to="#"
                              className="read-more-btn icon-space-left"
                            >
                              Read More
                              <span>
                                <i className="ion-ios-arrow-thin-right"></i>
                              </span>
                            </Link>
                            <div className="post-meta">
                              <Link
                                to="blog-single-sidebar-left.html"
                                className="date"
                              >
                                24 Apr
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="blog-default-single-item blog-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="blog-single-sidebar-left.html"
                            className="image-link"
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/blog/blog-grid-home-1-img-3.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link to="blog-single-sidebar-left.html">
                              Blog Post Three
                            </Link>
                          </h6>
                          <p>
                            Donec vitae hendrerit arcu, sit amet faucibus nisl.
                            Cras pretium arcu ex. Aenean posuere libero eu augue
                            condimentum rhoncus. Praesent
                          </p>
                          <div className="inner">
                            <Link
                              to="blog-single-sidebar-left.html"
                              className="read-more-btn icon-space-left"
                            >
                              Read More
                              <span>
                                <i className="ion-ios-arrow-thin-right"></i>
                              </span>
                            </Link>
                            <div className="post-meta">
                              <Link to="#" className="date">
                                24 Apr
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="blog-default-single-item blog-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="blog-single-sidebar-left.html"
                            className="image-link"
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/blog/blog-grid-home-1-img-4.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link to="blog-single-sidebar-left.html">
                              Blog Post Four
                            </Link>
                          </h6>
                          <p>
                            Donec vitae hendrerit arcu, sit amet faucibus nisl.
                            Cras pretium arcu ex. Aenean posuere libero eu augue
                            condimentum rhoncus. Praesent
                          </p>
                          <div className="inner">
                            <Link
                              to="blog-single-sidebar-left.html"
                              className="read-more-btn icon-space-left"
                            >
                              Read More
                              <span>
                                <i className="ion-ios-arrow-thin-right"></i>
                              </span>
                            </Link>
                            <div className="post-meta">
                              <Link to="#" className="date">
                                24 Apr
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="blog-default-single-item blog-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="blog-single-sidebar-left.html"
                            className="image-link"
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/blog/blog-grid-home-1-img-5.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link to="/blog">Blog Post Five</Link>
                          </h6>
                          <p>
                            Donec vitae hendrerit arcu, sit amet faucibus nisl.
                            Cras pretium arcu ex. Aenean posuere libero eu augue
                            condimentum rhoncus. Praesent
                          </p>
                          <div className="inner">
                            <Link
                              to="blog-single-sidebar-left.html"
                              className="read-more-btn icon-space-left"
                            >
                              Read More
                              <span>
                                <i className="ion-ios-arrow-thin-right"></i>
                              </span>
                            </Link>
                            <div className="post-meta">
                              <Link to="#" className="date">
                                24 Apr
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item -->
                    <!-- Start Product Default Single Item --> */}
                      <div className="blog-default-single-item blog-color--golden swiper-slide">
                        <div className="image-box">
                          <Link
                            to="blog-single-sidebar-left.html"
                            className="image-link"
                          >
                            <img
                              className="img-fluid"
                              src="assets/images/blog/blog-grid-home-1-img-6.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="content">
                          <h6 className="title">
                            <Link to="blog-single-sidebar-left.html">
                              Blog Post Six
                            </Link>
                          </h6>
                          <p>
                            Donec vitae hendrerit arcu, sit amet faucibus nisl.
                            Cras pretium arcu ex. Aenean posuere libero eu augue
                            condimentum rhoncus. Praesent
                          </p>
                          <div className="inner">
                            <Link
                              to="blog-single-sidebar-left.html"
                              className="read-more-btn icon-space-left"
                            >
                              Read More
                              <span>
                                <i className="ion-ios-arrow-thin-right"></i>
                              </span>
                            </Link>
                            <div className="post-meta">
                              <Link to="#" className="date">
                                24 Apr
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Default Single Item --> */}
                    </div>
                  </div>
                  {/* <!-- If we need navigation buttons --> */}
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Blog Slider Section -->

    <!-- Start Instagramr Section --> */}
      <div className="instagram-section section-top-gap-100 section-inner-bg">
        <div
          className="instagram-wrapper"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="instagram-box">
                  <div id="instagramFeed" className="instagram-grid clearfix">
                    <Link
                      to="https://www.instagram.com/p/CCFOZKDDS6S/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img
                        src="assets/images/instagram/instagram-1.jpg"
                        alt=""
                      />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOYDNjWF5/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img
                        src="assets/images/instagram/instagram-2.jpg"
                        alt=""
                      />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOXH6D-zQ/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img
                        src="assets/images/instagram/instagram-3.jpg"
                        alt=""
                      />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOVcrDDOo/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img
                        src="assets/images/instagram/instagram-4.jpg"
                        alt=""
                      />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOUajjABP/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img
                        src="assets/images/instagram/instagram-5.jpg"
                        alt=""
                      />
                    </Link>
                    <Link
                      to="https://www.instagram.com/p/CCFOS2MDmjj/"
                      target="_blank"
                      className="instagram-image-link float-left banner-animation"
                    >
                      <img
                        src="assets/images/instagram/instagram-6.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="instagram-link">
                    <h5>
                      <Link
                        to="https://www.instagram.com/myfurniturecom/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Window Viel
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Instagramr Section -->*/}

      {/* <!-- material-scrolltop button -->  */}
      <button className="material-scrolltop" type="button"></button>

      {/* <!-- Start Modal Add cart --> */}
      <div
        className="modal fade"
        id="modalAddcart"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col text-right">
                    <button
                      type="button"
                      className="close modal-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        {" "}
                        <i className="fa fa-times"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="modal-add-cart-product-img">
                          <img
                            className="img-fluid"
                            src="assets/images/product/default/home-1/default-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="modal-add-cart-info">
                          <i className="fa fa-check-square"></i>Added to cart
                          successfully!
                        </div>
                        <div className="modal-add-cart-product-cart-buttons">
                          <Link to="cart.html">View Cart</Link>
                          <Link to="checkout.html">Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 modal-border">
                    <ul className="modal-add-cart-product-shipping-info">
                      <li>
                        <strong>
                          <i className="icon-shopping-cart"></i> There Are 5
                          Items In Your Cart.
                        </strong>
                      </li>
                      <li>
                        <strong>TOTAL PRICE: </strong> <span>$187.00</span>
                      </li>
                      <li className="modal-continue-button">
                        <Link to="#" data-bs-dismiss="modal">
                          CONTINUE SHOPPING
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Modal Add cart -->

    <!-- Start Modal Quickview cart --> */}
      <div
        className="modal fade"
        id="modalQuickview"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col text-right">
                    <button
                      type="button"
                      className="close modal-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        {" "}
                        <i className="fa fa-times"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="product-details-gallery-area mb-7">
                      {/* <!-- Start Large Image --> */}
                      <div className="product-large-image modal-product-image-large swiper-container">
                        <div className="swiper-wrapper">
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-large-image swiper-slide img-responsive">
                            <img
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Large Image -->
                    <!-- Start Thumbnail Image --> */}
                      <div className="product-image-thumb modal-product-image-thumb swiper-container pos-relative mt-5">
                        <div className="swiper-wrapper">
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="product-image-thumb-single swiper-slide">
                            <img
                              className="img-fluid"
                              src="assets/images/product/default/home-1/default-6.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        {/* <!-- Add Arrows --> */}
                        <div className="gallery-thumb-arrow swiper-button-next"></div>
                        <div className="gallery-thumb-arrow swiper-button-prev"></div>
                      </div>
                      {/* <!-- End Thumbnail Image --> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-product-details-content-area">
                      {/* <!-- Start  Product Details Text Area--> */}
                      <div className="product-details-text">
                        <h4 className="title">Nonstick Dishwasher PFOA</h4>
                        <div className="price">
                          <del>$70.00</del>$80.00
                        </div>
                      </div>
                      {/* <!-- End  Product Details Text Area-->
                    <!-- Start Product Variable Area --> */}
                      <div className="product-details-variable">
                        {/* <!-- Product Variable Single Item --> */}
                        <div className="variable-single-item">
                          <span>Color</span>
                          <div className="product-variable-color">
                            <label for="modal-product-color-red">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-red"
                                className="color-select"
                                type="radio"
                                checked
                              />
                              <span className="product-color-red"></span>
                            </label>
                            <label for="modal-product-color-tomato">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-tomato"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-tomato"></span>
                            </label>
                            <label for="modal-product-color-green">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-green"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-green"></span>
                            </label>
                            <label for="modal-product-color-light-green">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-light-green"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-light-green"></span>
                            </label>
                            <label for="modal-product-color-blue">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-blue"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-blue"></span>
                            </label>
                            <label for="modal-product-color-light-blue">
                              <input
                                name="modal-product-color"
                                id="modal-product-color-light-blue"
                                className="color-select"
                                type="radio"
                              />
                              <span className="product-color-light-blue"></span>
                            </label>
                          </div>
                        </div>
                        {/* <!-- Product Variable Single Item --> */}
                        <div className="d-flex align-items-center flex-wrap">
                          <div className="variable-single-item">
                            <span>Quantity</span>
                            <div className="product-variable-quantity">
                              <input
                                min="1"
                                max="100"
                                value="1"
                                type="number"
                              />
                            </div>
                          </div>

                          <div className="product-add-to-cart-btn">
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#modalAddcart"
                            >
                              Add To Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Product Variable Area --> */}
                      <div className="modal-product-about-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Mollitia iste laborum ad impedit pariatur esse
                          optio tempora sint ullam autem deleniti nam in quos
                          qui nemo ipsum numquam, reiciendis maiores quidem
                          aperiam, rerum vel recusandae
                        </p>
                      </div>
                      {/* <!-- Start  Product Details Social Area--> */}
                      <div className="modal-product-details-social">
                        <span className="title">SHARE THIS PRODUCT</span>
                        <ul>
                          <li>
                            <Link to="#" className="facebook">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="twitter">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="pinterest">
                              <i className="fa fa-pinterest"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="google-plus">
                              <i className="fa fa-google-plus"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="linkedin">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- End  Product Details Social Area--> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Trusted />
      {/* <!-- End Modal Quickview cart -->

    <!-- ::::::::::::::All JS Files here :::::::::::::: --> */}
      {/* <!-- Global Vendor, plugins JS -->
    <!--   --> */}

      {/* <!--Plugins JS-->
    <!--  --> */}

      {/* <!-- Use the minified version files listed below for better performance and remove the files listed above --> */}

      {/* <!-- Main JS --> */}
    </>
  );
};

export default Home;
