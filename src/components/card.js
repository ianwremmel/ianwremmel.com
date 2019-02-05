import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export const Card = ({
  title,
  titleTag: TitleTag = 'h5',
  subtitle,
  subtitleTag: SubtitleTag = 'h6',
  className,
  children,
  ...rest
}) => (
  <section className={classNames(className, 'card')} {...rest}>
    <div className="card-body">
      {title && <TitleTag className="card-title">{title}</TitleTag>}
      {subtitle && (
        <SubtitleTag className="card-subtitle">{subtitle}</SubtitleTag>
      )}
      {children}
    </div>
  </section>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleTag: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.string
};
