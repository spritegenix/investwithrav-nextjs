import ConsenHead from '@/src/ConsenHead';
import Preloader from '@/src/layout/Preloader';
import '@/styles/globals.css';
import '@/styles/JourneySlider.css';
import { Fragment, useState } from 'react';
const App = ({ Component, pageProps }) => {
  const [loding, setLoding] = useState(true);
  setTimeout(() => {
    setLoding(false);
  }, 200);

  return (
    <Fragment>
      <ConsenHead />
      <Preloader />
      {!loding && <Component {...pageProps} />}
    </Fragment>
  );
};
export default App;
