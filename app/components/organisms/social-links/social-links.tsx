import {SocialLink} from '../../molecules/social-link';

import githubIcon from './github.svg';
import linkedinIcon from './linkedin.svg';
import mailIcon from './mail.svg';
import twitterIcon from './twitter.svg';

export const SocialLinks = () => (
  <div className="social-row">
    <SocialLink
      alt="Twitter logo"
      href="https://www.twitter.com/ianwremmel"
      src={twitterIcon}
      title="Follow me on Twitter"
    />

    <SocialLink
      alt="GitHub logo"
      href="https://github.com/ianwremmel"
      src={githubIcon}
      title="My GitHub profile"
    />

    <SocialLink
      alt="LinkedIn logo"
      href="https://www.linkedin.com/pub/ian-remmel/3/a32/208"
      src={linkedinIcon}
      title="That thing recruiters use to spread spam"
    />

    <SocialLink
      alt="An envelope"
      href="mailto:hello@ianwremmel.com"
      src={mailIcon}
      title="Send me an email"
    />
  </div>
);
