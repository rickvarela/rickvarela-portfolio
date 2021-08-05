import './App.css';
import { useState, useEffect } from 'react';
import { Header } from './componets/Header';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './componets/Footer';

function App() {
  const [screenDims, setScreenDims] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    document.title = 'Rick Varela | Portfolio';

    const updateWindow = () => {
      setScreenDims({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateWindow);
    return () => window.removeEventListener('resize', updateWindow);
  }, []);

  return (
    <div className='app'>
      <Header isMobile={screenDims.width < 700 ? true : false} />
      <Home screenDims={screenDims} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
