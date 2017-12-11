import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import {
  GKStatus, GKIssues, GKPRs
} from '../../components/badges';

const GreenkeeperStatusPage = ({data}) => <main>
  <Helmet>
    <title>Ian W. Remmel | Greenkeeper Status</title>
  </Helmet>
  <div className="container">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">Greenkeeper Status</h1>
      </div>
    </div>
    <table className="table">
      <thead>
        <tr>
          <td>Project (npm Package Name)</td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {data.allGitHubRepo.edges.sort(({node: {name: a}}, {node: {name: b}}) => {
          if (a < b) {
            return -1;
          }
          if (b < a) {
            return 1;
          }
          return 0;
        })
          .map(({
            node: {
              name,
              full_name: repoSlug,
              html_url: repoHtmlUrl,
              id: key,
              packageJson: {name: npmName}
            }
          }) => <tr key={key}>
            <td><a href={repoHtmlUrl}>{name} ({npmName}) </a></td>
            <td><GKStatus repoSlug={repoSlug} /></td>
            <td><GKIssues repoSlug={repoSlug} /></td>
            <td><GKPRs repoSlug={repoSlug} /></td>
          </tr>)}
      </tbody>
    </table>
  </div>
</main>;

GreenkeeperStatusPage.propTypes = {data: PropTypes.object.isRequired};

export default GreenkeeperStatusPage;

export const query = graphql`
query GreenkeeperStatusPage {
  allGitHubRepo(filter:{
    packageJson: {
      # GraphQL doesn't seem to support a filter on undefined Objects, so the
      # only method I've found for filter out those repos that don't have
      # package.jsons is by validating that their names exist
      name:{
        # it's a directory glob, so we need to acknowledget that some packages
        # with have slashes, hence the double *
        glob: "**"
      }
    }
  }) {
    edges {
      node {
        name
        full_name
        html_url
        id
        packageJson {
          name
        }
      }
    }
  }
}
`;
