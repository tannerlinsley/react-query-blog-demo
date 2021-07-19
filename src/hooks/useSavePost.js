import React from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'
import { queryClient } from '..'

export default function useSavePost() {
  return useMutation(
    (values) =>
      axios.patch(`/api/posts/${values.id}`, values).then((res) => res.data),
    {
      // if response of PATCH is same as the one we would get from fetching complete data for individual post
      // no need to make another GET request by invalidating the query
      // rather update the data in queryClient for that post with the response from PATCH request
      onSuccess: (data) => {
        queryClient.setQueriesData(['post', data.id], data)
      },
      // onSuccess: (data) => queryClient.invalidateQueries(['post', data.id]),
    }
  )
}
