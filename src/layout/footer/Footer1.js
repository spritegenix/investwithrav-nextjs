import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
const Footer1 = () => {
  return (
    <div className="footer-middle">
      <div className="container">
        <div className="subscribe-area">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="subscribe-title">
                <h1>Subscribe to our Newsletter</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                action="https://formspree.io/f/myyleorq"
                method="POST"
                id="dreamit-form"
              >
                <div className="subscribe_form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required=""
                    data-error="Please enter your email"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit" className="btn">
                    Subscribe
                  </button>
                </div>
                <div className="subscribe_form_send"></div>
              </form>
              <div id="status" />
            </div>
          </div>
          <div className="subscribe-shape">
            <div className="subscribe-thumb bounce-animate5">
              <img src="assets/images/resource/small-dot.png" alt="" />
            </div>
            <div className="subscribe-thumb1">
              <img src="assets/images/resource/big-dot.png" alt="" />
            </div>
          </div>
        </div>
        <div className="footer-bg">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="company-info-desc pr-2">
                  <h4 className="widget-title">About Us</h4>
                  <p>
                    RAV Group is committed to total transparency with its
                    clients, employees, and partners. We offer extra value with
                    our services, ensuring your investment grows. Since 2012, we
                    have helped over 10,000 investors with organic farming,
                    outdoor dining, and more.
                  </p>
                </div>
                <div className="follow-company-icon">
                  <a className="social-icon-color" href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a className="social-icon-color2" href="#">
                    <i className="bi bi-instagram" />
                  </a>
                  <a className="social-icon-color1" href="#">
                    <BsTwitterX />
                  </a>
                  <a className="social-icon-color3" href="#">
                    <i className="bi bi-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title">Quick Links</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <Link legacyBehavior href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/about">
                        About Us
                      </Link>
                    </li>
                    {/* <li>
                      <Link legacyBehavior href="/service">Services</Link>
                    </li> */}
                    <li>
                      <Link legacyBehavior href="/blog-grid">
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title">Services</h4>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu">
                    <li>
                      <Link legacyBehavior href="/services/business-consulting">
                        Business Consulting
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/services/organic-farming">
                        Organic Farming
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/services/river-castle">
                        The River Castle
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/services/investment">
                        Investment
                      </Link>
                    </li>
                    {/* <li>
                      <Link legacyBehavior href="#">Corporate Finance</Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="#">Market Research</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div id="em-recent-post-widget" className="mt-5 mt-sm-0">
                <div className="single-widget-item">
                  <h4 className="widget-title">Popular Posts</h4>
                  <div className="recent-post-item active">
                    {}
                    <div className="recent-post-image">
                      <a href="/blog/5-things-that-take-a-room-from-good-to-great">
                        <img
                          width={80}
                          height={80}
                          src="../assets/images/home/blog/blog-01.webp"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="recent-post-text">
                      <h6>
                        <a href="/blog/5-things-that-take-a-room-from-good-to-great">
                          5 THINGS THAT TAKE A ROOM FROM GOOD TO G...
                        </a>
                      </h6>
                      <span className="rcomment">December 14, 2024</span>
                    </div>
                  </div>
                  <div className="recent-post-item">
                    <div className="recent-post-image">
                      <a href="/blog/functional-and-stylish-wall-to-wall-shelves">
                        <img
                          width={80}
                          height={80}
                          src="../assets/images/home/blog/blog-02.webp"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="recent-post-text">
                      <h6>
                        <a href="/blog/functional-and-stylish-wall-to-wall-shelves">
                          FUNCTIONAL AND STYLISH WALL-TO-WALL SHEL...
                        </a>
                      </h6>
                      <span className="rcomment">November 14, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foorer-shape">
            <div className="footer-thumb">
              <img src="assets/images/resource/red-dot.png" alt="" />
            </div>
            <div className="footer-thumb1 bounce-animate2">
              <img src="assets/images/resource/all-shape.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area d-flex align-items-center">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div
                className="consen-logo "
                style={{ width: '13rem', margin: '0 auto' }}
              >
                <Link legacyBehavior href="/">
                  <a className="logo_thumb" title="RAV Group">
                    <img
                      src="../assets/images/home/logo2.png"
                      alt="RAV Group Logo"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>
                    © 2024 <span>RAV Group</span> All rights reserved. Designed
                    and Developed by{' '}
                    <a href="https://www.spritegenix.com/" target="_blank">
                      <span>SpriteGenix</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
