import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startClock } from '../store/places/actions';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import styled from 'styled-components';
import Counter from '../components/Counter';
import Clock from '../components/Clock';
import Button from '../components/Button';

const Bookings = () => {
  const [session, loading] = useSession();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(startClock());
  // }, [dispatch]);

  return (
    <>
      <Head>
        <title>ShareParking - Bookings</title>
      </Head>
      {/* <div>
        <h1>Bookings page</h1>
        <Counter />
        <Clock />
      </div> */}
      <Section>
        <div className="left-container">
          <svg
            width="315"
            height="315"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.123343 21.5746C0.105424 21.7626 0.19563 21.9446 0.356143 22.0441L3.33778 23.908C3.49013 24.0036 3.68202 24.0101 3.84054 23.9252L7.9999 21.6863L12.1612 23.9258C12.3191 24.0097 12.5097 24.003 12.6612 23.9082L15.6433 22.0445C15.8035 21.9445 15.8937 21.7627 15.8764 21.5746C15.8592 21.3865 15.7374 21.2242 15.5616 21.1551L11.7576 19.6593L13.9854 18.4621C14.1609 18.3674 14.2634 18.1775 14.2463 17.9788C14.2292 17.7801 14.0956 17.6105 13.9065 17.5473L11.7608 16.832C11.6496 16.7948 11.5289 16.798 11.4198 16.841L9.7211 17.509L10.6265 16H13.9999C14.8832 15.9991 15.599 15.2833 15.5999 14.4V1.6C15.599 0.7167 14.8832 0.00085996 13.9999 0H1.9999C1.1166 0.00085996 0.400763 0.7167 0.399903 1.6V14.4C0.400763 15.2833 1.1166 15.9991 1.9999 16H5.37334L6.27874 17.509L4.58194 16.8418C4.47235 16.7982 4.35088 16.7947 4.23898 16.832L2.09326 17.5473C1.9041 17.6105 1.77056 17.7801 1.75342 17.9788C1.73628 18.1775 1.8388 18.3674 2.01434 18.4621L4.2421 19.6593L0.438583 21.1551C0.262308 21.2236 0.140146 21.3862 0.123343 21.5746V21.5746ZM5.5999 15.2H1.9999C1.55832 15.1994 1.2005 14.8416 1.1999 14.4V1.6C1.2005 1.15842 1.55832 0.800595 1.9999 0.8H13.9999C14.4415 0.800595 14.7993 1.15842 14.7999 1.6V14.4C14.7993 14.8416 14.4415 15.1994 13.9999 15.2H10.3999C10.2594 15.2 10.1292 15.2737 10.0569 15.3942L7.9999 18.8226L5.94286 15.3942C5.87057 15.2737 5.74039 15.2 5.5999 15.2ZM5.13742 20.1672C5.3186 20.0958 5.44191 19.9258 5.45347 19.7314C5.46504 19.5371 5.36275 19.3536 5.1913 19.2613L3.00538 18.0863L4.38818 17.6254L6.9539 18.6342L7.57138 19.6633C7.66182 19.8138 7.8246 19.9059 8.00022 19.9058C8.17583 19.9057 8.33853 19.8135 8.42882 19.6629L9.04606 18.6341L11.6112 17.6254L12.9944 18.0863L10.8073 19.2621C10.6363 19.3547 10.5344 19.5381 10.5462 19.7322C10.558 19.9264 10.6814 20.096 10.8624 20.1672L14.7144 21.6816L12.3847 23.1379L8.23898 20.9062C8.09093 20.8248 7.91163 20.8244 7.76318 20.9051L3.61518 23.1379L1.2855 21.6816L5.13742 20.1672Z"
              fill="#f2f2f2"
            />
            <path
              d="M9.19981 8.79981C10.7454 8.79793 11.9979 7.54543 11.9998 5.99981V5.59981C11.9979 4.05418 10.7454 2.80168 9.19981 2.7998H5.1998C4.97889 2.7998 4.7998 2.97889 4.7998 3.1998V12.7998C4.7998 13.0207 4.97889 13.1998 5.1998 13.1998H6.79981C7.02072 13.1998 7.19981 13.0207 7.19981 12.7998V8.79981H9.19981ZM6.39981 12.3998H5.5998V3.5998H9.19981C10.3038 3.60111 11.1985 4.49577 11.1998 5.59981V5.99981C11.1985 7.10384 10.3038 7.99851 9.19981 7.99981H6.79981C6.57889 7.99981 6.39981 8.17889 6.39981 8.39981V12.3998Z"
              fill="#f2f2f2"
            />
            <path
              d="M6.7999 7.20039H9.1999C9.86234 7.19966 10.3992 6.66283 10.3999 6.00039V5.60039C10.3992 4.93795 9.86234 4.40112 9.1999 4.40039H6.7999C6.57899 4.40039 6.3999 4.57948 6.3999 4.80039V6.80039C6.3999 7.02131 6.57899 7.20039 6.7999 7.20039ZM9.5999 5.60039V6.00039C9.59977 6.22125 9.42076 6.40026 9.1999 6.40039H7.1999V5.20039H9.1999C9.42076 5.20052 9.59977 5.37953 9.5999 5.60039Z"
              fill="#f2f2f2"
            />
          </svg>
        </div>
        <div className="right-container">
          <h3>You haven't made any bookings</h3>
          <p>
            Find someone who has an empty space where you can park your car,
            motorbike, boat, or helicopter. This might be an empty
            driveway/courtyard, a garage, a boat mooring or even a rooftop.
          </p>
          <div className="row-container">
            <Link href="/find-a-space">
              <a>
                <Button title="Find a space" width="180px" />
              </a>
            </Link>
            {!session && (
              <>
                <p>or</p>
                <Button
                  title="Click here to log in"
                  width="215px"
                  onClick={() => signIn()}
                />
              </>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Bookings;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #0a0a0a;

  .left-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .right-container {
    width: 50%;
    height: 100%;
  }

  .hero-title {
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 64px;
    letter-spacing: 0.5px;
    color: #f2f2f2;
    margin-bottom: 50px;
  }

  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 62px;
    color: #f2f2f2;
    margin: 50px 0;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.5px;
    color: #494848;
  }

  .subtitle {
  }

  .row-container {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
  }
`;
