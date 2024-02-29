import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Start Header Top --> */}
      <div>
        <div className="header-top header-top-bg--black section-fluid">
          <div className="container">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="header-top-left">
                <div className="header-top-contact header-top-contact-color--white header-top-contact-hover-color--green">
                  <Link to="tel:0123456789">Offer goin on!!!</Link>
                </div>
              </div>
              <div className="header-top-right">
                <div className="header-top-user-link header-top-user-link-color--white header-top-user-link-hover-color--green"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Header Top --> */}
        {/* <!-- Start Header Area --> */}
        <header className="header-section d-none d-xl-block">
          <div className="header-wrapper">
            <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 d-flex align-items-center justify-content-between">
                    {/* <!-- Start Header Logo --> */}
                    <div className="header-logo">
                      <div className="logo">
                        <Link to="/">
                          <img src="assets/images/logo/logo.jpg" alt="home" />
                        </Link>
                      </div>
                    </div>
                    {/* <!-- End Header Logo -->

                            <!-- Start Header Main Menu --> */}
                    <div className="main-menu menu-color--black menu-hover-color--golden">
                      <nav>
                        <ul>
                          <li>
                            <div
                              class="default-search-style d-flex"
                              data-aos="fade-up"
                              data-aos-delay="600"
                            >
                              <input
                                class="default-search-style-input-box"
                                type="search"
                                placeholder="Search..."
                                required
                              />
                              <button
                                class="default-search-style-input-btn"
                                type="submit"
                              >
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                          </li>
                          <li>
                            <Link
                              className="nav-menu active main-menu-link"
                              to="/"
                            >
                              Home
                            </Link>
                          </li>
                          <li>
                            <Link className="nav-menu" to="/products">
                              Shop
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">About Us</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact Us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* <!-- End Header Main Menu Start -->

                            <!-- Start Header Action Link --> */}
                    <ul className="header-action-link action-color--black action-hover-color--golden">
                      <li>
                        <Link to="/wishlist" className="offcanvas-toggle">
                          <i className="icon-heart"></i>
                          <span className="item-count">3</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/cart" className="offcanvas-toggle">
                          <i className="icon-bag"></i>
                          <span className="item-count">3</span>
                        </Link>
                      </li>
                    </ul>
                    {/* <!-- End Header Action Link --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- Start Header Area -->

    <!-- Start Mobile Header --> */}
        <div class="mobile-header mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex align-items-center justify-content-between">
                {/* <!-- Start Mobile Left Side --> */}
                <div class="mobile-header-left">
                  <ul class="mobile-menu-logo">
                    <li>
                      <a href="/`">
                        <div class="logo">
                          <img src="assets/images/logo/logo.jpg" alt="" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Mobile Left Side --> */}

                {/* <!-- Start Mobile Right Side --> */}
                <div class="mobile-right-side">
                  <ul class="header-action-link action-color--black action-hover-color--golden">
                    <li>
                      <a href="#search">
                        <i class="icon-magnifier"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/wishlist" class="offcanvas-toggle">
                        <i class="icon-heart"></i>
                        <span class="item-count">3</span>
                      </a>
                    </li>
                    <li>
                      <a href="/cart" class="offcanvas-toggle">
                        <i class="icon-bag"></i>
                        <span class="item-count">3</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- End Mobile Right Side --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
