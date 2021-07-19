import React from 'react'
import axios from 'axios'
import { useMutation } from 'react-query'
import { queryClient } from '..'

export default function useSavePost() {
  return useMutation(
    (values) =>
      axios.patch(`/api/posts/${values.id}`, values).then((res) => res.data),
    {
      // to reflec the changes in the UI immediately, without waiting for request to resolve
      onMutate: (newPostData) => {
        queryClient.setQueryData(['post', newPostData.id], newPostData)
      },
      // if response of PATCH is same as the one we would get from fetching complete data for individual post
      // no need to make another GET request by invalidating the query
      // rather update the data in queryClient for that post with the response from PATCH request
      onSuccess: (newPostData) => {
        queryClient.setQueriesData(['post', newPostData.id], newPostData)

        // if (queryClient.getQueryData('posts')) {
        //   queryClient.setQueryData('posts', (old) => {
        //     return old.map((post) =>
        //       post.id === newPostData.id ? newPostData : old
        //     )
        //   })
        // } else {
        //   queryClient.invalidateQueries('posts')
        // }
      },
      // onSuccess: (data) => queryClient.invalidateQueries(['post', data.id]),
    }
  )
}
