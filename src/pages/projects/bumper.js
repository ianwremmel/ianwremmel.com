import React from 'react';
import Helmet from 'react-helmet';

const BumperTablePage = ({data}) => <main>
  <Helmet>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/10up-sanitize.css/5.0.0/sanitize.css" rel="stylesheet" />
  </Helmet>
  <table>
    <thead>
      <tr>
        <td>GitHub</td>
        <td>npm</td>
        <td>Greenkeeper</td>
        <td>Legal</td>
        {/* <td>Downloads</td>
        <td>Circle Ci</td>
        <td>Coverage</td>
        <td>Greenkeeper</td>
        <td>dependencies</td>
        <td>devDependencies</td>
        <td>peerDependencies</td>
        <td>License</td> */}
      </tr>
    </thead>
    <tbody>
      {data.allGitHubRepo.edges.map(({
        node: {
          description,
          full_name: repoSlug,
          html_url: htmlUrl,
          id: key,
          packageJson: {name: packageName, private: privatePackage}
        }
      }) => <tr key={key}>
        <td>
          <a href={htmlUrl}>{repoSlug}</a>
          <div>
            <img src={`https://img.shields.io/github/forks/${repoSlug}.svg?style=social&label=Fork`}/>
            <img src={`https://img.shields.io/github/stars/${repoSlug}.svg?style=social&label=Stars`}/>
            <img src={`https://img.shields.io/github/watchers/${repoSlug}.svg?style=social&label=Watchers`}/>
          </div>
        </td>
        <td>
          {packageName && !privatePackage && <div>
            <a href={`https://www.npmjs.com/package/${packageName}`}>{packageName}</a>
            <div>
              <a href={`https://www.npmjs.com/package/${packageName}`}>
                <img alt="npm" src={`https://img.shields.io/node/v/${packageName}.svg`}/>
              </a>
              <a href={`https://www.npmjs.com/package/${packageName}`}>
                <img alt="npm" src={`https://img.shields.io/npm/v/${packageName}.svg`}/>
              </a>
              <a href={`https://www.npmjs.com/package/${packageName}`}>
                <img alt="npm" src={`https://img.shields.io/npm/dw/${packageName}.svg`}/>
              </a>
            </div>
          </div>
          }
        </td>
        <td>
          {packageName && !privatePackage && <div>
            <a href={'https://greenkeeper.io/'}>
              <img alt="Greenkeeper badge" src={`https://badges.greenkeeper.io/${repoSlug}.svg`}/>
            </a>
            <div>
              <img alt="Greenkeeper Issues" src={`https://img.shields.io/github/issues/${repoSlug}/greenkeeper.svg?label=Issues`}/>
              <img alt="Greenkeeper PRs" src={`https://img.shields.io/github/issues-pr/${repoSlug}/greenkeeper.svg?label=PRs`}/>
            </div>
          </div>}
        </td>
        <td>
          <a href={`https://github.com/${repoSlug}/blob/master/LICENSE`}>
            <img alt="license" src={`https://img.shields.io/github/license/${repoSlug}.svg`}/>
          </a>
          <br/>
          <a href={`https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%${repoSlug.replace('/', '%2F')}?ref=badge_large`}>
            <img alt="FOSSA Status" src={`https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2F${repoSlug.replace('/', '%2F')}.svg?type=shield`}/>
          </a>
        </td>


        {/* <td>{description}</td>
        <td>
          <a href={`https://circleci.com/gh/${repoSlug}`}>
            <img alt="CircleCI" src={`https://circleci.com/gh/${full_name}.svg?style=svg`}/>
          </a>
        </td>
        <td>
          <a href={`https://coveralls.io/github/${repoSlug}?branch=master`}>
            <img alt="Coverage Status" src={`https://coveralls.io/repos/github/${full_name}/badge.svg?branch=master`}/>
          </a>
        </td>

        <td>
          <a href={`https://david-dm.org/${repoSlug}`}>
            <img alt="dependencies Status" src={`https://david-dm.org/${full_name}/status.svg`}/>
          </a>
        </td>
        <td>
          <a href={`https://david-dm.org/${repoSlug}?type=dev`}>
            <img alt="devDependencies Status" src={`https://david-dm.org/${full_name}/dev-status.svg`}/>
          </a>
        </td>
        <td>
          <a href={`https://david-dm.org/${repoSlug}?type=peer`}>
            <img alt="peerDependencies Status" src={`https://david-dm.org/${full_name}/peer-status.svg`}/>
          </a>
        </td>
        <td>
          <a href={`https://github.com/${repoSlug}/blob/master/LICENSE`}>
            <img alt="license" src={`https://img.shields.io/github/license/${full_name}.svg`}/>
          </a>
        </td>
        <td> */}
        {/* <img src={`https://img.shields.io/github/forks/${full_name}.svg?style=social&label=Fork`}/>
          <img src={`https://img.shields.io/github/stars/${full_name}.svg?style=social&label=Fork`}/>
          <img src={`https://img.shields.io/github/watchers/${full_name}.svg?style=social&label=Fork`}/>
          <img src={`https://img.shields.io/github/followers/${full_name}.svg?style=social&label=Fork`}/>


          <img src={`https://img.shields.io/codeclimate/github/${full_name}.svg`}/>
          <img src={`https://img.shields.io/codeclimate/coverage/github/${full_name}.svg`}/>
          <img src={`https://img.shields.io/codeclimate/issues/github/${full_name}.svg`}/>
          <img src={`https://img.shields.io/codeclimate/maintainability/${full_name}.svg`}/>
          <img src={`https://img.shields.io/codeclimate/c/${full_name}.svg`}/>

          <img src={`https://img.shields.io/github/issues/${full_name}.svg`}/>
          <img src={`https://img.shields.io/github/issues-pr/${full_name}.svg`}/>

          <img src={`https://img.shields.io/github/contributors/${full_name}.svg`}/>
          <img src={`https://img.shields.io/github/languages/top/${full_name}.svg`}/> */}
        {/* </td> */}

        {/* [![npm version](https://badge.fury.io/js/%40ianwremmel%2Fexception.svg)](https://badge.fury.io/js/%40ianwremmel%2Fexception) */}
      </tr>
      )}
    </tbody>
  </table>
</main>;

export default BumperTablePage;

export const query = graphql`
query BumperTablePage {
  allGitHubRepo {
    edges {
      node {
        description
        full_name
        html_url
        id
        name
        packageJson {
          name
          private
        }
      }
    }
  }
}
`;
