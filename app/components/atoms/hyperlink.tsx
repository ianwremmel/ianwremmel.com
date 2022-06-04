import {Link as RemixLink} from '@remix-run/react';
import cx from 'classnames';
import type {HTMLProps, PropsWithChildren, Ref} from 'react';
import {Fragment, useContext, useMemo} from 'react';
import {useMatch} from 'react-router';

import {LandmarkContext, NavContext} from './nav';

export interface LinkProps extends HTMLProps<HTMLAnchorElement> {
  href: string;
  /**
   * entirely option. repeated here from `HTMLProps<HTMLAnchorElement>` to
   * exclude legacy string refs, which makes type-compatibility across
   * components a lot easier to deal with.
   */
  ref?: Ref<HTMLAnchorElement>;
}

const NavItemWrapper = ({children}: PropsWithChildren<unknown>) => {
  return <li className="nav-item">{children}</li>;
};

/**
 * One single component to use to wire up anchor tags. Does "the right thing"
 * when in a nav or navbar, when the link is off-site, when the link points to
 * the current page, etc.
 * @param children
 * @param className
 * @param href
 * @param rest
 * @constructor
 */
export const Hyperlink = ({children, className, href, ...rest}: LinkProps) => {
  const isExternal = useMemo(() => {
    try {
      if (href) {
        const url = new URL(href);
        const ssr = typeof window === 'undefined';

        if (ssr) {
          // not ideal, but there's no good way to get the origin url on the
          // server (at least, not without adding a lot of complexity)
          return (
            href.startsWith('http://') ||
            href.startsWith('https://') ||
            href.startsWith('//')
          );
        }

        return window.location.href !== url.origin;
      }
    } catch (err) {
      return false;
    }
  }, [href]);

  const isNav = useContext(NavContext);
  const isListNav = !useContext(LandmarkContext) && isNav;

  const isCurrent = useMatch({path: href});

  const props = useMemo(
    () =>
      isCurrent
        ? {
            ...rest,
            'aria-current': 'page' as const
          }
        : rest,
    [isCurrent, rest]
  );

  const Wrapper = isListNav ? NavItemWrapper : Fragment;

  className = cx(className, {
    active: isCurrent,
    'nav-link': isNav
  });

  if (isExternal) {
    return (
      <Wrapper>
        <a
          {...props}
          className={className}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <RemixLink className={className} {...props} to={href}>
        {children}
      </RemixLink>
    </Wrapper>
  );
};
