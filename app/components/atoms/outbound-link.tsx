import type {PropsWithChildren} from 'react';

import type {LinkProps} from './hyperlink';
import {Hyperlink} from './hyperlink';

export interface OutboundLinkProps extends LinkProps {
  href: string;
  title: string;
}

export const OutboundLink = ({
  children,
  href,
  ...rest
}: PropsWithChildren<OutboundLinkProps>) => (
  <Hyperlink {...rest} href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </Hyperlink>
);
