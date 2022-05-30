import type {ComponentType} from 'react';

import {decorateWithRouter} from '../../../storybook/router-decorator';
import {Nav} from '../../atoms/nav';

import {SocialLinks} from './social-links';

export default {
  component: SocialLinks,
  decorators: [decorateWithRouter()],
  title: 'Social Links'
};

export const socialLinks = () => <SocialLinks />;
export const inANav = () => <SocialLinks />;
inANav.decorators = [
  (Story: ComponentType) => (
    <Nav>
      <Story />
    </Nav>
  )
];
