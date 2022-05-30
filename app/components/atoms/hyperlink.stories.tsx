import type {ComponentType} from 'react';

import {decorateWithRouter} from '../../storybook/router-decorator';

import {Hyperlink} from './hyperlink';
import {Nav} from './nav';

export default {
  component: Hyperlink,
  decorators: [decorateWithRouter({pathname: '/bar'})],
  title: 'Hyperlink'
};

export const Link = () => <Hyperlink href="/foo">Foo</Hyperlink>;

export const ActiveLink = () => <Hyperlink href="/bar">Bar</Hyperlink>;

export const ExternalLink = () => (
  <Hyperlink href="https://www.example.com/foo">Foo</Hyperlink>
);

export const NavLink = () => <Hyperlink href="/foo">Foo</Hyperlink>;
NavLink.decorators = [
  (Story: ComponentType) => (
    <Nav>
      <Story />
    </Nav>
  )
];

export const ActiveNavLink = () => <Hyperlink href="/bar">Bar</Hyperlink>;
ActiveNavLink.decorators = [
  (Story: ComponentType) => (
    <Nav>
      <Story />
    </Nav>
  )
];
