import axios from 'axios'
import { useQuery } from 'react-query'

import { queryCache } from '../'

export const fetchPost = (_, postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data)

export const prefetchPost = (postId) => {
  queryCache.prefetchQuery(['posts', String(postId)], fetchPost, {
    staleTime: 5000,
  })
}

export default function usePost(postId) {
  return useQuery(['posts', postId], fetchPost, {
    placeholderData: () =>
      queryCache.getQueryData('posts')?.find((d) => d.id == postId),
    staleTime: 2000,
  })
}
