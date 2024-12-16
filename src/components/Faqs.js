import { useState } from 'react';
import { Accordion } from 'react-bootstrap';

const faqsData = [
  {
    id: 1,
    title: 'What services does RAV offer?',
  },
  { id: 2, title: 'How do I get in touch for a consultation?' },
  { id: 3, title: "What makes RAV's approach unique?" },
  { id: 4, title: 'Can RAV tailor solutions for my business?' },
];

const Faqs = () => {
  const [active, setActive] = useState(faqsData[0].id);
  return (
    <div id="tab1" className="tab_content">
      <Accordion
        defaultActiveKey={faqsData[0].id}
        as={'ul'}
        className="accordion"
      >
        {faqsData.map((faq) => (
          <li key={faq.id}>
            <Accordion.Toggle
              as="a"
              eventKey={faq.id}
              onClick={() => setActive(faq.id === active ? null : faq.id)}
              className={faq.id === active ? 'active' : ''}
            >
              <span> {faq.title} </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={faq.id}>
              <p>
                {faq.id === 1 && (
                  <>
                    RAV offers a wide range of services including strategic
                    consulting, sales partnerships, and customized solutions for
                    businesses. We work closely with our clients to provide
                    effective and efficient strategies that drive growth and
                    success.
                  </>
                )}
                {faq.id === 2 && (
                  <>
                    You can easily get in touch with RAV by visiting our website
                    and filling out the contact form, or by calling our customer
                    support. Our team will get back to you promptly to schedule
                    a consultation that suits your business needs.
                  </>
                )}
                {faq.id === 3 && (
                  <>
                    RAV's approach is unique because we focus on building
                    long-term relationships with our clients. We prioritize
                    understanding your business goals and offer tailored
                    solutions that ensure sustainable growth. Our team is
                    dedicated to providing top-notch service and support every
                    step of the way.
                  </>
                )}
                {faq.id === 4 && (
                  <>
                    Yes, RAV specializes in customizing solutions based on your
                    specific business requirements. Whether you need marketing
                    strategies, sales support, or operational optimization, we
                    tailor our services to meet your unique needs.
                  </>
                )}
              </p>
            </Accordion.Collapse>
          </li>
        ))}
      </Accordion>
    </div>
  );
};

export default Faqs;
