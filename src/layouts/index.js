// eslint-disable-next-line import/no-unassigned-import
import './index.css';

import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

const Header = () =>
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>;


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
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>;


TemplateWrapper.propTypes = {children: PropTypes.func};

export default TemplateWrapper;
