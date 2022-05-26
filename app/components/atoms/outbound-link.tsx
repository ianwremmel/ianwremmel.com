import type {PropsWithChildren} from 'react';

export interface OutboundLinkProps {
  href: string;
  title: string;
}

export const OutboundLink = ({
  children,
  href,
  ...rest
}: PropsWithChildren<OutboundLinkProps>) => (
  <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
    {children}
  </a>
);
