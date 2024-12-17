import React from 'react';
import { testimonial_list_slider } from '@/src/sliderProps';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '@/pages/about';
const Testimonial = () => {
  return (
    <div className="container">
      <div className="row testi-rotate align-items-center">
        <div className="col-lg-7 col-md-6">
          <div className="consen-section-title white pb-50">
            <h5> Testimonials </h5>
            <h2> What Our Customer's are Saying</h2>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="row">
            <div className="col-6">
              <div className="testi-counter-box upper">
                <div className="testi-counter-title">
                  <h3 className="counter"> 12,758 </h3>
                  <span>+</span>
                  <p> Happy Customers </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="testi-counter-box">
                <div className="testi-counter-title">
                  <h3 className="counter"> 100 </h3>
                  <span>%</span>
                  <p> Satisfaction Rate </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testi-shape-thumb1 rotateme">
          <img src="assets/images/resource/testimonial-map.png" alt />
        </div>
      </div>
      <div className="row">
        <Swiper
          {...testimonial_list_slider}
          className="testimonial_list owl-carousel"
        >
          {testimonials.map((item) => (
            <SwiperSlide className="pr-1">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/home/review.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4>{item.name}</h4>
                      <p>{item.position}</p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>{item.testimonial}</p>
                  </div>
                  <div className="em-testi-start-icon">
                    {[...Array(5)].map((_, index) => {
                      const starClass =
                        index < Math.floor(item.rating)
                          ? 'bi bi-star-fill'
                          : index === Math.floor(item.rating) &&
                            item.rating % 1 !== 0
                          ? 'bi bi-star-half'
                          : 'bi bi-star';
                      return <i key={index} className={starClass} />;
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide className="pr-1">
          <div className="testimonial-single-box">
            <div className="testimonial-content1">
              <div className="single-quote-icon">
                <div className="quote-thumb">
                  <img src="assets/images/resource/testi3.png" alt />
                </div>
                <div className="quote-title">
                  <h4> Shilpa Shethy </h4>
                  <p> CEO, Founder </p>
                </div>
              </div>
              <div className="em-testimonial-text">
                <p>
                  “Holisticly pursue market-more synerg through innovative
                  paradi. Enthusia productivate media”.
                </p>
              </div>
              <div className="em-testi-start-icon">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pr-1">
          <div className="testimonial-single-box">
            <div className="testimonial-content1">
              <div className="single-quote-icon">
                <div className="quote-thumb">
                  <img src="assets/images/resource/testi2.png" alt />
                </div>
                <div className="quote-title">
                  <h4> David Alexon </h4>
                  <p> MH Manager </p>
                </div>
              </div>
              <div className="em-testimonial-text">
                <p>
                  “Holisticly pursue market-more synerg through innovative
                  paradi. Enthusia productivate media”.
                </p>
              </div>
              <div className="em-testi-start-icon">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pr-1">
          <div className="testimonial-single-box">
            <div className="testimonial-content1">
              <div className="single-quote-icon">
                <div className="quote-thumb">
                  <img src="assets/images/resource/testi3.png" alt />
                </div>
                <div className="quote-title">
                  <h4> Shilpa Shethy </h4>
                  <p> CEO, Founder </p>
                </div>
              </div>
              <div className="em-testimonial-text">
                <p>
                  “Holisticly pursue market-more synerg through innovative
                  paradi. Enthusia productivate media”.
                </p>
              </div>
              <div className="em-testi-start-icon">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pr-1">
          <div className="testimonial-single-box">
            <div className="testimonial-content1">
              <div className="single-quote-icon">
                <div className="quote-thumb">
                  <img src="assets/images/resource/testi2.png" alt />
                </div>
                <div className="quote-title">
                  <h4> David Alexon </h4>
                  <p> MH Manager </p>
                </div>
              </div>
              <div className="em-testimonial-text">
                <p>
                  “Holisticly pursue market-more synerg through innovative
                  paradi. Enthusia productivate media”.
                </p>
              </div>
              <div className="em-testi-start-icon">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pr-1">
          <div className="testimonial-single-box">
            <div className="testimonial-content1">
              <div className="single-quote-icon">
                <div className="quote-thumb">
                  <img src="assets/images/resource/testi1.png" alt />
                </div>
                <div className="quote-title">
                  <h4>Philip Anthorpy</h4>
                  <p>UI Designer</p>
                </div>
              </div>
              <div className="em-testimonial-text">
                <p>
                  “Holisticly pursue market-more synerg through innovative
                  paradi. Enthusia productivate media”.
                </p>
              </div>
              <div className="em-testi-start-icon">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pr-1">
          <div className="testimonial-single-box">
            <div className="testimonial-content1">
              <div className="single-quote-icon">
                <div className="quote-thumb">
                  <img src="assets/images/resource/testi2.png" alt />
                </div>
                <div className="quote-title">
                  <h4> David Alexon </h4>
                  <p> MH Manager </p>
                </div>
              </div>
              <div className="em-testimonial-text">
                <p>
                  “Holisticly pursue market-more synerg through innovative
                  paradi. Enthusia productivate media”.
                </p>
              </div>
              <div className="em-testi-start-icon">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-half" />
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        </Swiper>
        <div className="testi-shape">
          <div className="testi-shape-thumb">
            <img src="assets/images/resource/all-shape5.png" alt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
