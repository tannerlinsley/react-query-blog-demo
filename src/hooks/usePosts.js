import axios from 'axios'
import { useQuery } from 'react-query'

import { queryCache } from '../'

const fetchPosts = () => axios.get('/api/posts').then((res) => res.data)

export const prefetchPost = (postId) => {
  queryCache.prefetchQuery(['posts', String(postId)], fetchPosts, {
    staleTime: 5000,
  })
}

export default function usePosts() {
  return useQuery('posts', fetchPosts)
}
