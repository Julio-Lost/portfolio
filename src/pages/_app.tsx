import Head from 'next/head';
import { AppProps } from 'next/app';

// import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Julio Cesar de Medeiros - Software Developer</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='apple-touch-icon' href='/img/icon-512.png' />
        <link rel='manifest' href='/manifest.json' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800&display=swap' rel='stylesheet' />
        <meta
          name='description'
          content='portfolio Julio Cesar de Medeiros, Desenvolvedor, Programador, Software Developer, Developer, Software Engineer'
        />
        <meta
          name='description'
          content='Julio Cesar de Medeiros, TypeScript, JavaScript, React, React Native, .NET, dotnet, C#, Node, NodeJS, Docker, CI/CD, Azure, Linux'
        />
        <meta name='description' content="Hey, that's my website. Be free to come and see my experiences and open source projects." />
        <meta name='title' content='Felipe - Software Developer' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
