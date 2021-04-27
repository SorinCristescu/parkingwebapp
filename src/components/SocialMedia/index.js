import Link from 'next/link';

import { Container } from './style';

function SocialMedia() {
  return (
    <Container>
      <Link href="/">
        <a>
          <img src="/icons/facebook.svg" alt="facebook icon" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <img src="/icons/instagram.svg" alt="instagram icon" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <img src="/icons/twitter.svg" alt="twitter icon" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <img src="/icons/linkedin.svg" alt="linkdin icon" />
        </a>
      </Link>
    </Container>
  );
}

export default SocialMedia;
