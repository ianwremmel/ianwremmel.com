import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({children}) =>
  <div>
    <Helmet>
      <title>Ian W. Remmel | About</title>
    </Helmet>
    {children()}
  </div>;


TemplateWrapper.propTypes = {children: PropTypes.func};

export default TemplateWrapper;
