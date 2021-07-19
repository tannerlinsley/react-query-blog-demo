import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { queryClient } from '..'

export const fetchPost = (postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data)

export default function usePost(postId) {
  // notice the use of query key, it is passed a list of keys that combined makes unique key
  // if only only keyword was used data from one post would be replaced by another
  // this way each key being different for each post won't replace other post data
  return useQuery(['post', postId], () => fetchPost(postId), {
    initialData: () => {
      return queryClient.getQueryData('posts')?.find((d) => d.id == postId)
    },
  })
}
