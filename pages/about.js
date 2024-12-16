import Breadcumb from '@/src/components/Breadcumb';
import Counter from '@/src/components/Counter';
import Faqs from '@/src/components/Faqs';
import LogoSlider from '@/src/components/LogoSlider';
import Testimonial from '@/src/components/Testimonial';
import Layout from '@/src/layout/Layout';
import { testimonial_list_slider } from '@/src/sliderProps';
import Link from 'next/link';
import { Nav, Tab } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
export const testimonials = [
  {
    name: 'Amit Kumar',
    position: 'Real Estate Developer',
    image: 'assets/images/resource/testi1.png',
    testimonial:
      "RAV's approach to real estate is truly revolutionary. The focus on quality and luxury in their projects is unmatched.",
    rating: 4.5,
  },
  {
    name: 'Priya Sharma',
    position: 'Investment Advisor',
    image: 'assets/images/resource/testi2.png',
    testimonial:
      "Investing with RAV was a great decision. Their 'Greenfield Smart Cities' initiative offers immense potential for growth and returns.",
    rating: 5,
  },
  {
    name: 'Rajesh Gupta',
    position: 'Business Entrepreneur',
    image: 'assets/images/resource/testi3.png',
    testimonial:
      "I’ve been part of the 'River Castle' project, and I’m thoroughly impressed with how they’re merging wellness, hospitality, and real estate seamlessly.",
    rating: 4.8,
  },
  {
    name: 'Neha Singh',
    position: 'Real Estate Investor',
    image: 'assets/images/resource/testi4.png',
    testimonial:
      "RAV's commitment to excellence and innovation in real estate is truly commendable. Their projects like 'IWR Green City' are setting new standards in the industry.",
    rating: 5,
  },
  {
    name: 'Vikas Mehta',
    position: 'Real Estate Consultant',
    image: 'assets/images/resource/testi5.png',
    testimonial:
      "RAV’s 'Countryside Real Estate' division is redefining luxury living. The farmhouses and villas they offer are top-notch, providing the perfect blend of comfort and elegance.",
    rating: 5,
  },
  {
    name: 'Sanya Kapoor',
    position: 'Hospitality Manager',
    image: 'assets/images/resource/testi6.png',
    testimonial:
      "The integration of Wellness and Hospitality with Real Estate in RAV’s 'The River Castle' project is a game changer. It's an exceptional opportunity for long-term investment.",
    rating: 4.7,
  },
  {
    name: 'Anil Joshi',
    position: 'Project Manager',
    image: 'assets/images/resource/testi7.png',
    testimonial:
      "RAV’s commitment to innovation and excellence is unparalleled. Their strategic developments, like 'IWR Green City', are shaping the future of industrialization and urban growth.",
    rating: 5,
  },
];

const teamMembers = [
  {
    name: 'Ankit Singh Peeptan',
    position: 'Sales Partner',
    description:
      'Highly successful sales partner with a track record of exceeding targets.',
    imgSrc: 'assets/images/home/team/01.jpg',
  },
  {
    name: 'Vanhar Saleem',
    position: 'Sales Partner',
    description:
      'RAV sales partner, consistently exceeding targets, client-focused, results-driven.',
    imgSrc: 'assets/images/home/team/02.jpg',
  },
  {
    name: 'Rakesh Garg',
    position: 'Asst Director Sales',
    description:
      'Motivated assistant sales partner, committed to aiding in exceeding targets.',
    imgSrc: 'assets/images/home/team/04.jpg',
  },
  {
    name: 'Sanjay Chandra',
    position: 'Asst Director Sales',
    description:
      'Eager to support as an assistant sales partner, dedicated to driving success.',
    imgSrc: 'assets/images/home/team/05.jpg',
  },
  {
    name: 'Ravi Negi',
    position: 'Zonal Manager',
    description:
      'Experienced zonal manager, optimizing operations for regional success.',
    imgSrc: 'assets/images/home/team/03.jpg',
  },
];

const About = () => {
  return (
    <Layout>
      <Breadcumb pageName={'About Us'} />
      {/* ========================================================= */}
      {/* Start abouts area  */}
      {/* ========================================================= */}
      {/* <div className="abouts_areas">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="assets/images/resource/abouts_1.png" alt />
                  <div className="about-inner-content">
                    <div className="abouts_titles">
                      <h3>
                        All in one web solution for your digital business{" "}
                      </h3>
                      <div className="abouts_icons">
                        <a href="#">
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="singles_abouts_boxs">
                <div className="abouts_thumb">
                  <img src="assets/images/resource/abouts_2.png" alt />
                  <div className="abouts_titles upper">
                    <h3>The top best digital agency in new road market usa </h3>
                    <div className="abouts_icons">
                      <a href="#">
                        <i className="fas fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*=================================================*/}
      {/* START  feture-area Section */}
      {/*=================================================*/}
      <div className="feature-area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <h5> About Us </h5>
                <h2>
                  We Are A Pioneering Force In <span> Real Estate </span>
                </h2>
                <p className="about-text1">
                  Invest with Rav (IWR) is a trailblazer in the Real Estate
                  industry, specializing in premium real estate projects and
                  lifestyle products. We focus on delivering top-tier products
                  to our valued customers, with certified sales associates
                  ensuring unmatched quality.
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{' '}
                    <span> Delivering premium real estate projects </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{' '}
                    <span> Pioneering Greenfield Smart Cities </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{' '}
                    <span> Merging luxury with emerging industries </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* Hero */}
              <Tab.Container defaultActiveKey={'t1'}>
                <div className="tab">
                  <Nav as="ul" className="tabs">
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={'t1'}>
                        Countryside <br />
                        Real Estate
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={'t2'}>
                        Greenfield <br />
                        Smart Cities
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={'t3'}>
                        Wellness & <br /> Hospitality
                      </Nav.Link>
                    </li>
                  </Nav>{' '}
                  {/* / tabs */}
                  <Tab.Content className="tab_content">
                    <Tab.Pane eventKey={'t1'} className="tabs_item">
                      {/* <img
                        src="assets/images/resource/img-1.png"
                        alt="business image"
                      /> */}
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Investing in farmhouses, villas, and
                            residential/commercial projects.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Leading the way in real estate development.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Providing high-quality residential solutions.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Enhancing lifestyle through luxurious real estate
                            offerings.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Commitment to world-class service and quality.
                          </span>
                        </li>
                      </ul>
                    </Tab.Pane>{' '}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={'t2'} className="tabs_item">
                      {/* <img src="assets/images/resource/img-2.png" alt="Image" /> */}
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Developing Greenfield Smart Cities like IWR Green
                            City.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Fostering industrialization through strategic
                            planning.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Leading the future of smart urban developments.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Driving innovation in real estate and urban
                            planning.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Building communities with sustainable growth.
                          </span>
                        </li>
                      </ul>
                    </Tab.Pane>{' '}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={'t3'} className="tabs_item">
                      {/* <img src="assets/images/resource/img-3.png" alt="Image" /> */}
                      <ul className="tabs-inner-list">
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Integrating wellness, hospitality, and real estate
                            through 'The River Castle'.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Creating lifelong revenue streams for investors.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Providing unparalleled investment opportunities in
                            luxury real estate.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Building a legacy of excellence in multiple
                            industries.
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Offering a world-class living experience for
                            investors and residents alike.
                          </span>
                        </li>
                      </ul>
                    </Tab.Pane>{' '}
                    {/* / tabs_item */}
                  </Tab.Content>{' '}
                  {/* / tab_content */}
                </div>
              </Tab.Container>
              {/* / tab */}
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <Testimonial />
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/*  Start  Counter Section */}
      {/*===================================================*/}
      <div className="counter-section style-33 pt-30 pb-80">
        <div className="container">
          <div className="counter-container">
            <div className="row hr pt-40">
              <div className="col-md-6 col-lg-3">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={11} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Years</h4>
                        <h3>of Experience</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={38} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Expert </h4>
                        <h3>Team Members</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h1>
                        <span className="counter">
                          <Counter end={17243} />
                        </span>
                      </h1>
                      <span />
                      <div className="counter-title">
                        <h4>Client</h4>
                        <h3>Satisfactions</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Team Member </h5>
                <h2>
                  {' '}
                  Let’s Meet with Our <span> Experts </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {teamMembers.map((item) => (
              <div className="col-lg-4 col-md-6 p-3">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src={item.imgSrc}
                      alt="image"
                      height={400}
                      width={370}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>{item.name}</h4>
                      <span>{item.position}</span>
                    </div>
                    {/* <div className="single_team_icon">
                      <a href="#">
                        {' '}
                        <i className="bi bi-facebook" />{' '}
                      </a>
                      <a href="#">
                        {' '}
                        <i className="bi bi-twitter" />{' '}
                      </a>
                      <a href="#">
                        <i className="bi bi-dribbble" />
                      </a>
                      <a href="#">
                        {' '}
                        <i className="bi bi-instagram"> </i>{' '}
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-2.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4> Monalisha Shen </h4>
                    <span> IT-Executive </span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {' '}
                      <i className="bi bi-facebook" />{' '}
                    </a>
                    <a href="#">
                      {' '}
                      <i className="bi bi-twitter" />{' '}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {' '}
                      <i className="bi bi-instagram"> </i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_team">
                <div className="single_team_thumb1">
                  <img src="assets/images/resource/team-3.jpg" alt="image" />
                </div>
                <div className="single_team_content">
                  <div className="team-title">
                    <h4>Bubli Khanam</h4>
                    <span>Developer</span>
                  </div>
                  <div className="single_team_icon">
                    <a href="#">
                      {' '}
                      <i className="bi bi-facebook" />{' '}
                    </a>
                    <a href="#">
                      {' '}
                      <i className="bi bi-twitter" />{' '}
                    </a>
                    <a href="#">
                      <i className="bi bi-dribbble" />
                    </a>
                    <a href="#">
                      {' '}
                      <i className="bi bi-instagram"> </i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start  FAQ Section */}
      {/*===================================================*/}
      <div className="faq-sectiions">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-1 mb-1">
                <h5>FAQ</h5>
                <h2>
                  Frequently Asked <span>Questions</span>
                </h2>
                <p className="study-text1">
                  At RAV, we aim to provide seamless and reliable services. Here
                  are some of the most frequently asked questions to help you
                  understand how we work.
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{' '}
                    <span> How does RAV ensure customer satisfaction?</span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{' '}
                    <span>
                      {' '}
                      What makes RAV's service unique in the industry?
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{' '}
                    <span>
                      {' '}
                      Can RAV customize solutions for specific needs?
                    </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{' '}
                    <span>
                      {' '}
                      What are RAV's values and commitment to clients?
                    </span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link legacyBehavior href="/contact">
                  <a>
                    <i className="bi bi-gear" /> Contact Us
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-0">
              {/* Start Accordion */}
              <div className="tab_container pl-30 pt-20">
                <Faqs />
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>

      {/*==================================================*/}
      {/*Start  Brand Section */}
      {/*===================================================*/}
      {/* <div className="brand-section">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container">
          <div className="subscribe">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h1>Invest with us</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <a href="tel:+918800933935" className="subscribe-icon">
                  <i className="bi bi-telephone-inbound" />
                </a>
                <div className="subscribe-title2">
                  <h1>
                    {' '}
                    <a href="tel:+918800933935" className="text-white">
                      +918800933935
                    </a>{' '}
                  </h1>
                  <p>
                    <Link
                      href="mailto:info@investwithrav.com"
                      className="text-white"
                    >
                      info@investwithrav.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Subscribe Area */}
      {/*==================================================*/}
    </Layout>
  );
};
export default About;
