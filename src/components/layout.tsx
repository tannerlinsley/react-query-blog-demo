import React, { FC } from 'react';
import Sidebar from './sidebar';
import { Wrapper, Content } from './styled';

export const Layout: FC = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <Content>{children}</Content>
  </Wrapper>
);
