import Paper from '@material-ui/core/Paper';
import About from 'components/About/About';
import Footer from 'components/Footer/Footer';
import Introduction from 'components/Introduction/Introduction';
import Knowledge from 'components/Knowledge/Knowledge';
import Projects from 'components/Projects/Projects';
import Toolbar from 'components/Toolbar/ToolBar';
import React from 'react';
import { useEffect, useRef, Suspense } from 'react';
import { BuscarEstadoDarkOuLight, salvarEstadoDarkOuLight } from '../../shared/constants/functions';
import { useDarkModeContext } from '../../shared/context/reducers/darkMode/darkModeContext';
import { DarkModeActions } from '../../shared/context/types/darkMode.types';
import * as S from './styles';

const App = () => {
  const { dispatch, actions } = useDarkModeContext();
  const introductionRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const knowledgeRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const handleLightMode = () => {
    salvarEstadoDarkOuLight(true);
    dispatch({ type: actions.DARK_MODE, payload: true });
  };

  const handleDarkMode = () => {
    salvarEstadoDarkOuLight(false);
    dispatch({ type: DarkModeActions.LIGHT_MODE });
  };

  useEffect(() => {
    const darkMode = BuscarEstadoDarkOuLight();

    if (darkMode) {
      dispatch({ type: actions.DARK_MODE, payload: true });
    } else {
      dispatch({ type: DarkModeActions.LIGHT_MODE });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScrollToIntroductionRef = () => {
    introductionRef.current!.scrollIntoView();
  };

  const handleScrollToAbouRef = () => {
    aboutRef.current!.scrollIntoView();
  };

  const handleScrollToProjectsRef = () => {
    projectsRef.current!.scrollIntoView();
  };

  const handleScrollToKnowLedgeRef = () => {
    knowledgeRef.current!.scrollIntoView();
  };

  const handleScrollToFooterRef = () => {
    footerRef.current!.scrollIntoView();
  };

  return (
    <S.MainContainer>
      <Toolbar
        handleLightMode={handleLightMode}
        handleDarkMode={handleDarkMode}
        handleScrollIntroduction={handleScrollToIntroductionRef}
        handleScrollAbout={handleScrollToAbouRef}
        handleScrollProjects={handleScrollToProjectsRef}
        handleScrollKnowLedge={handleScrollToKnowLedgeRef}
        handleScrollFooter={handleScrollToFooterRef}
      />
      <Paper>
        <div ref={introductionRef}>
          <Introduction />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={knowledgeRef}>
          <Knowledge />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </Paper>
    </S.MainContainer>
  );
};

export default App;
