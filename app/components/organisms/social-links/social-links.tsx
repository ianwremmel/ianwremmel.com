import {useContext} from 'react';

import {NavContext} from '../../atoms/nav';
import {ImageLink} from '../../molecules/image-link';

import githubIcon from './github.svg';
import linkedinIcon from './linkedin.svg';
import mailIcon from './mail.svg';

export const SocialLinks = () => {
  const inANav = useContext(NavContext);

  const links = (
    <>
      <ImageLink
        alt="GitHub logo"
        className="social-link"
        href="https://github.com/ianwremmel"
        src={githubIcon}
        title="My GitHub profile"
      />

      <ImageLink
        alt="LinkedIn logo"
        className="social-link"
        href="https://www.linkedin.com/pub/ian-remmel/3/a32/208"
        src={linkedinIcon}
        title="That thing recruiters use to spread spam"
      />

      <ImageLink
        alt="An envelope"
        className="social-link"
        href="mailto:hello@ianwremmel.com"
        src={mailIcon}
        title="Send me an email"
      />
    </>
  );

  if (inANav) {
    return links;
  }

  return <div className="social-links">{links}</div>;
};
