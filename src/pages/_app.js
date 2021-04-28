import { Provider as AuthProvider } from 'next-auth/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyles';
import { theme } from '../styles/theme';
import { Provider as ReduxProvider } from 'react-redux';
import { useStore } from '../store';
import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import '../css/style.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const router = useRouter();
  return (
    <ReduxProvider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider session={pageProps.session}>
          <main>
            <Layout>
              <Transition location={router.pathname}>
                <Component {...pageProps} />
              </Transition>
            </Layout>
          </main>
        </AuthProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
