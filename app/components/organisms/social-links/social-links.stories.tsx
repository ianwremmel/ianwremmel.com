import type {ComponentType} from 'react';

import {decorateWithRouter} from '../../../storybook/router-decorator';
import {Nav} from '../../atoms/nav';

import {SocialLinks as Component} from './social-links';

export default {
  component: Component,
  decorators: [decorateWithRouter()],
  title: 'Social Links'
};

export const SocialLinks = () => <Component />;
export const InANav = () => <Component />;
InANav.decorators = [
  (Story: ComponentType) => (
    <Nav>
      <Story />
    </Nav>
  )
];
