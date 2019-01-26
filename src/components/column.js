import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export const Column = ({children, colspan, className, ...rest}) => (
  <div
    className={classNames(className, {
      col: !colspan,
      [`col-${colspan}`]: colspan
    })}
    {...rest}
  >
    {children}
  </div>
);

// <div className={colspan ? `col-${colspan}` : 'col'}>{children}</div>
Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  colspan: PropTypes.number.isRequired
};
