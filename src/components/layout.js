import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet>
      <title>Ian W. Remmel | About</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
    </Helmet>
    {children}
  </div>
);

TemplateWrapper.propTypes = {children: PropTypes.func};

export default TemplateWrapper;
