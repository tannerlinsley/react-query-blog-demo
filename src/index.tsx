import React, { FC } from 'react'

import { Wrapper, Content } from './components/styled'
import Sidebar from './components/sidebar'

import Admin from './screens/admin'
import AdminPost from './screens/admin/Post'
import Blog from './screens/blog'
import BlogPost from './screens/blog/post'

const SafeHydrate: FC = ({ children }) => (
  <div suppressHydrationWarning>
    {typeof document === 'undefined' ? null : children}
  </div>
)

const App: FC = () => (
  <SafeHydrate>
      <Wrapper>
        <Sidebar />
        <Content>
          <Switch>
            <Route path="/">
              <>
                <h1>Welcome!</h1>
              </>
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/admin/:postId">
              <AdminPost />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/blog/:postId">
              <BlogPost />
            </Route>
          </Switch>
        </Content>
      </Wrapper>
    </BrowserRouter>
  </SafeHydrate>
)

export default App
