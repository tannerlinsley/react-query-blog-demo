module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: process.env.NODE_ENV !== 'production',
        minify: process.env.NODE_ENV === 'production',
        pure: true,
      },
    ],
  ],
};
