import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import usePost from '../../hooks/usePost';
import useSavePost from '../../hooks/useSavePost';
import useDeletePost from '../../hooks/useDeletePost';
import PostForm from '../../components/post-form';
import { Loader } from '../../components/styled';

export default function AdminView() {
  const { query: { adminId }, push } = useRouter();

  const postQuery = usePost(adminId);
  const [savePost, savePostInfo] = useSavePost();
  const [deletePost, deletePostInfo] = useDeletePost();

  const onSubmit = async (values) => {
    await savePost(values);
    postQuery.fetch();
  };

  const onDelete = async () => {
    await deletePost(adminId);
    push('/admin'); 
  };

  return (
    <>
      {postQuery.isLoading ? (
        <span>
          <Loader /> Loading...
        </span>
      ) : (
        <div>
          <h3>{postQuery.data.title}</h3>
          <p>
            <Link href={{
                pathname: `/posts/[postId]`,
                query: { postId: postQuery.data.id },
              }}>View Post</Link>
          </p>
          <PostForm
            initialValues={postQuery.data}
            onSubmit={onSubmit}
            submitText={
              savePostInfo.isLoading
                ? 'Saving...'
                : savePostInfo.isError
                ? 'Error!'
                : savePostInfo.isSuccess
                ? 'Saved!'
                : 'Save Post'
            }
          />

          <p>
            <button onClick={onDelete}>
              {deletePostInfo.isLoading
                ? 'Deleting...'
                : deletePostInfo.isError
                ? 'Error!'
                : deletePostInfo.isSuccess
                ? 'Deleted!'
                : 'Delete Post'}
            </button>
          </p>
        </div>
      )}
    </>
  );
}
