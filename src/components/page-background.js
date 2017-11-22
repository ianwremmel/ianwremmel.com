import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const PageBackgroundImage = ({sizes}) =>
  <div className="header-image" style={{backgroundImage: `url("${sizes.src}")`}}>
    <div className="header-image-image">
      <Image sizes={sizes}/>;
    </div>
  </div>;

PageBackgroundImage.propTypes = {sizes: PropTypes.object};

export default PageBackgroundImage;
