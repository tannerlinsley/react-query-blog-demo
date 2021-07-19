import React from 'react'
import { Link, useParams, useHistory } from 'next/link'

//

import usePost from '../../hooks/usePost'
import useSavePost from '../../hooks/useSavePost'
import useDeletePost from '../../hooks/useDeletePost'

import PostForm from '../../components/post-form'
import { Loader } from '../../components/styled'

export default function Post() {
  const { postId } = useParams()
  const { push } = useHistory()

  const postQuery = usePost(postId)
  const [savePost, savePostInfo] = useSavePost()
  const [deletePost, deletePostInfo] = useDeletePost()

  const onSubmit = async (values) => {
    await savePost(values)
    postQuery.fetch()
  }

  const onDelete = async () => {
    await deletePost(postId)
    push('/admin')
  }

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
            <Link to={`/blog/${postQuery.data.id}`}>View Post</Link>
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
  )
}
