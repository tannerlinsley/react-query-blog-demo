import React from 'react'
import { useIsFetching } from 'react-query'
import { Loader } from './styled'

export default function GlobalLoader() {
  const isFetching = useIsFetching()

  return (
    <Loader
      css={`
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        font-size: 1.5rem;
        transition: 0.3s ease;
      `}
      style={{
        opacity: isFetching ? 1 : 0,
      }}
    />
  )
}
