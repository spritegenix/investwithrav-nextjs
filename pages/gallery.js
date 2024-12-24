import Breadcumb from '@/src/components/Breadcumb';
import Layout from '@/src/layout/Layout';

const Gallery = () => {
  const galleryImages = [
    '../assets/images/gallery/01.jpg',
    '../assets/images/gallery/02.jpg',
    '../assets/images/gallery/03.jpg',
    '../assets/images/gallery/04.jpg',
    '../assets/images/gallery/05.jpg',
    '../assets/images/gallery/06.jpg',
    '../assets/images/gallery/07.jpg',
    '../assets/images/gallery/08.jpg',
    '../assets/images/gallery/09.jpg',
    '../assets/images/gallery/10.jpg',
    '../assets/images/gallery/11.webp',
    '../assets/images/gallery/12.jpeg',
    '../assets/images/gallery/13.jpeg',
    '../assets/images/gallery/14.jpeg',
    '../assets/images/gallery/15.jpeg',
    '../assets/images/gallery/16.jpeg',
    '../assets/images/gallery/17.jpeg',
  ];

  return (
    <Layout>
      <Breadcumb pageName={'Gallery'} />
      <section>
        <div className="gallery-container">
          {galleryImages.map((imageSrc, index) => (
            <div className="gallery-item" key={index}>
              <img src={imageSrc} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
