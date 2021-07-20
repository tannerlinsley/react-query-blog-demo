import React, { FC } from 'react';
import { Layout } from '../src/components/layout';

const Home: FC = () => (
  <Layout>
    <section>
      <h1>Welcome!</h1>

      <div>
        This is the React Query workshop. Today we are going to convert this
        application from one that is using basic REST api handling to use React
        Query
      </div>

      <div>To kick this off please click through to the </div>
    </section>
  </Layout>
);

export default Home;
