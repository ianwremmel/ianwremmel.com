import type {Handle, RemixNode} from 'remix/ui';

import {Hyperlink} from './hyperlink.tsx';

export interface OutboundLinkProps {
  children?: RemixNode;
  className?: string;
  href: string;
  title: string;
  navItem?: boolean;
  navLink?: boolean;
}

export function OutboundLink(handle: Handle<OutboundLinkProps>) {
  return () => {
    const {children, className, href, title, navItem, navLink} = handle.props;
    return (
      <Hyperlink
        className={className}
        href={href}
        title={title}
        navItem={navItem}
        navLink={navLink}
      >
        {children}
      </Hyperlink>
    );
  };
}
