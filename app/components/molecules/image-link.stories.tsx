import {decorateWithRouter} from '../../storybook/router-decorator';
import githubIcon from '../organisms/social-links/github.svg';

import {ImageLink} from './image-link';

export default {
  component: ImageLink,
  decorators: [decorateWithRouter()],
  title: 'Image Link'
};

export const imageLink = () => (
  <ImageLink
    alt="GitHub logo"
    href="https://github.com/ianwremmel"
    src={githubIcon}
    title="My GitHub profile"
  />
);
