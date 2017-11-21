import React from 'react';
import Img from 'gatsby-image';

const BackgroundImage = (props) =>
  <Img {...props} position="absolute" style={{
    height: '100%',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1
  }}/>;

export default BackgroundImage;
