import {OutboundLink} from '../atoms/outbound-link';

export interface SocialLinkProps {
  alt: string;
  href: string;
  src: string;
  title: string;
}

export const SocialLink = ({alt, href, src, title}: SocialLinkProps) => {
  const Component = href.startsWith('mailto') ? 'a' : OutboundLink;

  return (
    <Component href={href} title={title}>
      <img alt={alt} src={src} />
    </Component>
  );
};
