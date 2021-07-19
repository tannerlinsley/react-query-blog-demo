import React from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'
import { queryClient } from '..'

export default function useCreatePost() {
  return useMutation(
    (values) => axios.post('/api/posts', values).then((res) => res.data),
    {
      // to reflec the changes in the UI immediately, without waiting for request to resolve
      onMutate: (newPostData) => {
        queryClient.setQueryData('posts', (oldPost) => [
          ...oldPost,
          newPostData,
        ])
      },
      onSuccess: () => {
        queryClient.invalidateQueries('posts')
      },
    }
  )
}
