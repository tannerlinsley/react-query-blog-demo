import axios from 'axios'
import { useMutation } from 'react-query'

import { queryCache } from '../'

export default function useSavePost() {
  return useMutation(
    (values) =>
      axios.patch(`/api/posts/${values.id}`, values).then((res) => res.data),
    {
      onMutate: (values) => {
        queryCache.cancelQueries('posts')

        const oldPost = queryCache.getQueryData(['posts', values.id])

        queryCache.setQueryData(['posts', values.id], values)

        return () => queryCache.setQueryData(['posts', values.id], oldPost)
      },
      onError: (error, values, rollback) => rollback(),
      onSuccess: (data, variables) => {
        queryCache.invalidateQueries('posts')
        queryCache.invalidateQueries(['posts', variables.id])
      },
    }
  )
}
