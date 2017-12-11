import React from 'react';

import {BadgeNPMDownloads} from '../../components/badges';

const ProjectIndexPage = ({data: {allGitHubRepo: {edges: repos}}}) =>
  <main>
    <div className="card-columns">
      {
        repos.map(({
          node: {
            description,
            full_name: repoSlug,
            html_url: htmlRepoUrl,
            id: key,
            name,
            packageJson: {
              name: packageName,
              private: privatePackage
            }
          }
        }) =>
          <div className="card" key={key} style={{width: '20rem'}}>
            <div className="card-header">
              <a href={htmlRepoUrl}>{name}</a>
            </div>
            <div className="card-body">
              {/* <h4 className="card-title">{name}</h4> */}
              {/* <h6 className="card-subtitle mb-2 text-muted"></h6> */}
              <p className="card-text">{description}</p>
              {/* <a href="#" className="card-link"></a> */}
              {/* <a href="#" className="card-link"></a> */}

            </div>
            <div className="card-footer">
              {packageName && !privatePackage && <BadgeNPMDownloads packageName={packageName}/>}

            </div>
          </div>
        )
      }
    </div>
  </main>;

export default ProjectIndexPage;

export const query = graphql`
query ProjectIndexPage {
  allGitHubRepo {
    edges {
      node {
        description
        full_name
        html_url
        id
        name
        packageJson {
          name,
          private
        }
      }
    }
  }
}
`;
