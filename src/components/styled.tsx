import React, { FC } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ImSpinner2 } from 'react-icons/im';
import { IconBaseProps } from 'react-icons';

export const Wrapper = styled.div`
  display: flex;
  height: 96vh;
`;

export const SidebarStyles = styled.div`
  width: 175px;
  border-right: 1px solid black;
  padding: 1rem;
`;

export const Content = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const PostStyles = styled.a`
  display: inline-block;
  border: solid 1px rgba(130, 130, 130, 0.3);
  padding: 1rem;
  color: inherit;

  :hover {
    text-decoration: none;
    h3 {
      text-decoration: underline;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(ImSpinner2)`
  vertical-align: middle;
  animation: ${css`
    ${rotate} 1s linear infinite
  `};
`;

export const Loader: FC<IconBaseProps> = (props) => <Spinner {...props} />;
