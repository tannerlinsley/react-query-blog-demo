import React, { FC } from 'react';

import { Wrapper, Content } from './components/styled';
import Sidebar from './components/sidebar';

import Admin from './screens/admin';
import AdminPost from './screens/admin/Post';
import Blog from './screens/blog';
import BlogPost from './screens/blog/post';

const SafeHydrate: FC = ({ children }) => (
  <div suppressHydrationWarning>
    {typeof document === 'undefined' ? null : children}
  </div>
);

const App: FC = () => (
  <SafeHydrate>
      <Wrapper>
        <Sidebar />
        <Content>
        </Content>
      </Wrapper>
  </SafeHydrate>
);

export default App;
