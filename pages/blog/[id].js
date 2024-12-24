import BlogSidebar from '@/src/components/BlogSidebar';
import Breadcumb from '@/src/components/Breadcumb';
import Layout from '@/src/layout/Layout';
import { useRouter } from 'next/router';
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
  {
    name: 'design-tips-for-modern-living',
    title: 'DESIGN TIPS FOR MODERN LIVING',
    author: 'Admin',
    comments: 5,
    content: `
        <p>Creating a modern living space that is both stylish and functional can be challenging, but with the right tips, it becomes an exciting journey. The key lies in balancing aesthetics with practicality. Start by identifying the purpose of your living space and the activities that will take place there.</p>
        <p>Focus on minimalist furniture, neutral color palettes, and natural light to create an open and airy atmosphere. Choose furniture pieces that are sleek and versatile, ensuring they complement the overall design without overwhelming the space. Neutral tones like whites, grays, and beiges provide a timeless look, while natural light enhances the feeling of spaciousness.</p>
        <p>Add personal touches like art pieces or unique textures to infuse personality into the space. These could include a statement painting, a textured rug, or an accent wall with bold wallpaper. Plants also play a significant role in modern living spaces, bringing life and vibrancy to the room.</p>
        <p>Additionally, multifunctional furniture can help maximize smaller spaces while keeping them organized and visually appealing. Consider a sofa that doubles as a bed or a coffee table with built-in storage. These practical pieces allow you to make the most of your area without sacrificing style.</p>
        <p>Modern living is about embracing simplicity, functionality, and style. Incorporate these design tips to transform your space into a contemporary haven where you can relax, entertain, and thrive.</p>
      `,
    image: '../assets/images/home/blog/blog-04.jpeg',
  },
  {
    name: 'functional-spaces-for-busy-lifestyles',
    title: 'FUNCTIONAL SPACES FOR BUSY LIFESTYLES',
    author: 'Admin',
    comments: 4,
    content: `
        <p>In today's fast-paced world, creating functional spaces that cater to busy lifestyles is essential. From home offices to compact kitchens, thoughtful design plays a crucial role in enhancing efficiency and comfort.</p>
        <p>Incorporate modular furniture and smart storage solutions to make the most of your space. Modular furniture pieces, such as adjustable desks and stackable chairs, offer flexibility and adaptability, making them perfect for multifunctional rooms. Use vertical storage like shelves and wall-mounted cabinets to keep the area organized and free from clutter.</p>
        <p>Keep the layout simple and clutter-free to improve productivity and ease of use. A well-organized workspace, for instance, can significantly enhance your ability to focus and complete tasks efficiently. Use cable organizers and drawer dividers to maintain order in your setup.</p>
        <p>Don’t forget to introduce elements of comfort, such as ergonomic chairs and soft lighting, to ensure the space is not only functional but also inviting. A comfortable chair with proper lumbar support can prevent fatigue during long hours of work, while warm lighting creates a cozy atmosphere.</p>
        <p>Functional spaces are the cornerstone of a well-balanced life, allowing you to thrive in both personal and professional settings. With thoughtful planning and attention to detail, you can create environments that support your busy lifestyle while offering a sense of comfort and ease.</p>
      `,
    image: '../assets/images/home/blog/blog-05.jpeg',
  },
  {
    name: 'maximizing-small-spaces-with-style',
    title: 'MAXIMIZING SMALL SPACES WITH STYLE',
    author: 'Admin',
    comments: 2,
    content: `
        <p>Small spaces don’t have to feel cramped or uninspiring. With creative solutions, you can make even the tiniest areas stylish and functional. Start by assessing the available space and identifying its potential uses.</p>
        <p>Use vertical storage like shelves and wall-mounted organizers to save floor space. Installing floating shelves can provide additional storage for books, decorative items, and essentials without taking up valuable square footage. Wall-mounted organizers keep items easily accessible while maintaining a neat appearance.</p>
        <p>Mirrors and light colors can make a room feel larger and more open. Place mirrors strategically to reflect light and create an illusion of depth. Opt for light-colored paint or wallpaper to enhance the sense of space and brightness.</p>
        <p>Opt for dual-purpose furniture like sofa beds or foldable tables to maximize utility. A sofa bed can serve as seating during the day and transform into a comfortable sleeping area at night. Foldable tables are perfect for dining or working, allowing you to tuck them away when not in use.</p>
        <p>Add a few statement pieces for a touch of personality and charm. These could include a bold piece of artwork, an eye-catching light fixture, or a colorful throw pillow. Such accents draw attention and give the room character without overwhelming the design.</p>
        <p>Remember, the key to maximizing small spaces is creativity and smart design. Embrace the challenge and turn your compact areas into beautiful and efficient living spaces that reflect your unique style and needs.</p>
      `,
    image: '../assets/images/home/blog/blog-06.jpeg',
  },
];
export async function getStaticProps({ params }) {
  const { id } = params;

  // Fetch the data for each service (replace with actual data fetching logic)

  const service = blogPosts.map((blog) => blog.name === id) || null;

  if (!service) {
    return { notFound: true }; // Return a 404 page if the service is not found
  }

  return {
    props: { service }, // Pass the service data as props to the component
  };
}

export async function getStaticPaths() {
  const services = [
    { id: '5-things-that-take-a-room-from-good-to-great' },
    { id: 'functional-and-stylish-wall-to-wall-shelves' },
    { id: 'the-5-secrets-to-pulling-off-simple-minimal-design' },
    { id: 'design-tips-for-modern-living' },
    { id: 'functional-spaces-for-busy-lifestyles' },
    { id: 'maximizing-small-spaces-with-style' },
  ];

  const paths = services.map((service) => ({
    params: { id: service.id },
  }));

  return {
    paths,
    fallback: false, // This ensures only the paths specified will be generated during build time
  };
}
const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const filteredData = blogPosts.find((item) => item.name === id);
  return (
    <Layout>
      <Breadcumb pageName={filteredData?.title} />

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
                  src={filteredData?.image}
                  alt={filteredData?.title}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>
              {/* Blog Content */}
              <div className="blog-content">
                <h5>{filteredData?.title}</h5>
                <div className="blog-meta">
                  <span>By {filteredData?.author}</span> -{' '}
                  {/* <span>{filteredData?.date}</span> -{' '} */}
                  <span>{filteredData?.comments} Comments</span>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: filteredData?.content }}
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
            <BlogSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
