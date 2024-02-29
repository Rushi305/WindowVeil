import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="footer-section footer-bg">
        <div class="footer-wrapper">
          {/* <!-- Start Footer Top --> */}
          <div class="footer-top">
            <div class="container">
              <div class="row mb-n6">
                <div class="col-lg-3 col-sm-6 mb-6">
                  {/* <!-- Start Footer Single Item --> */}
                  <div
                    class="footer-widget-single-item footer-widget-color--golden"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <h5 class="title">INFORMATION</h5>
                    <ul class="footer-nav">
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="/policy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Returns</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Footer Single Item --> */}
                </div>
                <div class="col-lg-3 col-sm-6 mb-6">
                  {/* <!-- Start Footer Single Item --> */}
                  <div
                    class="footer-widget-single-item footer-widget-color--golden"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <h5 class="title">MY ACCOUNT</h5>
                    <ul class="footer-nav">
                      <li>
                        <Link to="/account">My account</Link>
                      </li>
                      <li>
                        <Link to="/wishlist">Wishlist</Link>
                      </li>
                      <li>
                        <Link to="/faq">Frequently Questions</Link>
                      </li>
                      <li>
                        <Link to="#">Order History</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Footer Single Item --> */}
                </div>
                <div class="col-lg-3 col-sm-6 mb-6">
                  {/* <!-- Start Footer Single Item --> */}
                  <div
                    class="footer-widget-single-item footer-widget-color--golden"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <h5 class="title">CATEGORIES</h5>
                    <ul class="footer-nav">
                      <li>
                        <Link to="/">City Scape</Link>
                      </li>
                      <li>
                        <Link to="#">Mandala</Link>
                      </li>
                      <li>
                        <Link to="#">Horizon</Link>
                      </li>
                      <li>
                        <Link to="#">Customisable</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End Footer Single Item --> */}
                </div>
                <div class="col-lg-3 col-sm-6 mb-6">
                  {/* <!-- Start Footer Single Item --> */}
                  <div
                    class="footer-widget-single-item footer-widget-color--golden"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <h5 class="title">ABOUT US</h5>
                    <div class="footer-about">
                      <p>
                        We are a team of designers and developers that create
                        high quality Magento, Prestashop, Opencart.
                      </p>

                      <address class="address">
                        <span>
                          Address: Swargate, Pune, Maharashtra-411042.
                        </span>
                      </address>
                    </div>
                  </div>
                  {/* <!-- End Footer Single Item --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Footer Top -->

            <!-- Start Footer Center --> */}
          <div class="footer-center">
            <div class="container">
              <div class="row mb-n6">
                <div class="col-xl-3 col-lg-4 col-md-6 mb-6">
                  <div class="footer-social">
                    <h4 class="title">FOLLOW US</h4>
                    <ul class="footer-social-link">
                      <li>
                        <Link to="#">
                          <i class="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fa fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i class="fa fa-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-7 col-lg-6 col-md-6 mb-6">
                  <div class="footer-newsletter">
                    <h4 class="title">DON'T MISS OUT ON THE LATEST</h4>
                    <div class="form-newsletter">
                      <form action="#" method="post">
                        <div class="form-fild-newsletter-single-item input-color--golden">
                          <input
                            type="email"
                            placeholder="Your email address..."
                            required
                          />
                          <button type="submit">SUBSCRIBE!</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Start Footer Center -->

            <!-- Start Footer Bottom --> */}
          <div class="footer-bottom">
            <div class="container">
              <div class="row justify-content-between align-items-center align-items-center flex-column flex-md-row mb-n6">
                <div class="col-auto mb-6">
                  <div class="footer-copyright">
                    <p class="copyright-text">
                      &copy; 2024 Design by{" "}
                      <Link to="https://rushikeshpawar305.github.io/">
                        Rushikesh Pawar
                      </Link>
                    </p>
                  </div>
                </div>
                <div class="col-auto mb-6">
                  <div class="footer-payment">
                    <div class="image">
                      <img
                        src="assets/images/company-logo/payment.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Start Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};
export default Footer;
