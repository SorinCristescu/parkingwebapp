import HeaderLink from '../HeaderLink';
import DownloadApp from '../DownloadApp';
import SocialMedia from '../SocialMedia';

import {
  Container,
  LeftSide,
  RightSide,
  NavBar,
  MainLinks,
  SecondaryLinks,
} from './style';

function Footer() {
  return (
    <Container>
      <LeftSide>
        <h4>
          ShareParking is a global parking app which unlocks parking in your
          city. It's also a platform that automates your car park, and/or
          enables you to rent your private space to anyone who needs parking for
          their car, bike or boat.
        </h4>
        <NavBar>
          <MainLinks>
            <div className="links">
              <HeaderLink
                name="Blog"
                href="/blog"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="About"
                href="/about"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="Contact us"
                href="/contact"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="Press"
                href="/press"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="Work for ShareParking"
                href="/work-for-shareparking"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="Help"
                href="/help"
                textAlign="left"
                fontSize="12px"
              />
            </div>
            <div className="links">
              <HeaderLink
                name="How it works"
                href="how-it-works"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="Why lease whith ShareParking"
                href="/why-lease-with-shareparking"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="FAQ"
                href="/faq"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="Terms of Services"
                href="/tos"
                textAlign="left"
                fontSize="12px"
              />
              <HeaderLink
                name="Privacy Policy"
                href="/privacy-policy"
                textAlign="left"
                fontSize="12px"
              />
            </div>
          </MainLinks>
          <SecondaryLinks></SecondaryLinks>
        </NavBar>
      </LeftSide>
      <RightSide>
        <img className="logo" src="/logo/logo_small.svg" alt="logo icon" />
        <DownloadApp />
        <SocialMedia />
      </RightSide>
    </Container>
  );
}

export default Footer;
