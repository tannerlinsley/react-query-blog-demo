import React from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'
import { queryClient } from '..'

export default function useCreatePost() {
  return useMutation(
    (values) => axios.post('/api/posts', values).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts')
      },
    }
  )
}
