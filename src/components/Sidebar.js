import React from 'react'
import { Link } from 'react-router-dom'

import { SidebarStyles } from './styled'

export default function Sidebar() {
  return (
    <SidebarStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <hr />
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </SidebarStyles>
  )
}
