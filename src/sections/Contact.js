import { ReactComponent as LinkedinLogo } from '../assets/svg/linkedin-logo.svg';
import { ReactComponent as GithubLogo } from '../assets/svg/github-logo.svg';
import { ReactComponent as EmailLogo } from '../assets/svg/email-logo.svg';

export const Contact = () => {
  return (
    <div className='site-contact' id='contact'>
      <div className='site-contact-wrapper'>
        <h2>CONTACT</h2>
        <div className='site-contact-icons'>
          <a href='mailto:rickvarela17@gmail.com'>
            <EmailLogo className='contact-logo' />
          </a>
          <a href='https://github.com/rickvarela'>
            <GithubLogo className='contact-logo' />
          </a>
          <a href='https://www.linkedin.com/in/rick-varela/'>
            <LinkedinLogo className='contact-logo' />
          </a>
        </div>
      </div>
    </div>
  );
};
