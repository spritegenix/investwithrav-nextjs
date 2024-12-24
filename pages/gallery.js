import Breadcumb from '@/src/components/Breadcumb';
import Layout from '@/src/layout/Layout';

const Gallery = () => {
  const galleryImages = [
    '../assets/images/home/gallery/01.jpeg',
    '../assets/images/home/gallery/01.jpg',
    '../assets/images/home/gallery/02.jpg',
    '../assets/images/home/gallery/03.jpg',
    '../assets/images/home/gallery/04.jpg',
    '../assets/images/home/gallery/05.jpg',
    '../assets/images/home/gallery/06.jpg',
    '../assets/images/home/gallery/07.jpg',
    '../assets/images/home/gallery/08.jpg',
    '../assets/images/home/gallery/09.jpg',
    '../assets/images/home/gallery/10.jpg',
    '../assets/images/home/gallery/11.webp',
    '../assets/images/home/gallery/12.jpeg',
    '../assets/images/home/gallery/13.jpeg',
    '../assets/images/home/gallery/14.jpeg',
    '../assets/images/home/gallery/15.jpeg',
    '../assets/images/home/gallery/16.jpeg',
    '../assets/images/home/gallery/17.jpeg',
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
