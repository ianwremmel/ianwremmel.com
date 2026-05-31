import type {Handle, RemixNode} from 'remix/ui';

export interface HyperlinkProps {
  children?: RemixNode;
  className?: string;
  href: string;
  rel?: string;
  title?: string;
  /** Render the link wrapped in an `li.nav-item` for list-style navs. */
  navItem?: boolean;
  /** Apply Bootstrap `nav-link` styling. */
  navLink?: boolean;
}

function isExternal(href: string): boolean {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//') ||
    href.startsWith('mailto:')
  );
}

function classes(...values: (string | false | undefined)[]): string {
  return values.filter(Boolean).join(' ');
}

/**
 * One single component to use to wire up anchor tags. Does "the right thing"
 * when in a nav or navbar and when the link is off-site.
 */
export function Hyperlink(handle: Handle<HyperlinkProps>) {
  return () => {
    const {
      children,
      className,
      href,
      rel,
      title,
      navItem = false,
      navLink = false
    } = handle.props;

    const external = isExternal(href);
    const anchorClassName =
      classes(className, navLink && 'nav-link') || undefined;

    const anchor = external ? (
      <a
        className={anchorClassName}
        href={href}
        title={title}
        rel={classes('noopener', 'noreferrer', rel) || undefined}
        target="_blank"
      >
        {children}
      </a>
    ) : (
      <a className={anchorClassName} href={href} title={title} rel={rel}>
        {children}
      </a>
    );

    if (navItem) {
      return <li className="nav-item">{anchor}</li>;
    }

    return anchor;
  };
}
