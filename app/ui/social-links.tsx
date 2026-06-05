import type {Handle} from 'remix/ui';

import {Hyperlink} from './hyperlink.tsx';

export interface SocialLinksProps {
  /** When inside a nav, render bare links instead of a wrapping container. */
  inNav?: boolean;
}

interface ImageLinkProps {
  alt: string;
  href: string;
  src: string;
  title: string;
}

function ImageLink(handle: Handle<ImageLinkProps>) {
  return () => {
    const {alt, href, src, title} = handle.props;
    return (
      <Hyperlink className="social-link" href={href} title={title}>
        <img alt={alt} src={src} />
      </Hyperlink>
    );
  };
}

export function SocialLinks(handle: Handle<SocialLinksProps>) {
  return () => {
    const {inNav = false} = handle.props;

    const links = (
      <>
        <ImageLink
          alt="GitHub logo"
          href="https://github.com/ianwremmel"
          src="/social-links/github.svg"
          title="My GitHub profile"
        />

        <ImageLink
          alt="LinkedIn logo"
          href="https://www.linkedin.com/pub/ian-remmel/3/a32/208"
          src="/social-links/linkedin.svg"
          title="That thing recruiters use to spread spam"
        />

        <ImageLink
          alt="An envelope"
          href="mailto:hello@ianwremmel.com"
          src="/social-links/mail.svg"
          title="Send me an email"
        />
      </>
    );

    if (inNav) {
      return links;
    }

    return <div className="social-links">{links}</div>;
  };
}
