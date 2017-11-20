import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const TemplateWrapper = ({children}) =>
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        {
          content: 'Sample',
          name: 'description'
        },
        {
          content: 'sample, something',
          name: 'keywords'
        }
      ]}
    />
    {children()}
  </div>;


TemplateWrapper.propTypes = {children: PropTypes.func};

export default TemplateWrapper;
