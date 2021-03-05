import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import UsersList from 'components/organisms/UsersList/UsersList';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Root.styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
