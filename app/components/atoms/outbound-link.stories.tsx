import {OutboundLink} from './outbound-link';

export default {
  component: OutboundLink,
  title: OutboundLink.name
};

export const outboundLink = () => (
  <OutboundLink
    href="https://www.check-run-reporter.com"
    title="Check Run Reporter"
  >
    Check Run Reporter
  </OutboundLink>
);
