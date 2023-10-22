import {decorateWithRouter} from '../../storybook/router-decorator';
import githubIcon from '../organisms/social-links/github.svg';

import {ImageLink as Component} from './image-link';

export default {
  component: Component,
  decorators: [decorateWithRouter()],
  title: 'Image Link'
};

export const ImageLink = () => (
  <Component
    alt="GitHub logo"
    href="https://github.com/ianwremmel"
    src={githubIcon}
    title="My GitHub profile"
  />
);
