import Breadcumb from '@/src/components/Breadcumb';
import { useRouter } from 'next/router';
import Layout from '@/src/layout/Layout';
import Link from 'next/link';
const servicesData = [
  {
    name: 'business-consulting',
    details: {
      plot: [
        {
          location: 'Dholera Rajpath Enclave',
          description:
            'We provide the best service for high-level success in your business.',
        },
        {
          location: 'Awadh City',
          description:
            'We provide the best service for high-level success in your business.',
        },
        {
          location: 'Highway County',
          description:
            'We provide the best service for high-level success in your business.',
        },
        {
          location: 'Gomti Greens & Cottages',
          description:
            'We provide the best service for high-level success in your business.',
        },
        {
          location: 'RAV Residency',
          description:
            'We provide the best service for high-level success in your business.',
        },
        {
          location: 'Ramyodha Farmhouses and Plots (Ayodhya)',
          description:
            'We provide the best service for high-level success in your business and pass the data.',
        },
      ],
      about: {
        title: 'Your Path to Prosperity: Invest in Our Premium Plots Today!',
        description:
          "Welcome to an exclusive opportunity to acquire plots in the thriving locales of Green City, Awadh, and Highway County. Prepare to become a proud owner in a smart city boasting top-notch infrastructure and amenities. Your investment is set to appreciate nearly 1.5 times in value within 2-3 years, promising a rewarding return. Our intelligent cities feature cutting-edge conveniences, including roads with underground ducts for efficient stormwater management, and underground pipelines for water, gas, sewage, electricity, and ICT connectivity. Embrace a sustainable and futuristic lifestyle where every aspect is thoughtfully designed to elevate your living experience. Don't miss this chance to secure your stake in these exceptional destinations.",
        image: 'assets/images/resource/srd1.jpg',
      },
      benefits: [
        'Efficiently reintermediate pandemic engine',
        'Driven technologies enthusiastically carburetors',
        'Authoritatively target exceptional heets',
        'Covalent testing procedures',
      ],
    },
  },
  {
    name: 'organic-farming',
    details: {
      plot: [
        {
          location: 'Namisharanya Organic Farms',
          description:
            'An organic farming hotspot offering a unique investment opportunity.',
        },
        {
          location: 'Rural Development Areas',
          description:
            'Opportunities to invest in irrigated farmland with skilled farm management.',
        },
      ],
      about: {
        title: 'Invest in Sustainable Organic Farming',
        description:
          'We provide you with the opportunity to own irrigated farmland and participate in organic farming ventures. Our partnerships with leading firms in organic farming, like Nature Land Organics, Boomitra, and AgriBolo, ensure you get the best return on investment. Enjoy guaranteed yearly income through tax-exempt investments while contributing to sustainable agricultural practices. We bring a unique multilayer farming technique to optimize space and enhance crop productivity. With expertise and technology, we provide a robust environment for your agricultural investment.',
        image: 'assets/images/resource/organic_farming.jpg',
      },
      benefits: [
        'Sustainable agricultural investment',
        'Guaranteed yearly returns on investments',
        'Multilayer farming for optimal crop productivity',
        'Access to modern farming technologies and R&D support',
      ],
    },
  },
  {
    name: 'river-castle',
    details: {
      plot: [
        {
          location: 'River Castle Resort',
          description:
            'A luxury resort offering wellness and hospitality experiences.',
        },
        {
          location: 'Gomti River View',
          description:
            'Exclusive cottages and wellness experiences surrounded by nature.',
        },
      ],
      about: {
        title: 'The River Castle: A Luxury Resort Experience',
        description:
          "The River Castle is a luxurious retreat nestled by the serene Gomti River in Naimisaranya. A harmonious blend of real estate, wellness, and hospitality, the project offers high-end accommodations like Chalet Aarambh, a 13-acre resort with independent cottages. Our wellness center, ShantChitt, spans 16,000 sq. ft., providing deep tissue massages and body treatments. Experience world-class dining at Bhoj Palace, India's largest restaurant, offering global cuisine tailored to your preferences. The River Castle offers you the perfect blend of relaxation and rejuvenation.",
        image: 'assets/images/resource/river_castle.jpg',
      },
      benefits: [
        'Luxury cottages with private pools',
        'Top-notch wellness and spa services',
        'High-end global cuisine at Bhoj Palace',
        'A holistic, rejuvenating experience in nature',
      ],
    },
  },
];

const ServiceDetails = () => {
  const router = useRouter();

  const { id } = router.query; // Extract service name from URL params
  console.log(router.query);
  // Find the service object from the data array
  const service = servicesData.find((item) => item.name === id);

  // If no service is found, you can either redirect or show a 'Service not found' message
  if (!service) {
    return (
      <Layout>
        <Breadcumb pageName={'Service Not Found'} />
        <div className="service-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h2>Service Not Found</h2>
                <p>We couldn't find the service you're looking for.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcumb pageName={'Service Details'} />
      <div className="service-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {/* Display About Content */}
                <div className="col-lg-12 col-sm-12">
                  <div className="consen-service-details-box">
                    <div className="consen-service-thumb">
                      <img
                        src={service.details.about.image}
                        alt="Service Thumbnail"
                      />
                    </div>
                    <div className="service-details-content">
                      <div className="service-page-title">
                        <h1>{service.details.about.title}</h1>
                      </div>
                      <div className="serivce-details-desc">
                        <p>{service.details.about.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Display Plots */}
                {service.details.plot.map((plot, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <div className="service-details-box">
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon1.jpg"
                          alt="Icon"
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>{plot.location}</h4>
                      </div>
                      <div className="services-detials-desc">
                        <p>{plot.description}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Display Benefits */}
                <div className="col-lg-12">
                  <div className="service-details-content">
                    <div className="service-page-title2">
                      <h1>What You Benefit</h1>
                    </div>
                    <div className="widget-service-details-icon">
                      {service.details.benefits.map((benefit, index) => (
                        <p key={index}>
                          <i className="bi bi-check-lg" />{' '}
                          <span>{benefit}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <div className="widget_search mt-5 mt-lg-0">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="get"
                >
                  <input
                    type="text"
                    name="s"
                    placeholder="Search Here"
                    title="Search for:"
                  />
                  <button type="submit" className="icons">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div>
              <div className="widget-categories-box">
                <div className="categories-title">
                  <h4>Category</h4>
                </div>
                <div className="widget-categories-menu">
                  <ul>
                    {servicesData.map((item, index) => (
                      <li key={index}>
                        <Link
                          legacyBehavior
                          href={`/service-details/${item.name
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                        >
                          <a>{item.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
