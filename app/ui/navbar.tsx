import {Hyperlink} from './hyperlink.tsx';
import {OutboundLink} from './outbound-link.tsx';
import {SocialLinks} from './social-links.tsx';

export function Navbar() {
  return () => (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Hyperlink className="navbar-brand" href="/" rel="me">
          Hi! I'm Ian Remmel.
        </Hyperlink>

        <ul className="nav navbar-nav">
          <OutboundLink
            href="https://www.linkedin.com/in/ianwremmel/"
            title="My LinkedIn profile, which describes my current employment status"
            navItem
            navLink
          >
            Work
          </OutboundLink>
          <OutboundLink
            href="https://www.check-run-reporter.com/?utm_source=https%3A%2F%2Fwww.ianwremmel.com&utm_medium=website&utm_campaign=none"
            title="Check Run Reporter helps you fix your CI failures faster by reducing the need to dig through poorly formatted logs."
            navItem
            navLink
          >
            Check Run Reporter
          </OutboundLink>
          <Hyperlink href="/blog" navItem navLink>
            Blog
          </Hyperlink>
          <SocialLinks inNav />
        </ul>
      </div>
    </div>
  );
}
