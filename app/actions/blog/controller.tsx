import {createController} from 'remix/router';

import type {IndexPagePostFragment} from '../../../__generated__/graphql.ts';
import {listPosts, getPost} from '../../data/contentful.server.ts';
import {render as renderMarkdown} from '../../data/markdown.server.ts';
import {routes} from '../../routes.ts';
import {BlogIndexPage} from '../../ui/blog-index-page.tsx';
import {BlogPostPage} from '../../ui/blog-post-page.tsx';

export default createController(routes.blog, {
  actions: {
    async index(context) {
      const posts = (await listPosts()) ?? [];

      const postsWithRenderedDescriptions = await Promise.all(
        posts.map(async (post) => {
          const description =
            post?.description && (await renderMarkdown(post.description));
          return {...post, description} as IndexPagePostFragment;
        })
      );

      return context.render(
        <BlogIndexPage posts={postsWithRenderedDescriptions} />
      );
    },

    async show(context) {
      const {slug} = context.params;

      const post = await getPost({slug});
      if (post === null) {
        return new Response('No post for that slug', {status: 404});
      }

      const body = post.body && (await renderMarkdown(post.body));

      return context.render(
        <BlogPostPage post={{...post, body: body || ''}} />
      );
    }
  }
});
