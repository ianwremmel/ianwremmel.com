import {decorateWithRouter} from '../../storybook/router-decorator';

import {Navbar} from './navbar';

export default {
  component: Navbar,
  decorators: [decorateWithRouter({pathname: '/bar'})],
  title: 'Navbar'
};

export const navbar = () => <Navbar />;
