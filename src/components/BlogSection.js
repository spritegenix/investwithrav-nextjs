import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const BlogSection = ({ articles, heading }) => {
  return (
    <div className="container">
      {!heading && (
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
      )}

      <div className={`row ${heading ? 'pt-5' : ''}`}>
        {articles.map((item) => (
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-box">
              <div className="single-blog-thumb">
                <img src={item.image} alt={item.title} />
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
                    <Link legacyBehavior href={item.href}>
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
  );
};

export default BlogSection;
