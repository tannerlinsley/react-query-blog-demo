import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../../src/components/layout';
import usePost from '../../src/hooks/usePost';
import { Loader } from '../../src/components/styled';

const Post: FC<{ postId?: string }> = () => {
  const { query } = useRouter();
  const postQuery = usePost(query.postId);

  if (postQuery.isError) return <Layout>{postQuery.error.message}</Layout>;

  return (
    <Layout>
      {postQuery.isLoading && (
        <span>
          <Loader /> Loading...
        </span>
      )}
      {postQuery.isSuccess && !postQuery.isLoading && (
        <div>
          <h2>{postQuery.data.title}</h2>
          <p>{postQuery.data.body}</p>
        </div>
      )}
    </Layout>
  );
};

export default Post;
