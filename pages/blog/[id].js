import BlogSidebar from '@/src/components/BlogSidebar';
import Breadcumb from '@/src/components/Breadcumb';
import Layout from '@/src/layout/Layout';
import { useRouter } from 'next/router';

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const blogPosts = [
    {
      name: '5-things-that-take-a-room-from-good-to-great',
      title: '5 THINGS THAT TAKE A ROOM FROM GOOD TO GREAT',
      author: 'Admin',
      comments: 3,
      content: `
          <p>An old story goes A person heard about free will, and he really liked to enjoy it. He strolled outside, rotating his walking stick. The passersby were frightened of any harm and avoided coming into its radius. His courage grew, and he walked to the nearest bus stop, continuing his act.</p>
          <p>The story might be simple, but it has a deep sense of responsibility for society and its citizens. How often have you wondered if your little acts of etiquette and manners can make a great difference in society?</p>
          <p>Once, Mr. Tata was visiting one of the production plants of the TATA Group. Meanwhile, he wished to use the lavatory. He approached and was astonished for a while. There were two lavatories adjacent to each other with the signage "For The Officials" and "For The Staff."</p>
          <p>The difference is clear, but the interpretation has blurred. We all need to understand one thing: "We cannot do all the things, but we can all do at least one thing." Let us pledge to make our surroundings neat and clean, and let us understand our social responsibility to make this world a better place to live.</p>
        `,
      image: '../assets/images/home/blog/blog-01.webp',
    },
    {
      name: 'functional-and-stylish-wall-to-wall-shelves',
      title: 'FUNCTIONAL AND STYLISH WALL-TO-WALL SHELVES',
      author: 'Admin',
      comments: 3,
      content: `
          <p>In a world filled with complexities and challenges, it's easy to overlook the significance of small acts of kindness, etiquette, and manners in our daily lives. Yet, these seemingly trivial actions can create a powerful ripple effect that resonates throughout society.</p>
          <p>Much like a well-organized wall-to-wall shelf, where each item has its designated place and contributes to the overall aesthetics, our society thrives when every individual acknowledges their role and actively contributes positively.</p>
          <p>Remember, change starts within each one of us. What may seem like small acts of etiquette and manners can have a profound and lasting effect on society.</p>
          <p>In conclusion, let us be reminded of the importance of functional and stylish wall-to-wall shelves as a metaphor for building a responsible society. By recognizing our role and impact, and by upholding values of kindness, respect, and responsibility, we can collectively make a difference in the world.</p>
        `,
      image: '../assets/images/home/blog/blog-02.webp',
    },
    {
      name: 'the-5-secrets-to-pulling-off-simple-minimal-design',
      title: 'THE 5 SECRETS TO PULLING OFF SIMPLE, MINIMAL DESIGN',
      author: 'Admin',
      comments: 3,
      content: `
          <p>Simple and minimal design has a unique charm that can transform spaces into serene and elegant environments. But the beauty of such spaces goes beyond aesthetics; it also reflects a deep sense of responsibility towards the world we live in.</p>
          <p>The Story of Ratan Tata's Act of Responsibility: Let me take you back to a heartwarming incident involving Ratan Tata, a prominent figure in the business world. On one occasion, he was visiting a picturesque hill station. As he strolled through the town, he noticed trash littered across the otherwise serene landscape.</p>
          <p>Rather than turning a blind eye, Ratan Tata took it upon himself to make a difference. He initiated a cleanliness drive, encouraging locals and tourists alike to participate in maintaining the cleanliness of the area. Through his act of responsibility and leadership, the town transformed into a clean and inviting space.</p>
          <p>By implementing the five secrets to pulling off simple, minimal design, we can not only create beautiful and serene spaces but also contribute to a cleaner, greener, and more mindful world.</p>
        `,
      image: '../assets/images/home/blog/blog-03.webp',
    },
  ];
  const filteredData = blogPosts.find((item) => item.name === id);
  return (
    <Layout>
      <Breadcumb pageName={filteredData.title} />

      <div className="blog-section style-two details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Blog Image */}
              <div
                className="blog-img "
                style={{ width: '730px', height: '493px' }}
              >
                <img
                  src={filteredData.image}
                  alt={filteredData.title}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              {/* Blog Content */}
              <div className="blog-content">
                <h5>{filteredData.title}</h5>
                <div className="blog-meta">
                  <span>By {filteredData.author}</span> -{' '}
                  {/* <span>{filteredData.date}</span> -{' '} */}
                  <span>{filteredData.comments} Comments</span>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: filteredData.content }}
                ></p>
              </div>

              <div className="comment-form pt-50">
                <div className="comment-title mb-40">
                  <h3>Leave Comment</h3>
                  <span />
                </div>
                <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="comment-box"
                        name="comment-name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="comment-box"
                        name="comment-email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="comment-message"
                        className="mb-20"
                        id="comment-msg-box"
                        cols={30}
                        rows={4}
                        placeholder="Message"
                      />
                    </div>
                    <input
                      type="submit"
                      value="Post Comment"
                      className="submit-comment"
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* <BlogSidebar /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
