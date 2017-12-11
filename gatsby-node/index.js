const {createRepoNode, listRepos} = require('./github');

exports.onCreatePage = ({page, boundActionCreators: {createPage}}) => {
  if (page.path === '/') {
    page.layout = 'about';
    return createPage(page);
  }
  return Promise.resolve();
};

exports.sourceNodes = async({boundActionCreators: {createNode}}) => {
  const repos = await listRepos();

  for (const repo of repos) {
    await createRepoNode(createNode, repo);
  }
};
