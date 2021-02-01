import styled, { css, keyframes } from 'styled-components';
import { Colors } from '../../../shared/constants';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

interface KnowledgeProps {
  readonly darkMode: boolean;
}

const rotateCenter = keyframes`
  0% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-transform: translateZ(50px);
            transform: translateZ(50px);
    -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
            box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35);
  }
`;

export const CustomDiv = styled.div<KnowledgeProps>`
  background-color: ${props =>
    props.darkMode
      ? css`
          ${Colors.Selection}
        `
      : css`#E3F9FF`};
  padding-top: 12vh;
  height: auto;
  padding-bottom: 24px;
  > p {
    cursor: pointer;
  }
`;

export const CustomCard = styled(Card)`
  && {
    margin: 8px;
    min-height: 150px;
    min-width: 150px;
    max-height: 150px;
    background-color: ${Colors.White};

    &:hover {
      cursor: pointer;
      animation: ${rotateCenter} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
  }
`;

export const CustomDivCard = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 514px) {
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
`;

export const CustomTextLinguagem = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.Black};
    white-space: pre-line;
  }
`;

export const CustomTextExperiencia = styled(Typography)`
  && {
    font-size: 12px;
    color: ${Colors.Black};
    font-family: fantasy;
  }
`;

export const CustomTextConhecimentos = styled(Typography)`
  display: flex;
  align-items: center;
  padding: 30px;
  flex-direction: column;
`;

export const CustomTextConhecimentosCorpo = styled(Typography)<KnowledgeProps>`
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
    font-family: sans-serif;
  }
`;

export const CustomDivCorpo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
