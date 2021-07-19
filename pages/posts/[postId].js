import React from 'react';
import { Layout } from '../../src/components/layout';
import { Post as PostTemplate } from '../../src/screens/blog/Post';

const Post = ({ postId }) => (
    <Layout>
        <PostTemplate postId={postId} />
    </Layout>
);

export default Post;

export async function getServerSideProps(context) {
    return {
      props: {postId: context.params.postId}, // will be passed to the page component as props
    };
  }

