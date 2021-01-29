import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { Colors } from '../../../shared/constants';

interface AboutProps {
  readonly darkMode: boolean;
}

export const CustomDiv = styled.div<AboutProps>`
  background-color: ${props => (props.darkMode ? Colors.Background : Colors.White)};

  padding-top: 12vh;
  height: 100vh;
`;

export const CustomDivText = styled(Grid)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    height: 100vh;
    width: 100%;

    @media (max-width: 959px) {
      height: 40vh;
    }
  }
`;

export const CustomImg = styled.img<AboutProps>`
  border-radius: 50%;
  border: 8px solid #00c7ff;
  border: ${props => (props.darkMode ? '8px solid #fff;' : '8px solid #72E0FE')};

  @media (max-width: 514px) {
    width: 150px;
    height: 150px;
  }
`;

export const CustomDivAboutMe = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 30px;
    width: 100%;

    @media (max-width: 959px) {
      height: 60vh;
    }
  }
`;

export const CustomTextAboutMe = styled(Typography)<AboutProps>`
  && {
    font-size: 18px;

    @media (max-width: 569px) {
      font-size: 14px;
    }
  }
`;

export const CustomTexAbout = styled(Typography)<AboutProps>`
  && {
    font-size: 32px;
    font-weight: bold;
    color: ${props => (props.darkMode ? Colors.White : Colors.Black)};
    margin-bottom: 15px;
  }
`;
