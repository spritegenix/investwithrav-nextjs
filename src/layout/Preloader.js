import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('body').classList.add('loaded');
    }, 200);
  }, []);
  return (
    <div className="loader-wrapper">
      <div className="loader" />
      <div className="loder-section left-section" />
      <div className="loder-section right-section" />
    </div>
  );
};
export default Preloader;
