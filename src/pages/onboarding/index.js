import Link from 'next/link';

import ProgressBar from '../../components/ProgressBar';
import Button from '../../components/Button';
import styled from 'styled-components';

function Onboarding() {
  return (
    <Container>
      <h4>Welcome to onboarding</h4>
      <div>
        <h4>Let’s Get Started</h4>
        <p>
          First you need to provide personal information about you and your
          parking places.
        </p>
      </div>
      <Link href="/onboarding/add-personal-information">
        <a>
          <Button title="Continue" width="300px" />
        </a>
      </Link>
      <ProgressBar progress="900px" />
    </Container>
  );
}

export default Onboarding;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 100px;
  text-align: center;

  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 64px;
    letter-spacing: 0.5px;
    color: #f2f2f2;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.5px;
    color: #494848;
  }
`;
