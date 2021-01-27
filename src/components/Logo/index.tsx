import { WithTheme } from 'models/interfaces';
import styled from 'styled-components';

interface LogoProps extends WithTheme {
  dark: boolean;
}

export const Logo = styled.img<LogoProps>`
  width: 40vw;
  max-width: 100px;
  content: url(${({ dark, theme }: LogoProps) => (dark ? theme.logo.dark : theme.logo.light)});
`;
