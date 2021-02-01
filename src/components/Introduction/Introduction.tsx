import Grid from '@material-ui/core/Grid';
import Lottie from 'react-lottie';
import IntroAnimation from '../../assets/intro.json';
import { useDarkModeContext } from '../../shared/context/reducers/darkMode/darkModeContext';
import * as S from './styles';

export const Introduction = () => {
  const { state: darkMode } = useDarkModeContext();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: IntroAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <Grid container>
        <S.ContainerText item md={6} lg={6}>
          <S.CustomDivText>
            <S.CustomText darkMode={darkMode.darkMode} color='inherit'>
              Olá, eu sou
            </S.CustomText>
            <S.CustomTextIntroduction darkMode={darkMode.darkMode} color='inherit'>
              Julio Cesar de Medeiros.
            </S.CustomTextIntroduction>
            <S.CustomText darkMode={darkMode.darkMode} color='inherit'>
              Desenvolvedor Full Stack
            </S.CustomText>
            <S.LinkLikedin variant='subtitle1' href='https://www.linkedin.com/in/julio-cesar-de-medeiros/'>
              <S.ButtonLinkedin variant='contained'>
                <S.CustomTextInLinkedin color='inherit'>In</S.CustomTextInLinkedin>
                <S.CustomTextLinkedin color='inherit'>Linkedin</S.CustomTextLinkedin>
              </S.ButtonLinkedin>
            </S.LinkLikedin>
          </S.CustomDivText>
        </S.ContainerText>
        <S.AnimationContainer item md={6} lg={6}>
          <Lottie options={defaultOptions} height={400} width={400} />
        </S.AnimationContainer>
      </Grid>
    </S.CustomDiv>
  );
};

export default Introduction;
