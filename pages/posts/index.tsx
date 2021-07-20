import Link from 'next/link';
import React, { FC } from 'react';
import { Layout } from '../../src/components/layout';
import { Loader, PostStyles } from '../../src/components/styled';
import usePosts from '../../src/hooks/usePosts';

const BlogPosts: FC = () => {
  const postsQuery = usePosts();

  return (
    <Layout>
      <div>
        <h1>Blog</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: '1rem',
          }}
        >
          {postsQuery.isLoading && (
            <span>
              <Loader /> Loading...
            </span>
          )}
          {postsQuery.isError && postsQuery.error.message}
          {!postsQuery.isLoading &&
            !postsQuery.isError &&
            postsQuery.data.map((post) => (
              <Link
                href={{
                  pathname: `/posts/[postId]`,
                  query: { postId: post.id },
                }}
                key={post.id}
                passHref
              >
                <PostStyles>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </PostStyles>
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPosts;
