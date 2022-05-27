import githubIcon from '../organisms/social-links/github.svg';

import {SocialLink} from './social-link';

export default {
  component: SocialLink,
  title: SocialLink.name
};

export const socialLink = () => (
  <SocialLink
    alt="GitHub logo"
    href="https://github.com/ianwremmel"
    src={githubIcon}
    title="My GitHub profile"
  />
);
