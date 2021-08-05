import LinkedinLogo from '../assets/svg/linkedin-logo.svg';
import GithubLogo from '../assets/svg/github-logo.svg';
import EmailLogo from '../assets/svg/email-logo.svg';

export const Contact = () => {
  return (
    <div className='site-contact' id='contact'>
      <div className='site-contact-wrapper'>
        <h2>CONTACT</h2>
        <div className='site-contact-icons'>
          <a href='mailto:rickvarela17@gmail.com'>
            <img className='contact-logo' src={EmailLogo} alt='Email icon' />
          </a>
          <a href='https://github.com/rickvarela'>
            <img className='contact-logo' src={GithubLogo} alt='Github icon' />
          </a>
          <a href='https://www.linkedin.com/in/rick-varela/'>
            <img
              className='contact-logo'
              src={LinkedinLogo}
              alt='Linkedin icon'
            />
          </a>
        </div>
      </div>
    </div>
  );
};
