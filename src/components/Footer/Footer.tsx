import AppBar from '@material-ui/core/AppBar';
import * as S from './styles';
import { Colors } from '../../shared/constants';
import { useDarkModeContext } from '../../shared/context/reducers/darkMode/darkModeContext';

import Link from '@material-ui/core/Link';
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FaTelegram } from 'react-icons/fa';
import { VscGithub } from 'react-icons/vsc';
import { GrMail } from 'react-icons/gr';
import { Contacts } from 'shared/constants/contatos';

export const Footer = () => {
  const { state: darkMode } = useDarkModeContext();

  return (
    <AppBar position='static'>
      <S.CustomToolbar darkMode={darkMode.darkMode}>
        <S.CustomToolbarText>
          <Link href={Contacts.Github}>
            <VscGithub
              style={{
                fontSize: 24,
                cursor: 'pointer',
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
        <S.CustomToolbarText>
          <Link href={Contacts.Linkedin}>
            <AiFillLinkedin
              style={{
                fontSize: 24,
                cursor: 'pointer',
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
        <S.CustomToolbarText>
          <Link href={Contacts.Intragram}>
            <AiFillInstagram
              style={{
                fontSize: 24,
                cursor: 'pointer',
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
        <S.CustomToolbarText>
          <Link href={Contacts.Email}>
            <GrMail
              style={{
                fontSize: 24,
                cursor: 'pointer',
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
        <S.CustomToolbarText>
          <Link href={Contacts.Telegram}>
            <FaTelegram
              style={{
                fontSize: 24,
                cursor: 'pointer',
              }}
              color={Colors.White}
            />
          </Link>
        </S.CustomToolbarText>
      </S.CustomToolbar>
    </AppBar>
  );
};

export default Footer;
