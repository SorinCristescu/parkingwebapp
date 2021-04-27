import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

import { Container, Navbar, Nav } from './style';
import HeaderLink from '../HeaderLink';
import ButtonLink from '../ButtonLink';
import User from '../User';

export default function Header() {
  const [session, loading] = useSession();

  return (
    <Container>
      <Navbar>
        <Link href="/">
          <a>
            <img src="./logo/logo_small.svg" alt="logo" />
          </a>
        </Link>
        {session && (
          <User
            src={session.user.image}
            alt={`${session.user.name} photo`}
            name={session.user.name}
          />
        )}
      </Navbar>

      <Nav>
        <HeaderLink
          href="/find-a-place"
          name="Find a place"
          iconSrc="/icons/marker.svg"
          textAlign="center"
          fontSize="12px"
        />
        <HeaderLink
          href="/bookings"
          name="Bookings"
          iconSrc="/icons/bookings.svg"
          textAlign="center"
          fontSize="12px"
        />
        <HeaderLink
          href="/manage-my-places"
          name="Manage my place(s)"
          iconSrc="/icons/money.svg"
          textAlign="center"
          fontSize="12px"
        />
        {!session && (
          <ButtonLink
            name="Sign in"
            iconSrc="/icons/profile.svg"
            handleClick={() => signIn()}
          />
        )}
        {session && (
          <ButtonLink
            name="Sign out"
            iconSrc="/icons/profile.svg"
            handleClick={() => signOut()}
          />
        )}

        {/* <HeaderLink href='/sign-up' name='Find a place' iconSrc='/icons/marker.svg'/> */}
      </Nav>
    </Container>
  );
}
