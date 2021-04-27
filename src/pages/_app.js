import { Provider as AuthProvider } from 'next-auth/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import { theme } from '../styles/theme';
import { Provider as ReduxProvider } from 'react-redux';
import { useStore } from '../store';

import '../css/style.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <ReduxProvider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider session={pageProps.session}>
          <main>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </main>
        </AuthProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
