import React from 'react';
import { Loader } from './styled';

export default function GlobalLoader() {
  return (
    <Loader
      style={{
        opacity: 1,
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        fontSize: '1.5rem',
        transition: '0.3s ease',
      }}
    />
  );
}
