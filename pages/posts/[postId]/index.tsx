import React, { FC } from 'react';
import { Layout } from '../../../src/components/layout';
import { Post as PostTemplate } from '../../../src/screens/blog/post';

const Post: FC<{ postId: string }> = ({ postId }) => (
  <Layout>
    <PostTemplate postId={postId} />
  </Layout>
);

export default Post;

export async function getStaticProps({ params }) {
  console.log(params);
  return {
    postId: params.postId,
  };
}
