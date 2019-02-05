import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import {H, Section} from './heading';

export const Card = ({title, subtitle, className, children, ...rest}) => (
  <Section>
    <section className={classNames(className, 'card')} {...rest}>
      <div className="card-body">
        {title && <H className="card-title">{title}</H>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  </Section>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};
