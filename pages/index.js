import Counter from '@/src/components/Counter';
import ProssessBar from '@/src/components/ProssessBar';
import Layout from '@/src/layout/Layout';
import { brandListProps, caseStudyProps } from '@/src/sliderProps';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const sponsors = [
  {
    id: 1,
    image: 'assets/images/home/sponsors/01.png',
  },
  {
    id: 2,
    image: 'assets/images/home/sponsors/02.png',
  },
  {
    id: 3,
    image: 'assets/images/home/sponsors/03.png',
  },
  {
    id: 4,
    image: 'assets/images/home/sponsors/04.png',
  },
  {
    id: 5,
    image: 'assets/images/home/sponsors/05.png',
  },
];

const articles = [
  {
    id: 1,
    title: '5 THINGS THAT TAKE A ROOM FROM GOOD TO GREAT',
    href: '/5-things-that-take-a-room-from-good-to-great',
  },
  {
    id: 2,
    title: 'FUNCTIONAL AND STYLISH WALL-TO-WALL SHELVES',
    href: '/functional-and-stylish-wall-to-wall-shelves',
  },
  {
    id: 3,
    title: 'THE 5 SECRETS TO PULLING OFF SIMPLE, MINIMAL DESIGN',
    href: '/the-5-secrets-to-pulling-off-simple-minimal-design',
  },
];

export const servicesData = [
  {
    title: 'Business Consulting',
    sub: 'Plots',
    description:
      'We offer plots in Green City, Awadh, and Highway County. You will own...',
    image: 'assets/images/resource/consultation.png',
    link: 'services/business-consulting',
  },
  {
    title: 'Organic Farming',
    sub: 'Farming',
    description:
      'We offer you a unique opportunity to own your irrigated farmland, an...',
    image: 'assets/images/resource/organic-food.png',
    link: 'services/organic-farming',
  },
  {
    title: 'River Castle',
    sub: 'Castle',
    description:
      'THE RIVER CASTLE is not just another high-end real estate project...',
    image: 'assets/images/resource/castle.png',
    link: 'services/river-castle',
  },
];

const Index = () => {
  return (
    <Layout footer={1}>
      {/*==================================================*/}
      {/* Start consen slider Area */}
      {/*==================================================*/}
      <div className="slider-area d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="slider-content">
                <h3>Invest with RAV </h3>
                <h1>
                  Invest with <span>confidence</span> and <span>vision</span>.
                </h1>
                <p>
                  {' '}
                  Unlock the door to exceptional real estate opportunities,
                  where luxury meets innovation. Join us in shaping tomorrow's
                  landmarks today.
                </p>
              </div>
              <div className="lines pt-20 pb-40">
                <div className="line" />
              </div>
              <div className="banner-buttons">
                <div className="slider-button">
                  <Link legacyBehavior href="/service">
                    <a>
                      {' '}
                      Explore Opportunities <i className="bi bi-plus" />{' '}
                    </a>
                  </Link>
                </div>
                <div className="slider-contact-box">
                  <a className="contact-icon" href="tel:+983217690326">
                    <img src="assets/images/slider/call.png" alt="call icon" />
                  </a>
                  <div className="contact-number">
                    <span> Reach Out Today </span>
                    <h3>
                      <a href="tel:+918800933935">+91 8800933935</a> <br />
                      <a href="tel:+917503500871">+91 7503500871</a>{' '}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 ">
              <div className="slider-thumb">
                <img src="assets/images/home/hero-img.png" alt />
              </div>
              <div className="video-icon">
                <a
                  className="video-vemo-icon venobox vbox-item"
                  data-vbtype="youtube"
                  data-autoplay="true"
                  href="https://youtu.be/BS4TUd7FJSg"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb">
                <img src="assets/images/slider/hero-shape.png" alt />
              </div>
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/hero-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/*End consen slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className="service-area">
        <div className="container">
          <div className="row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="consen-section-title mobile-center">
                <h2>
                  Discover organic farming, <br /> nature-inspired dining, and
                  plots crafted just for you.
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/service">
                  <a>
                    All Service <i className="bi bi-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-4 col-sm-6 p-0">
                <div className="dreamit-service-box">
                  <div className="service-box-inner">
                    <div className="em-service-icon">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="em-service-title">
                      <h2>{service.title}</h2>
                    </div>
                    <div className="service-number">
                      <h4>{service.sub}</h4>
                    </div>
                    <div className="em-service-text">
                      <p>{service.description}</p>
                    </div>
                    <div className="service-button">
                      <Link legacyBehavior href={service.link}>
                        <a>
                          Read More <i className="bi bi-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img
                  className="home-about-img"
                  src="assets/images/home/about-meeting.webp"
                  alt="About Us"
                />
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt="Shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-10">
                <h2>Your Journey to Unmatched</h2>
                <h2>
                  Business <span>Success</span> Begins Here
                </h2>
                <p>
                  For over a decade, we’ve been crafting stories of trust,
                  innovation, and excellence. From humble beginnings to
                  groundbreaking milestones, our journey reflects our commitment
                  to building a brighter future for every client we serve.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line"></div>
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  Empowering Dreams <span>Since 2007</span>
                </h4>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick"></i>{' '}
                    <span>
                      Creating meaningful partnerships with lasting value
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>{' '}
                    <span>
                      Delivering exceptional solutions tailored to your needs
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>{' '}
                    <span>
                      Fostering innovation through expertise and passion
                    </span>
                  </li>
                </ul>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    Learn More <i className="bi bi-plus"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="about-shape-thumb2 bounce-animate4">
              <img
                src="assets/images/resource/all-shape.png"
                alt="Decorative Shape"
              />
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3>Celebrating Our Achievements Over the Years</h3>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={17243} />
                  </h4>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={11} />
                  </h4>
                  <span>+</span>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={38} />
                  </h4>
                  <span>+</span>
                  <p>Expert Team Members</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={98} />
                  </h4>
                  <span>%</span>
                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="ceo-cod-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h2> About Us </h2>
                {/* <h2>
                  {' '}
                  Us <span> Our Story </span>
                </h2> */}
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  {' '}
                  “At Invest with RAV, we believe in creating opportunities that
                  transform lives. Our journey began with a simple mission: to
                  redefine the real estate experience by making it not just
                  profitable but deeply meaningful for our clients.”{' '}
                </p>
                <p className="about-text2">
                  Over the years, we have grown into more than just a real
                  estate company. We are a community, a family dedicated to
                  helping you achieve your dreams. From crafting luxurious
                  living spaces to developing innovative lifestyle solutions,
                  every step we take is driven by passion, trust, and a
                  commitment to excellence. Together, we build more than
                  properties—we build lasting relationships.
                </p>
              </div>
              {/* <div className="dreamit-ceo-title">
                <h4> Philip Antrophy </h4>
                <span>CEO &amp; Founder</span>
              </div> */}
              <div className="about-button">
                <Link legacyBehavior href="/about ">
                  <a>
                    {' '}
                    Know More <i className="bi bi-plus" />{' '}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img src="assets/images/home/ravres.webp" alt="About Us" />
              </div>
              <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                  <img
                    src="assets/images/about/ab-shape.png"
                    alt="Decorative Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="case-study-area">
        <div className="container">
          <div className="row case-study-bg align-items-center mb-40">
            <div className="col-lg-6 col-md-8">
              <div className="consen-section-title mobile-center white ">
                <h2> We Serve the Best Works</h2>
                <h2>
                  {' '}
                  View <span> Case Studies </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/portfolio">
                  <a>
                    {' '}
                    All Project <i className="bi bi-plus" />{' '}
                  </a>
                </Link>
              </div>
            </div>
            <div className="case-study-shape">
              <div className="case-shape-thumb bounce-animate4">
                <img src="assets/images/resource/red-dot.png" alt />
              </div>
              <div className="case-shape-thumb1 bounce-animate2">
                <img src="assets/images/resource/all-shape.png" alt />
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper {...caseStudyProps} className="case-study owl-carousel">
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {' '}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{' '}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {' '}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{' '}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case1.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {' '}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Corporate Finance for helpfulness Markets</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{' '}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {' '}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{' '}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {' '}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{' '}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case2.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {' '}
                          <Link legacyBehavior href="/portfolio-details">
                            <a> Consulting for Business Organizations</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{' '}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="case-study-single-box">
                  <div className="case-study-thumb">
                    <img src="assets/images/project/case3.png" alt />
                    <div className="case-study-content">
                      <div className="case-study-title">
                        <h6> Consulting </h6>
                        <h3>
                          {' '}
                          <Link legacyBehavior href="/portfolio-details">
                            <a>Strategy and Planning Building Idea</a>
                          </Link>
                        </h3>
                      </div>
                      <div className="case-button">
                        <Link legacyBehavior href="/portfolio-details">
                          <a>
                            Read More <i className="bi bi-plus" />{' '}
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="video-icon style-two">
                      <a
                        className="video-vemo-icon venobox vbox-item"
                        data-vbtype="youtube"
                        data-autoplay="true"
                        href="https://youtu.be/BS4TUd7FJSg"
                      >
                        <i className="fa fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      <div className="process-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row process-bg">
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Gathering <span> Information </span>
                      </h3>
                      <p>
                        Understanding your needs helps us grow together,
                        ensuring mutual success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Professional <span> Advisors </span>
                      </h3>
                      <p>
                        Expert guidance to navigate your challenges and uncover
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Analyze <span> Your Business </span>
                      </h3>
                      <p>
                        Transform challenges into actionable strategies for
                        meaningful growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        Achieve <span> Excellence </span>
                      </h3>
                      <p>
                        Delivering transparent, value-driven results that exceed
                        expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-shape">
                  <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div>
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="consen-section-title mt-4 mt-lg-0">
                <h2>
                  Let's Turn Your <span>Dreams</span> Into Reality – Together,
                  We’ll Build a <span>Future</span> That Matters
                </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  Why Choose <span> RAV Group </span>?
                </h4>
                <p>
                  At RAV Group, we don’t just see challenges; we see
                  opportunities to create something extraordinary. We are driven
                  by a passion to deliver not just results, but meaningful
                  impact. With complete transparency and a commitment to
                  delivering unmatched value, we partner with you to turn your
                  vision into reality.
                </p>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    More About <i className="bi bi-plus" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row pt-50">
            <div className="col-lg-12">
              <div className="dreamits-top-title">
                <h3> Exploring New Horizons with Our Ventures </h3>
              </div>
            </div>
          </div>
          <div className="row pt-30 ">
            <Swiper {...brandListProps} className="brand-list owl-carousel">
              {sponsors.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="justify-content-center d-flex"
                >
                  <div className="brand-single-box">
                    <div className="brand-thumb brands_logo">
                      <img src={item.image} alt={item.id} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Skills Area Css */}
      {/*==================================================*/}
      <div className="skill-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="extra-animation-div">
                <div className="consen-section-title white">
                  <h2> Be Part of a Legacy </h2>
                  <h2>
                    That Builds <span>Dreams</span>
                  </h2>
                </div>
                <div className="lines style-three upper pt-30 pb-10">
                  <div className="line" />
                </div>
                <div className="dreamit-smart-title">
                  <p className="slill-text">
                    We believe in creating more than just homes or
                    investments—we create spaces where stories begin,
                    aspirations grow, and communities thrive. Our journey has
                    been one of passion, perseverance, and purpose, connecting
                    hearts and building a future shaped by trust.
                  </p>
                </div>
              </div>
              <ProssessBar />
            </div>
            <div className="col-md-6">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <img
                  src="assets/images/resource/skill.png"
                  alt="Our Experience"
                />
                {/* thumb content */}
                <div className="skill-thumb-content">
                  <div className="skill-title">
                    <h3 className="counter"> 17 </h3>
                    <span>+</span>
                    <h5> YEARS OF EXPERIENCE </h5>
                  </div>
                </div>
                {/* skill shape */}
                <div className="skill-shape dance">
                  <img
                    src="assets/images/resource/skill-shape.png"
                    alt="Decorative Shape"
                  />
                </div>
                <div className="skill-shape1 bounce-animate2">
                  <img
                    src="assets/images/resource/all-shape.png"
                    alt="Dynamic Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Blog Area */}
      {/*==================================================*/}
      <div className="blog-area blog-new">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-lg-7 col-md-8">
              <div className="consen-section-title mobile-center">
                <h2>
                  {' '}
                  <span> Latest Blog Highlights:</span> Design Tips, Functional
                  Spaces, and More{' '}
                </h2>
                {/* <h2>
                  {' '}
                  from Latest <span> News </span>
                </h2> */}
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/blog-grid">
                  <a>
                    {' '}
                    View all Blog <i className="bi bi-plus" />{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {articles.map((item) => (
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src="assets/images/resource/blog1.png" alt />
                    {/* <div className="blog-top-button">
                      <a href={item.href}> {item.title} </a>
                    </div> */}
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <p> August 25, 2023 </p>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        {' '}
                        <Link legacyBehavior href="/blog-details">
                          <a> {item.title.substring(0, 40) + '...'} </a>
                        </Link>{' '}
                      </h2>
                    </div>
                    <div className="em-blog-icon">
                      <div className="em-blog-thumb">
                        <img src="assets/images/resource/blog-icon.png" alt />
                      </div>
                      {/* <div className="em-blog-icon-title">
                        <h6> Alex Collins </h6>
                      </div> */}
                    </div>
                    <div className="blog-button">
                      <Link legacyBehavior href={item.href}>
                        <a>
                          {' '}
                          Learn More <i className="bi bi-plus" />{' '}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog1.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> GRAPHIC </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 25, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {' '}
                      <Link legacyBehavior href="/blog-details">
                        <a> Popular Consultants are big Meetup 2023 </a>
                      </Link>{' '}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Alex Collins </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {' '}
                        Learn More <i className="bi bi-plus" />{' '}
                      </a>
                    </Link>
                  </div>
                </div>
              </div> */}

            {/* <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog2.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DEVELOPMENT </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 21, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {' '}
                      <Link legacyBehavior href="/blog-details">
                        <a> How to Increase Business Products Sales </a>
                      </Link>{' '}
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Julia Moris </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {' '}
                        Learn More <i className="bi bi-plus" />{' '}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-box">
                <div className="single-blog-thumb">
                  <img src="assets/images/resource/blog3.png" alt />
                  <div className="blog-top-button">
                    <a href="#"> DESIGN </a>
                  </div>
                </div>
                <div className="em-blog-content">
                  <div className="meta-blog-text">
                    <p> August 20, 2023 </p>
                  </div>
                  <div className="em-blog-title">
                    <h2>
                      {' '}
                      <Link legacyBehavior href="/blog-details">
                        <a> Top 10 Most Populars Google Chrome app</a>
                      </Link>
                    </h2>
                  </div>
                  <div className="em-blog-icon">
                    <div className="em-blog-thumb">
                      <img src="assets/images/resource/blog-icon.png" alt />
                    </div>
                    <div className="em-blog-icon-title">
                      <h6> Amantha </h6>
                    </div>
                  </div>
                  <div className="blog-button">
                    <Link legacyBehavior href="/blog-details">
                      <a>
                        {' '}
                        Learn More <i className="bi bi-plus" />{' '}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
