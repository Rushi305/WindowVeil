import React from "react";

const About = () => {
  return(
    <>
    <div>
    {/* <!-- ...:::: Start Breadcrumb Section:::... --> */}
    <div class="breadcrumb-section breadcrumb-bg-color--golden">
        <div class="breadcrumb-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="breadcrumb-title">About Us</h3>
                        <div class="breadcrumb-nav breadcrumb-nav-color--black breadcrumb-nav-hover-color--golden">
                            <nav aria-label="breadcrumb">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li class="active" aria-current="page">About Us</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    {/* <!-- ...:::: End Breadcrumb Section:::... -->

    <!-- Start About Top --> */}
    <div class="about-top">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-between d-sm-column">
                <div class="col-md-6">
                    <div class="about-img" data-aos="fade-up" data-aos-delay="0">
                        <div class="img-responsive">
                            <img src="assets/images/about/img-about.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content" data-aos="fade-up" data-aos-delay="200">
                        <h3 class="title">ABOUT Windowveil</h3>
                        <h5 class="semi-title">We believe that every project existing in digital world is a result of an
                            idea and every idea has a cause.</h5>
                        <p>For this reason, our each design serves an idea. Our strength in design is reflected by our
                            name, our care for details. Our specialist won't be afraid to go extra miles just to
                            approach near perfection. We don't require everything to be perfect, but we need them to be
                            perfectly cared for. That's a reason why we are willing to give contributions at best. Not a
                            single detail is missed out under Billey's professional eyes.The amount of dedication and
                            effort equals to the level of passion and determination. Get better, together as one.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End About Top -->

    <!-- Start Slill Progress --> */}
    <div class="progressbar-section section-top-gap-100 section-inner-bg">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="content" data-aos="fade-up" data-aos-delay="0">
                        <h4 class="title">Functionality meets perfection</h4>
                        <p>In today’s day and age, one cannot underestimate the importance of design, the art of
                            creating striking visuals to move and captivate your audience. And as the world becomes more
                            and more digitized with each passing second, the importance of graphic design has been
                            rocketed to the top.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="custom-progress m-t-40">
                        <div class="skill-progressbar" data-aos="fade-up" data-aos-delay="0">
                            <h6 class="font--semi-bold m-b-15">Think</h6>
                            <div class="line-progressbar" data-percentage="75" data-progress-color="#b19361"></div>
                        </div>
                        <div class="skill-progressbar" data-aos="fade-up" data-aos-delay="200">
                            <h6 class="font--semi-bold m-b-15">Ideas</h6>
                            <div class="line-progressbar" data-percentage="86" data-progress-color="#b19361"></div>
                        </div>
                        <div class="skill-progressbar" data-aos="fade-up" data-aos-delay="400">
                            <h6 class="font--semi-bold m-b-15">Design</h6>
                            <div class="line-progressbar" data-percentage="97" data-progress-color="#b19361"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Slill Progress -->

    <!-- Start Service Section --> */}
    <div class="service-promo-section section-top-gap-100">
        <div class="service-wrapper">
            <div class="container">
                <div class="row">
                    {/* <!-- Start Service Promo Single Item --> */}
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service-promo-single-item" data-aos="fade-up" data-aos-delay="0">
                            <div class="image">
                                <img src="assets/images/icons/icon_about1.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h6 class="title">Creative Always</h6>
                                <p>Stay creative with Billey and the huge collection of premade elements, layouts &
                                    effects.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Service Promo Single Item -->
                    <!-- Start Service Promo Single Item --> */}
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service-promo-single-item" data-aos="fade-up" data-aos-delay="200">
                            <div class="image">
                                <img src="assets/images/icons/icon_about2.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h6 class="title">Express Customization</h6>
                                <p>Easy to install and configure the theme customization in a few clicks with Billey.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Service Promo Single Item -->
                    <!-- Start Service Promo Single Item --> */}
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service-promo-single-item" data-aos="fade-up" data-aos-delay="400">
                            <div class="image">
                                <img src="assets/images/icons/icon_about3.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h6 class="title">Premium Integrations</h6>
                                <p>Integrated premium plugins in Billey is the secret weapon for your business to
                                    thrive.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Service Promo Single Item -->
                    <!-- Start Service Promo Single Item --> */}
                    <div class="col-lg-3 col-sm-6 col-12">
                        <div class="service-promo-single-item" data-aos="fade-up" data-aos-delay="600">
                            <div class="image">
                                <img src="assets/images/icons/icon_about4.jpg" alt="" />
                            </div>
                            <div class="content">
                                <h6 class="title">Real-time Editing</h6>
                                <p>Edit your work and preview the changes on the screen live with advanced page builder.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End Service Promo Single Item --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Service Section --> */}
    </div>
    </>
  );
}
export default About;