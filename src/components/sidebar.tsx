import React, { FC } from 'react';
import Link from 'next/link';

import { SidebarStyles } from './styled';

const Sidebar: FC = () => (
  <SidebarStyles>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/exercises">
          <a>Exercises</a>
        </Link>
      </li>
      <hr />
      <li>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </li>
    </ul>
  </SidebarStyles>
);

export default Sidebar;
