import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const TemplateWrapper = ({children}) =>
  <div>
    <Helmet>
      <title>Ian W. Remmel | About</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous"/>
    </Helmet>
    {children()}
  </div>;

TemplateWrapper.propTypes = {children: PropTypes.func};

export default TemplateWrapper;
