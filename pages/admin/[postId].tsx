import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Layout } from '../../src/components/layout';
import usePost from '../../src/hooks/usePost';
import useSavePost from '../../src/hooks/useSavePost';
import useDeletePost from '../../src/hooks/useDeletePost';
import { Loader } from '../../src/components/styled';
import { PostForm } from '../../src/components/post-form';

const AdminPost: FC<{ postId?: string }> = () => {
  const { query, push } = useRouter();

  const postQuery = usePost(query.postId);
  const [savePost, savePostInfo] = useSavePost();
  const [deletePost, deletePostInfo] = useDeletePost();

  const onSubmit = async (values) => {
    await savePost(values);
    postQuery.fetch();
  };

  const getSubmitButtonText = () => {
    if (savePostInfo.isLoading) return 'Saving...';
    if (savePostInfo.isError) return 'Error!';
    if (savePostInfo.isSuccess) return 'Saved!';

    return 'Save Post';
  };

  const getDeleteButtonText = () => {
    if (deletePostInfo.isLoading) return 'Deleting...';
    if (deletePostInfo.isError) return 'Error!';
    if (deletePostInfo.isSuccess) return 'Deleted!';

    return 'Delete Post';
  };

  const onDelete = async () => {
    await deletePost(query.postId);
    push('/admin');
  };

  return (
    <Layout>
      {postQuery.isLoading && (
        <span>
          <Loader /> Loading...
        </span>
      )}
      {postQuery.isSuccess && !postQuery.isLoading && (
        <div>
          <h3>{postQuery.data.title}</h3>
          <p>
            <Link
              href={{
                pathname: `/posts/[postId]`,
                query: { postId: postQuery.data.id },
              }}
            >
              <a>View Post</a>
            </Link>
          </p>
          <PostForm
            loading={postQuery.isLoading}
            initialValues={postQuery.data}
            onSubmit={onSubmit}
            submitText={getSubmitButtonText()}
          />

          <p>
            <button onClick={onDelete}>{getDeleteButtonText()}</button>
          </p>
        </div>
      )}
    </Layout>
  );
};

export default AdminPost;

export async function getServerSideProps() {
    return {
      props: {}, // will be passed to the page component as props
    };
  }

