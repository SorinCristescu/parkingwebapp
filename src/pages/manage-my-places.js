import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import styled from 'styled-components';
import Button from '../components/Button';

function ManageMyPlaces() {
  const [session, loading] = useSession();
  return (
    <div>
      <Head>
        <title>ShareParking - Manage my places</title>
      </Head>
      <Section url="/images/marina.png">
        <div className="create-space">
          <h4>Manage my space(s)</h4>
          <Link href="/new">
            <a>
              <Button title="+ Create space" width="155px" />
            </a>
          </Link>
        </div>
        <h1>
          List your private parking space(s), car park, or boat moorings on
          ShareParking to start earning money today
        </h1>
      </Section>
      <Section>
        <div className="features">
          <div className="feature">
            <img
              className="icon"
              src="/icons/parking-area.svg"
              alt="parking area icon"
            />
            <div className="content">
              <h5>
                I have a parking space or car park which is not used 24/7.
              </h5>
              <p>
                List between 1-to-1000+ parking spaces in under 5 minutes! You
                set the price and availability of your spaces, and ShareParking
                automatically manages space allocation, bookings and payment -
                saving you time and money.
              </p>
            </div>
          </div>
          <div className="feature">
            <img
              className="icon"
              src="/icons/mooring.svg"
              alt="mooring area icon"
            />
            <div className="content">
              <h5>
                I have a boat mooring, pier, jetty or marina that I could be
                making money from.
              </h5>
              <p>
                Make your boat mooring or boat spaces generate income all year
                round! ShareParking allows you to sight a person's boat licence
                and insurance, before they rent a mooring or berth. You can even
                have them agree to your own Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
        {!session && (
          <Button
            title="Login or sign up now!"
            width="325px"
            onClick={() => signIn()}
          />
        )}
        <div className="big-content">
          <h3>ShareParking works with all kinds of car parks</h3>
          <p>
            List between 1-to-1000+ parking spaces in under 5 minutes! You set
            the price and availability of your spaces, and Kerb automatically
            manages space allocation, bookings, payment, and access - saving you
            time and money.
          </p>
          <Link href="/new">
            <a>
              <p className="link-text">
                Create your space using our self-service platform »
              </p>
            </a>
          </Link>
        </div>
        <div className="big-content">
          <h3>Why is ShareParking unique?</h3>
        </div>
        <div className="row-container">
          <div className="column-container">
            <div className="content">
              <h5>
                I have a parking space or car park which is not used 24/7.
              </h5>
              <p>
                List between 1-to-1000+ parking spaces in under 5 minutes! You
                set the price and availability of your spaces, and ShareParking
                automatically manages space allocation, bookings and payment -
                saving you time and money.
              </p>
            </div>
            <div className="content">
              <h5>Choose how you lease</h5>
              <p>
                ShareParking lets you view-then-approve booking requests, accept
                'instant' bookings, or let parkers pay weekly or monthly –
                through 'subscriptions'.
              </p>
            </div>
            <div className="content">
              <h5>Keep your space private</h5>
              <p>
                Is your car park or marina closed to the general public? Easy!
                ShareParking gives you the option to set a password lock, only
                accessible to residents or members.
              </p>
            </div>
          </div>
          <div className="column-container">
            <div className="content">
              <h5>You control availability</h5>
              <p>
                You choose when people can book your space. Your space might not
                be available on Tuesday, at weekends, or before 8am.
                ShareParking handles the availability for you.
              </p>
            </div>
            <div className="content">
              <h5>Know who's renting</h5>
              <p>
                ShareParking allows you to request vehicle license plate
                numbers, and licence and insurance documentation, giving you
                visibility into who is booking your space.
              </p>
            </div>
            <div className="content">
              <h5>Dashboards & Reporting</h5>
              <p>
                Want to know how much extra income ShareParking is generating
                each month for your car park, marina or yacht club?
                ShareParking's dashboards and reporting give you everything you
                need to know.
              </p>
            </div>
          </div>
          <div className="column-container">
            <div className="content">
              <h5>Get paid quickly</h5>
              <p>
                ShareParking handles all payments for you, and automatically
                transfers fees owing to you within a couple of business days.
              </p>
            </div>
            <div className="content">
              <h5>Set your own Terms & Conditions</h5>
              <p>
                If you have a car park or a marina/yacht club with its own Terms
                and Conditions, you can upload them to ShareParking and have
                people agree to them before they book your space
              </p>
            </div>
            <div className="content">
              <h5>Integrate with security gates</h5>
              <p>
                ShareParking can integrate with LPR/ANPR cameras, and other gate
                technology and car park management systems. Or have your car
                park integrate with ShareParking to boost your profit margins…
                Simply request ShareParking's API documentation to see the data
                points we expose.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default ManageMyPlaces;

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 100px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: #0a0a0a;

  .create-space {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px 0 50px 0;
  }

  h1 {
    width: 70%;
    font-weight: 600;
    font-size: 64px;
    line-height: 83px;
    text-align: center;
    color: #f2f2f2;
  }
  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 62px;
    color: #f2f2f2;
    text-align: center;
    margin: 100px 0 100px 0;
  }
  h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 64px;
    letter-spacing: 0.5px;
    color: #f2f2f2;
  }

  h5 {
    font-weight: 600;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 0.5px;
    color: #f2f2f2;
    margin-bottom: 22px;
  }

  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.5px;
    color: #494848;
  }

  .icon {
    width: 90px;
    width: 90px;
  }

  .features {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 150px 0;
  }

  .feature {
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .content {
    padding: 0 60px 0 40px;
    height: 350px;
  }

  .big-content {
    text-align: center;
    max-width: 50%;
    margin: 50px 0;
  }

  .link-text {
    color: #56ccf2;
    margin-top: 50px;
  }

  .row-container {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .column-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
