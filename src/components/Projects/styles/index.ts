import styled, { css } from 'styled-components';
import { Colors } from '../../../shared/constants';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
interface ProjectsProps {
  readonly darkMode: boolean;
}

export const CustomDiv = styled.div<ProjectsProps>`
  background-color: ${props =>
    props.darkMode
      ? css`
          ${Colors.CurrentLine}
        `
      : css`#E3F9FF`};
  padding-top: 12vh;
  height: 100vh;
`;

export const CustomCard = styled(Card)<ProjectsProps>`
  && {
    max-width: 300;
    max-height: 500;
    cursor: pointer;
    padding-top: 30px;
    background-color: ${props =>
      props.darkMode
        ? css`
            ${Colors.Background}
          `
        : css`
            ${Colors.White}
          `};
  }
`;

export const CustomDivCorpo = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const CustomTextAcesso = styled(Typography)<ProjectsProps>`
  && {
    font-size: 16px;
    color: ${props =>
      props.darkMode
        ? css`
            ${Colors.White}
          `
        : css`
            ${Colors.Black}
          `};
    font-weight: 700px;
  }
`;

export const CustomTextProjetos = styled(Typography)<ProjectsProps>`
  && {
    font-size: 32px;
    font-weight: bold;
    color: ${props =>
      props.darkMode
        ? css`
            ${Colors.White}
          `
        : css`
            ${Colors.Black}
          `};
    padding: 8px;
  }
`;
