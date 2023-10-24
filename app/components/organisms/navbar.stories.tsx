import {decorateWithRouter} from '../../storybook/router-decorator';

import {Navbar as Component} from './navbar';

export default {
  component: Component,
  decorators: [decorateWithRouter({pathname: '/bar'})],
  title: 'Navbar'
};

export const Navbar = () => <Component />;
