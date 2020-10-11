import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//

import { Wrapper, Main } from './components/styled'
import Sidebar from './components/Sidebar'

import Admin from './screens/admin'
import AdminPost from './screens/admin/Post'
import Blog from './screens/blog'
import BlogPost from './screens/blog/Post'

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof document === 'undefined' ? null : children}
    </div>
  )
}

export default function App() {
  return (
    <SafeHydrate>
      <BrowserRouter>
        <Wrapper>
          <Sidebar />
          <Main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1>Welcome!</h1>
                  </>
                }
              />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/:postId" element={<AdminPost />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
            </Routes>
          </Main>
        </Wrapper>
      </BrowserRouter>
    </SafeHydrate>
  )
}
