import Breadcumb from '@/src/components/Breadcumb';
import Layout from '@/src/layout/Layout';
const Contact = () => {
  return (
    <Layout>
      <Breadcumb pageName={'Contact Us'} />
      {/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Get In Touch</h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="web" placeholder="Website" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          defaultValue={''}
                        />
                      </div>
                      <div className="quote_button">
                        <button className="btn" type="submit">
                          {' '}
                          <i className="bi bi-gear" /> Contact Us
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Company Location</h4>
                    <p>
                      7th floor, Cyber Height, Opp- indira Gandhi Pratisthan,
                      Vibhuti Khand, Gomti nagar, Lucknow(india)- 226010
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex align-items-center">
                  <div className="cda-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Telephone Number</h4>
                    <p>
                      <a href="tel:+918800933935" className="text-white">
                        +91-8800933935
                      </a>{' '}
                      <br />
                      <a href="tel:+917503500871" className="text-white">
                        +91-7503500871
                      </a>
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Our Email Address</h4>
                    <a
                      href="mailto:info@investwithrav.com"
                      className="text-white"
                    >
                      info@investwithrav.com
                    </a>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
      <div className="map-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://maps.google.com/maps?q=A74%2C%20A%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301&t=m&z=10&output=embed&iwloc=near"
                width={1920}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                title="A74, A Block, Sector 63, Noida, Uttar Pradesh 201301"
                aria-label="A74, A Block, Sector 63, Noida, Uttar Pradesh 201301"
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
