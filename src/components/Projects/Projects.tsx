import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Lottie from 'react-lottie';
import GithubAnimation from '../../assets/github.json';
import GithubLightAnimation from '../../assets/githubLight.json';
import { useDarkModeContext } from '../../shared/context/reducers/darkMode/darkModeContext';
import * as S from './styles';

export const Projects = () => {
  const { state: darkMode } = useDarkModeContext();

  const navigate = () => (window.location.href = 'https://github.com/Julio-Lost');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: darkMode.darkMode ? GithubAnimation : GithubLightAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <S.CustomDivCorpo>
        <S.CustomTextProjetos darkMode={darkMode.darkMode}>Projetos</S.CustomTextProjetos>
      </S.CustomDivCorpo>
      <S.CustomDivCorpo>
        <S.CustomCard darkMode={darkMode.darkMode} elevation={10} onClick={navigate}>
          <CardContent style={{ textAlign: 'center' }}>
            <S.CustomTextAcesso darkMode={darkMode.darkMode} color='inherit' paragraph>
              Acesse o meu repositorio para ver os projetos realizados por mim :)
            </S.CustomTextAcesso>
            <CardContent
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Lottie options={defaultOptions} height={200} width={200} />
            </CardContent>
          </CardContent>
        </S.CustomCard>
      </S.CustomDivCorpo>
    </S.CustomDiv>
  );
};

export default Projects;
