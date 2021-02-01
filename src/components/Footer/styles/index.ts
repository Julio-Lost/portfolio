import { Toolbar } from '@material-ui/core';
import styled, { css } from 'styled-components';
import { Colors } from '../../../shared/constants';

interface FooterProps {
  readonly darkMode: boolean;
}

export const CustomToolbar = styled(Toolbar)<FooterProps>`
  && {
    background-color: ${props =>
      props.darkMode
        ? css`
            ${Colors.Background}
          `
        : css`#56dafe`};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media (max-width: 550px) {
      justify-content: space-around;
    }
  }
`;

export const CustomToolbarText = styled.div`
  padding: 0px 12px;
`;
