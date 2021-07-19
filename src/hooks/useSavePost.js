import React from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'
import { queryClient } from '..'

export default function useSavePost() {
  return useMutation(
    (values) =>
      axios.patch(`/api/posts/${values.id}`, values).then((res) => res.data),
    {
      onSuccess: (data) => queryClient.invalidateQueries(['post', data.id]),
    }
  )
}
