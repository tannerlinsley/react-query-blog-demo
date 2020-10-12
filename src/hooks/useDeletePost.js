import axios from 'axios'
import { useMutation } from 'react-query'

import { queryCache } from '../'

export default function useDeletePost() {
  return useMutation(
    (postId) => axios.delete(`/api/posts/${postId}`).then((res) => res.data),
    {
      onError: (error, variables, rollback) => {
        rollback && rollback()
      },
      onSuccess: (data, postId) => {
        const previousPosts = queryCache.getQueryData('posts')

        const optimisticPosts = previousPosts.filter((d) => d.id !== postId)

        queryCache.setQueryData('posts', optimisticPosts)
        queryCache.invalidateQueries('posts')
      },
    }
  )
}
