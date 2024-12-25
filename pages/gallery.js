import Breadcumb from '@/src/components/Breadcumb';
import Layout from '@/src/layout/Layout';
const Gallery = () => {
  return (
    <Layout>
      <Breadcumb pageName={'Gallery'} />
      <section>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src="assets/images/gallery/01.jpg" alt="Gallery Image 1" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/02.jpg" alt="Gallery Image 2" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/03.jpg" alt="Gallery Image 3" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/04.jpg" alt="Gallery Image 4" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/05.jpg" alt="Gallery Image 5" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/06.jpg" alt="Gallery Image 6" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/07.jpg" alt="Gallery Image 7" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/08.jpg" alt="Gallery Image 8" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/09.jpg" alt="Gallery Image 9" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/10.jpg" alt="Gallery Image 10" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/11.webp" alt="Gallery Image 11" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/12.jpeg" alt="Gallery Image 12" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/13.jpeg" alt="Gallery Image 13" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/14.jpeg" alt="Gallery Image 14" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/15.jpeg" alt="Gallery Image 15" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/16.jpeg" alt="Gallery Image 16" />
          </div>
          <div className="gallery-item">
            <img src="assets/images/gallery/17.jpeg" alt="Gallery Image 17" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
