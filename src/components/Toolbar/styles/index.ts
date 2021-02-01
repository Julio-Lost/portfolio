import { Toolbar, Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { Colors } from '../../../shared/constants';

interface ToolbarProps {
  readonly darkMode: boolean;
}

export const CustomToolbar = styled(Toolbar)<ToolbarProps>`
  background-color: ${props =>
    props.darkMode
      ? css`
          ${Colors.Background}
        `
      : css`
          ${Colors.White}
        `};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.1);
  height: 12vh;
  display: flex;
  justify-content: space-between;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CustomTypography = styled(Typography)<ToolbarProps>`
  && {
    flex-grow: 1;
    display: none;
    font-size: 16px;
    font-weight: bold;
    color: ${props =>
      props.darkMode
        ? css`
            ${Colors.White}
          `
        : css`
            ${Colors.Black}
          `};
    cursor: pointer;

    @media (min-width: 600px) {
      display: block;
    }
  }
`;

export const CustomToolbarText = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 0px;
  width: 100%;

  @media (min-width: 600px) {
    margin-left: 12px;
    width: auto;
  }
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
`;
