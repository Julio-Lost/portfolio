import CardContent from '@material-ui/core/CardContent';
import { DiCss3, DiHtml5, DiJsBadge, DiNodejs, DiReact } from 'react-icons/di';
import { SiDocker, SiDotNet, SiMicrosoftsqlserver, SiTypescript } from 'react-icons/si';
import { AjustarTextoDeExperiencia, IncrementarAnoDeExperiencia } from '../../shared/constants/functions';
import { useDarkModeContext } from '../../shared/context/reducers/darkMode/darkModeContext';
import * as S from './styles';

const expericencia1 = [
  {
    linguagem: 'HTML',
    icone: DiHtml5,
    anosExperiencia: 2018,
    cor: '#dd4b25',
  },
  {
    linguagem: 'JavaScript',
    icone: DiJsBadge,
    anosExperiencia: 2018,
    cor: '#f7e018',
  },
  {
    linguagem: 'TypeScript',
    icone: SiTypescript,
    anosExperiencia: 2020,
    cor: '#2f74c0',
  },
];

const expericencia2 = [
  {
    linguagem: 'CSS',
    icone: DiCss3,
    anosExperiencia: 2018,
    cor: '#254bdd',
  },
  {
    linguagem: 'React \n React Native',
    icone: DiReact,
    anosExperiencia: 2020,
    cor: '#5ed3f3',
  },
  {
    linguagem: 'NodeJs',
    icone: DiNodejs,
    anosExperiencia: 2020,
    cor: '#333333',
  },
];

const experiencia3 = [
  {
    linguagem: '.Net',
    icone: SiDotNet,
    anosExperiencia: 2020,
    cor: '#512bd4',
  },
  {
    linguagem: 'Docker',
    icone: SiDocker,
    anosExperiencia: 2020,
    cor: '#2391e6',
  },
  {
    linguagem: 'SQL',
    icone: SiMicrosoftsqlserver,
    anosExperiencia: 2020,
    cor: '#a4191c',
  },
];

export const Knowledge = () => {
  const { state: darkMode } = useDarkModeContext();

  return (
    <S.CustomDiv darkMode={darkMode.darkMode}>
      <S.CustomTextConhecimentos>
        <S.CustomTextConhecimentosCorpo darkMode={darkMode.darkMode}>Conhecimentos</S.CustomTextConhecimentosCorpo>
      </S.CustomTextConhecimentos>
      <S.CustomDivCorpo>
        <S.CustomDivCard>
          {expericencia1.map((item, index) => (
            <S.CustomCard key={index}>
              <CardContent style={{ textAlign: 'center' }}>
                <item.icone
                  style={{
                    fontSize: 50,
                    paddingBottom: 6,
                  }}
                  color={item.cor}
                />
                <S.CustomTextLinguagem>{item.linguagem}</S.CustomTextLinguagem>
                <S.CustomTextExperiencia color='inherit'>
                  {`${IncrementarAnoDeExperiencia(item.anosExperiencia)} ${AjustarTextoDeExperiencia(
                    item.anosExperiencia,
                  )}  de experiência`}
                </S.CustomTextExperiencia>
              </CardContent>
            </S.CustomCard>
          ))}
        </S.CustomDivCard>
        <S.CustomDivCard>
          {expericencia2.map((item, index) => (
            <S.CustomCard key={index}>
              <CardContent style={{ textAlign: 'center' }}>
                <item.icone
                  style={{
                    fontSize: 50,
                    paddingBottom: 6,
                  }}
                  color={item.cor}
                />
                <S.CustomTextLinguagem>{item.linguagem}</S.CustomTextLinguagem>
                <S.CustomTextExperiencia color='inherit'>
                  {`${IncrementarAnoDeExperiencia(item.anosExperiencia)} ${AjustarTextoDeExperiencia(
                    item.anosExperiencia,
                  )}  de experiência`}
                </S.CustomTextExperiencia>
              </CardContent>
            </S.CustomCard>
          ))}
        </S.CustomDivCard>
        <S.CustomDivCard className='rotate-center'>
          {experiencia3.map((item, index) => (
            <S.CustomCard key={index}>
              <CardContent style={{ textAlign: 'center' }}>
                <item.icone
                  style={{
                    fontSize: 50,
                    paddingBottom: 6,
                  }}
                  color={item.cor}
                />
                <S.CustomTextLinguagem>{item.linguagem}</S.CustomTextLinguagem>
                <S.CustomTextExperiencia color='inherit'>
                  {`${IncrementarAnoDeExperiencia(item.anosExperiencia)} ${AjustarTextoDeExperiencia(
                    item.anosExperiencia,
                  )}  de experiência`}
                </S.CustomTextExperiencia>
              </CardContent>
            </S.CustomCard>
          ))}
        </S.CustomDivCard>
      </S.CustomDivCorpo>
    </S.CustomDiv>
  );
};

export default Knowledge;
