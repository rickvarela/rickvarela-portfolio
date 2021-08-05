import { Hamburger } from '../assets/svg/site-shapes';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import xIcon from '../assets/svg/x-logo.svg';

export const Navigation = ({ isMobile }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <nav>
          <button
            onClick={() => {
              setIsNavOpen(true);
            }}
          >
            <Hamburger />
          </button>
          {isNavOpen && (
            <ul className='site-nav-mobile'>
              <li>
                <img
                  onClick={() => setIsNavOpen(false)}
                  className='site-nav-mobile-x'
                  src={xIcon}
                  alt='Close menu'
                />
              </li>
              <li>
                <AnchorLink
                  href='#home'
                  className='site-nav-link'
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                >
                  HOME
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  offset='50'
                  href='#about'
                  className='site-nav-link'
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                >
                  ABOUT
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  offset='50'
                  href='#projects'
                  className='site-nav-link'
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                >
                  PROJECTS
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  href='#contact'
                  className='site-nav-link'
                  onClick={() => {
                    setIsNavOpen(false);
                  }}
                >
                  CONTACT
                </AnchorLink>
              </li>
            </ul>
          )}
        </nav>
      ) : (
        <nav>
          <ul className='site-nav-desktop'>
            <li>
              <AnchorLink href='#home'>HOME</AnchorLink>
            </li>
            <li>
              <AnchorLink offset='60' href='#about'>
                ABOUT
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset='60' href='#projects'>
                PROJECTS
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#contact'>CONTACT</AnchorLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
