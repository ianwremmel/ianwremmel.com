import {decorateWithRouter} from '../../storybook/router-decorator';

import {OutboundLink} from './outbound-link';

export default {
  component: OutboundLink,
  decorators: [decorateWithRouter()],
  title: 'Outbound Link'
};

export const outboundLink = () => (
  <OutboundLink
    href="https://www.check-run-reporter.com"
    title="Check Run Reporter"
  >
    Check Run Reporter
  </OutboundLink>
);
