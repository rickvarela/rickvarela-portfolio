import { LineBackground } from '../assets/svg/site-shapes';
import rickAvatar from '../assets/img/rick.png';

export const Home = ({ screenDims }) => {
  return (
    <div className='site-home' id='home'>
      <div className='site-home-wrapper'>
        <img src={rickAvatar} className='home-img' alt='Rick' />
        <div className='home-text'>
          <h1>RICK VARELA</h1>
          <p>
            I'm a mechanical engineer and <br /> self-taught web developer
          </p>
        </div>
        <LineBackground screenDims={screenDims} />
      </div>
    </div>
  );
};
