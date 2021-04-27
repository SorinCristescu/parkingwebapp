import Header from '../Header';
import Footer from '../Footer';
import { Container } from './style';
function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default Layout;
