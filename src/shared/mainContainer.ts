import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html,
  body,
  div#__next {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
   
  }
`;
