const crypto = require('crypto');

const base64url = require('base64url');
const debug = require('debug')('ianwremmel.com:gatsby-node:github');
const GitHubAPI = require('github');

const github = new GitHubAPI();
if (process.env.GH_TOKEN) {
  github.authenticate({
    token: process.env.GH_TOKEN,
    type: 'oauth'
  });
}
else {
  github.authenticate({type: 'netrc'});
}

/**
 * Use Gatsby's createNode to create github repository nodes
 * @param {Function} createNode
 * @param {Object} repo
 */
async function createRepoNode(createNode, repo) {
  createNode({
    ...repo,
    children: [],
    id: repo.full_name,
    internal: {
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(repo))
        .digest('hex'),
      type: 'GitHubRepo'
    },
    packageJson: await fetckPkg(repo.name),
    parent: '__SOURCE__'
  });
}

exports.createRepoNode = createRepoNode;

/**
 * Retrieves a repo's package.json
 * @param {string} name -
 * @returns {Promise} -
 */
async function fetckPkg(name) {
  let raw;
  try {
    debug(`Fetching package.json for github repo ${name}`);
    raw = await github.repos.getContent({
      owner: 'ianwremmel',
      path: 'package.json',
      repo: name
    });
    debug(`Fetched package.json for github repo ${name}`);

  }
  catch (err) {
    debug(`Could not fetch package.json for github repo ${name}`);
    debug(err);
    // not all repos will necessarily have package.json files
  }

  let pkg;
  if (raw) {
    try {
      debug(`removing line breaks in encoded package.json for github repo ${name}`);
      const b64 = raw.data.content.replace(/\n/g, '');
      debug(`base64-decoding package.json for github repo ${name}`);
      const context = base64url.decode(b64);
      debug(`JSON-decoding package.json for github repo ${name}`);
      pkg = JSON.parse(context);
      debug(`determined package to be ${pkg.name} for github repo ${name}`);
      debug('stripping the "release" property because it breaks gatsby');
      delete pkg.release;
      delete pkg['lint-staged'];
    }
    catch (err) {
      debug(`parse error decoding package.json for github repo ${name}`);
      console.error(err);
      throw err;
    }
  }

  return pkg;
}

exports.fetckPkg = fetckPkg;

/**
 * Lists all repos
 * @returns {Array}
 */
async function listRepos() {
  let {data: repos} = await github.repos.getAll({
    affiliation: 'owner',
    per_page: 100,
    visibility: 'public'
  });

  repos = repos.filter(({fork}) => !fork);

  return repos;
}

exports.listRepos = listRepos;
