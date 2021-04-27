import Link from 'next/link';

import { Container } from './style';

function DownloadApp() {
  return (
    <Container>
      <div className="btn">
        <Link href="/">
          <a>
            <div className="link-container">
              <img src="/icons/apple-store.svg" alt="apple store icon" />
              <div className="title-container">
                <p className="title">Download on the</p>
                <p className="title-store">App Store</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="btn">
        <Link href="/">
          <a>
            <div className="link-container">
              <img src="/icons/google-play.svg" alt="google play icon" />
              <div className="title-container">
                <p className="title uppercase">Get in on</p>
                <p className="title-store">Google Play</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </Container>
  );
}

export default DownloadApp;
