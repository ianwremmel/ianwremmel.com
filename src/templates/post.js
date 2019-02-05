import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Layout from '../components/layout';
import {H} from '../components/heading';

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const {previous, next} = this.props.pageContext;

    return (
      <Layout title={siteTitle}>
        <H>{post.frontmatter.title}</H>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{__html: post.html}} />

        {(previous || next) && (
          <ul>
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        )}
      </Layout>
    );
  }
}

export default PostTemplate;

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.string.isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  }),
  pageContext: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string
  })
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
