exports.onCreatePage = ({page, boundActionCreators: {createPage}}) => {
  if (page.path === '/') {
    page.layout = 'about';
    return createPage(page);
  }
  return Promise.resolve();
};
