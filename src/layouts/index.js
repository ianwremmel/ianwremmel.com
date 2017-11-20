import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const TemplateWrapper = ({children}) =>
  <div>
    <Helmet>
      <title>Ian W. Remmel | About</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.css" />
      <style>{`
        html,
        body,
        #___gatsby,
        [data-reactroot] {
          height: 100%
        }
      `}</style>
    </Helmet>
    {children()}
  </div>;


TemplateWrapper.propTypes = {children: PropTypes.func};

export default TemplateWrapper;
