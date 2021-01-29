import { DarkModeProvider } from '../shared/context/reducers/darkMode/darkModeContext';

import App from '../components/App/App';
import { GlobalStyles } from 'shared/mainContainer';

export default function Home() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <App />
    </DarkModeProvider>
  );
}
