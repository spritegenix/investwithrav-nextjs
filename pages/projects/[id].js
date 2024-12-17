import Breadcumb from '@/src/components/Breadcumb';
import { useRouter } from 'next/router';
import Layout from '@/src/layout/Layout';
import Link from 'next/link';
const servicesData = [
  {
    name: 'dholera-smart-city',
    details: {
      about: {
        title: 'Dholera Smart City - Gujarat',
        description:
          "The Indian state of Gujarat's little hamlet of Dholera has recently attracted a lot of media interest. This is due to the ambitious Dholera Smart City project, which is being constructed by the Gujarati government with the goal of building a world-class city that is sustainable, technologically sophisticated, and provides a good quality of life to its citizens.",
        description2:
          "Located around 100 kilometers to the southwest in Gujarat's Ahmedabad district, the Dholera Special Investment Region (DSIR) is a Greenfield industrial planned city. Sri Narendra Modi, the Gujarati state's former chief minister, unveiled the initiative in 2013. The Gujarat and Indian governments have joined forces to create the Dholera Smart City Project.",

        description3:
          'The project is organized into six town planning schemes, with residential, commercial, industrial, and public utility zones within each scheme. A futuristic method is being used to create the project, and it will likely include cutting-edge infrastructure, including connections to high-speed rail, world-class highways, airports, and seaports.',
        image: '../assets/images/home/project/Dholera/9.jpg',
      },
      plot: [
        {
          location: 'Dholera Special Investment Region (DSIR)',
          description:
            "Located around 100 kilometers southwest in Gujarat's Ahmedabad district, the Dholera Special Investment Region is a Greenfield industrial planned city.",
          image: '/images/dholera-plot1.jpg',
        },
        {
          location: 'Greenfield Smart City',
          description:
            'Dholera is being developed as a world-class city with high-speed rail, highways, airports, and seaports.',
          image: '/images/dholera-plot2.jpg',
        },
      ],
      benefits: [
        'World-class infrastructure and amenities.',
        'Significant employment opportunities.',
        'Ideal time to invest due to affordable real estate prices.',
      ],
      images: [
        '../assets/images/home/project/Dholera/0.jpeg',
        '../assets/images/home/project/Dholera/1.jpg',
        '../assets/images/home/project/Dholera/2.jpg',
        '../assets/images/home/project/Dholera/6.jpeg',
        '../assets/images/home/project/Dholera/dholera1.jpg',
      ],
    },
  },
  {
    name: 'awadh-city',
    details: {
      about: {
        title: 'Awadh City - Lucknow',
        description:
          "If Mumbai is considered to be the financial capital of India, Awadh city, Lucknow has the distinction of being the nation's cultural capital. The city, which is well known for its culture, tradition, and hospitality, maintains its old-world beauty with its historic bungalows and Havelis while also showing a distinctly metropolitan side in the genuine boom of real estate development and construction.",
        description2: `Given the infrastructural resources and development incentives available, Lucknow has progressively gained a reputation as a new investment hotspot in North India over the past several years.
The government of Lucknow intends to create about 600,000 square feet of space specifically for the establishment of Cyber Complexes or Cyber Hubs, which will be among the most cutting-edge and reasonably priced locations for technological enterprises.`,
        image: '../assets/images/home/project/awadh/awadh3.jpg',
      },
      plot: [
        {
          location: 'Cyber Complexes',
          description:
            'The government plans to create 600,000 square feet of space for cutting-edge Cyber Hubs.',
          image: '/images/awadh-plot1.jpg',
        },
        {
          location: 'Real Estate Hotspot',
          description:
            'Lucknow has gained a reputation as a new investment hotspot in North India.',
          image: '/images/awadh-plot2.jpg',
        },
      ],
      benefits: [
        'Cultural and historical richness.',
        'Booming real estate and investment opportunities.',
        'Affordable locations for technological enterprises.',
      ],
      images: [
        '../assets/images/home/project/awadh/awadh1.jpg',
        '../assets/images/home/project/awadh/awadh2.jpg',
        '../assets/images/home/project/awadh/awadh6.jpg',
        '../assets/images/home/project/awadh/awadh4.jpg',
        '../assets/images/home/project/awadh/awadh5.jpg',
        '../assets/images/home/project/awadh/awadh7.jpg',
      ],
    },
  },
  {
    name: 'highway-county',
    details: {
      about: {
        title: 'Highway County - NH-28',
        description: `Don't miss this exclusive opportunity to own a plot on NH-28, the highly sought-after Lucknow-Ayodhya route, through the Highway County initiative. Our plots come complete with essential amenities to cater to your needs. You'll enjoy convenient access to electricity poles, a well-designed children's park, top-notch schools, fully-equipped hospitals, and luxurious resorts for relaxation. Embracing a holistic approach, we also offer commercial establishments like malls to fulfill your shopping and entertainment desires. With our prime location and thoughtful facilities, this is the perfect chance to secure your dream plot in a thriving community. Invest in your future and experience the best of modern living in this promising development. Act now and make this golden opportunity yours!`,
        image: '../assets/images/home/project/highway/main.jpg',
      },
      plot: [
        {
          location: 'NH-28',
          description:
            'Plots with essential amenities, including parks, schools, hospitals, and malls.',
          image: '/images/highway-plot1.jpg',
        },
        {
          location: 'Prime Location',
          description:
            'Conveniently located near Ayodhya Ram Mandir, ISBT, and Barabanki Railway Station.',
          image: '/images/highway-plot2.jpg',
        },
      ],
      benefits: [
        'Prime location on Lucknow-Ayodhya route.',
        'Holistic community with modern amenities.',
        'Perfect for modern living and investment.',
      ],
      images: [
        '../assets/images/home/project/highway/hw1.jpg',
        '../assets/images/home/project/highway/hw2.jpg',
        '../assets/images/home/project/highway/hw3.jpg',
        '../assets/images/home/project/highway/hw4.jpg',
        '../assets/images/home/project/highway/hw5.jpg',
        '../assets/images/home/project/highway/hw6.jpg',
      ],
    },
  },
  {
    name: 'gomti-greens',
    details: {
      about: {
        title: 'Gomti Greens Farm & Cottages',
        description:
          "Are you seeking an investment opportunity that aligns with both your financial goals and sustainable values? Look no further than Gomti Green Cottage and Farms. This exceptional project offers a myriad of reasons why it's an ideal investment choice.",
        description2: `Gomti Green Cottage and Farms is more than just a real estate venture; it's a gated sustainable project designed to harmoniously coexist with the environment. Immerse yourself in a community that prioritizes eco-friendly living without compromising on modern comforts.`,
        image: '../assets/images/home/project/gomti/main.jpg',
      },
      plot: [
        {
          location: 'Sustainable Living Society',
          description:
            'Join a like-minded community dedicated to eco-conscious choices.',
          image: '/images/gomti-plot1.jpg',
        },
        {
          location: 'River Front',
          description: 'Enjoy the serene beauty of a riverfront location.',
          image: '/images/gomti-plot2.jpg',
        },
      ],
      benefits: [
        'Gated sustainable project with modern amenities.',
        'Rental income on farmhouse properties until possession.',
        'Low AQI area with natural boundaries by plants.',
      ],
      images: [
        '../assets/images/home/project/gomti/01.jpg',
        '../assets/images/home/project/gomti/02.jpg',
        '../assets/images/home/project/gomti/04.jpg',
        '../assets/images/home/project/gomti/06.jpg',
        '../assets/images/home/project/gomti/07.jpg',
      ],
    },
  },
];

const ProjectDetails = () => {
  const router = useRouter();

  const { id } = router.query;
  const service = servicesData.find((item) => item.name === id);
  const newName = service?.name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return (
    <Layout>
      <Breadcumb pageName={newName} />
      <div className="service-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {/* Display About Content */}
                <div className="col-lg-12 col-sm-12">
                  <div className="consen-service-details-box">
                    <div className="consen-service-thumb services-images">
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
                        {service.details.about.description2 && (
                          <p>{service.details.about.description2}</p>
                        )}
                        {service.details.about.description3 && (
                          <p>{service.details.about.description3}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Display Plots */}

                {/* Display Benefits */}
                {/* <div className="col-lg-12 mb-5">
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
                </div> */}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              {/* <div className="widget_search mt-5 mt-lg-0">
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
              </div> */}
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
                          href={`/projects/${item.name
                            .toLowerCase()
                            .replace(/\s+/g, '-')}`}
                        >
                          <a>
                            {item.name.charAt(0).toUpperCase() +
                              item.name.slice(1)}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <div className="service-details-content">
                  <div className="service-page-title2">
                    <h1>What You Benefit</h1>
                  </div>
                  <div className="widget-service-details-icon">
                    {service.details.benefits.map((benefit, index) => (
                      <p key={index}>
                        <i className="bi bi-check-lg" /> <span>{benefit}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 d-flex flex-wrap mb-5">
              {service.details.images.map((plot, index) => (
                <div className="col-lg-4 col-sm-12 px-sm-0" key={index}>
                  <div className="p-md-2 mb-2 d-flex flex-column ">
                    <div className="project-images">
                      <img src={plot} alt="Icon" />
                    </div>
                    {/* <div className="service-details-title">
                      <h4>{plot.location}</h4>
                    </div>
                    <div className="services-detials-desc">
                      <p>{plot.description}</p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetails;
