import React from 'react';
import PropTypes from 'prop-types';
export const OutboundLink = ({children, href, ...rest}) => (
  <a href={href} rel="noopener noreferrer" target="_blank" {...rest}>
    {children}
  </a>
);

OutboundLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string
};
