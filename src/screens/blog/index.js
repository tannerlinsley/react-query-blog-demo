import React from 'react';
import Link from 'next/link';

import usePosts from '../../hooks/usePosts';
import { PostStyles } from '../../components/styled';

export default function Home() {
  const postsQuery = usePosts();

  return (
    <div>
      <h1>Blog</h1>

      <div
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 1rem;
        `}
      >
        {postsQuery.isLoading && <span>Loading...</span>}
        {postsQuery.isError && postsQuery.error.message}
        {!postsQuery.isLoading &&
          !postsQuery.isError &&
          postsQuery.data.map((post) => (
            <Link
              href={{
                pathname: `/post/[postId]`,
                query: { postId: post.id },
              }}
              key={post.id}
            >
              <PostStyles>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </PostStyles>
            </Link>
          ))}
      </div>
    </div>
  );
}
