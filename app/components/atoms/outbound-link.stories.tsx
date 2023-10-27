import {decorateWithRouter} from '../../storybook/router-decorator';

import {OutboundLink as Component} from './outbound-link';

export default {
  component: Component,
  decorators: [decorateWithRouter()],
  title: 'Outbound Link'
};

export const OutboundLink = () => (
  <Component
    href="https://www.check-run-reporter.com"
    title="Check Run Reporter"
  >
    Check Run Reporter
  </Component>
);
