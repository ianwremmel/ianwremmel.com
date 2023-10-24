import {Hyperlink} from '../atoms/hyperlink';
import {Nav} from '../atoms/nav';
import {OutboundLink} from '../atoms/outbound-link';

import {SocialLinks} from './social-links';

export const Navbar = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Hyperlink className="navbar-brand" href="/" rel="me">
        Hi! I'm Ian Remmel.
      </Hyperlink>

      <Nav landmark={false} className="navbar-nav">
        <OutboundLink
          href="https://www.linkedin.com/in/ianwremmel/"
          title="My LinkedIn profile, which describes my current employment status"
        >
          Work
        </OutboundLink>
        <OutboundLink
          href="https://www.check-run-reporter.com/?utm_source=https%3A%2F%2Fwww.ianwremmel.com&utm_medium=website&utm_campaign=none"
          title="Check Run Reporter helps you fix your CI failures faster by reducing the need to dig through poorly formatted logs."
        >
          Check Run Reporter
        </OutboundLink>
        <Hyperlink href="/blog">Blog</Hyperlink>
        <OutboundLink
          href={
            'https://timeline.ianwremmel.com/ianwremmel/highlights/604baf8c-daee-4133-a10e-cef7e5a379ff'
          }
          title=""
        >
          Polywork
        </OutboundLink>
        <SocialLinks />
      </Nav>
    </div>
  </div>
);
