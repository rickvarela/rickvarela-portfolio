import { Navigation } from './Navigation';
import RVLogo from '../assets/svg/rickvarela-logo.svg';

export const Header = ({ isMobile }) => {
  return (
    <div className='site-header'>
      <div className='site-header-wrapper'>
        <img className='site-logo' src={RVLogo} alt='Site Logo' />
        <Navigation isMobile={isMobile} />
      </div>
    </div>
  );
};
