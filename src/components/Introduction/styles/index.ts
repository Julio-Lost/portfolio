import { Button, Grid, Link, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../../shared/constants';

export const CustomDiv = styled.div<{ darkMode: boolean }>`
  background-color: ${props => (props.darkMode ? Colors.NewPurple : '#E3F9FF')};

  padding-top: 12vh;
  height: 100vh;
`;

export const CustomDivText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 959px) {
    align-items: center;
  }
`;

export const AnimationContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding-bottom: 4vh;

  @media (max-width: 959px) {
    height: 60vh;
  }
`;

export const ContainerText = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 959px) {
    height: 40vh;
  }
`;

export const ButtonLinkedin = styled(Button)`
  &.MuiButton-contained {
    margin-top: 8px;
    margin-bottom: 15px;
    text-transform: none;
    background-color: #33847c;

    &:hover {
      background-color: #50b9a6;
      text-transform: none;
    }
  }
`;

export const LinkLikedin = styled(Link)`
  &.MuiLink-underlineHover:hover {
    text-decoration: none;
  }
`;

export const CustomTextIntroduction = styled(Typography)`
  font-size: 28px;

  @media (max-width: 569px) {
    font-size: 23px;
  }
`;
