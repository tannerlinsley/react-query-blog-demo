import React from 'react';
import { Layout } from '../../src/components/layout';
import AdminView from '../../src/screens/admin/Post';

const Post = () => (
    <Layout>
        <AdminView />
    </Layout>
);

export default Post;

export async function getServerSideProps() {
    return {
      props: {}, // will be passed to the page component as props
    };
  }

