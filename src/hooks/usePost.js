import React from 'react'
import axios from 'axios'

export const fetchPost = (postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data)

export default function usePost(postId) {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  })

  const fetch = React.useCallback(async () => {
    setState({ isLoading: true })
    try {
      const data = await fetchPost(postId)
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, [postId])

  React.useEffect(() => {
    fetch()
  }, [fetch])

  return {
    ...state,
    fetch,
  }
}
