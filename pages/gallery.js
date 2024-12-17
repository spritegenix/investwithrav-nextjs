import Breadcumb from '@/src/components/Breadcumb';
import Layout from '@/src/layout/Layout';

const Gallery = () => {
  return (
    <Layout>
      <Breadcumb pageName={'Gallery'} />
      <section>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/01.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/02.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/03.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/04.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/05.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/06.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/07.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/08.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/09.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/10.jpg" alt="" />
          </div>
          <div className="gallery-item">
            <img src="../assets/images/home/gallery/11.webp" alt="" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
