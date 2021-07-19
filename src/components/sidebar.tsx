import React, { FC } from 'react';
import Link from 'next/link';

import { SidebarStyles } from './styled';

const Sidebar: FC = () => (
  <SidebarStyles>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/posts">Blog</Link>
      </li>
      <hr />
      <li>
        <Link href="/admin">Admin</Link>
      </li>
    </ul>
  </SidebarStyles>
);

export default Sidebar;
