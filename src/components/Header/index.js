import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import styles from './Header.module.css';

import HeaderLink from '../HeaderLink';
import ButtonLink from '../ButtonLink';

export default function Header() {
  const [session, loading] = useSession();
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Link href='/'>
          <a>
            <img src='./logo/logo_small.svg' alt='logo' />
          </a>
        </Link>
      </div>
      <div className={styles.nav}>
        <HeaderLink
          href='/find-a-place'
          name='Find a place'
          iconSrc='/icons/marker.svg'
        />
        <HeaderLink
          href='/bookings'
          name='Bookings'
          iconSrc='/icons/bookings.svg'
        />
        <HeaderLink
          href='/manage-my-places'
          name='Manage my place(s)'
          iconSrc='/icons/money.svg'
        />
        {!session && (
          <ButtonLink
            name='Sign in'
            iconSrc='/icons/profile.svg'
            handleClick={() => signIn()}
          />
        )}
        {session && (
          <ButtonLink
            name='Sign out'
            iconSrc='/icons/profile.svg'
            handleClick={() => signOut()}
          />
        )}

        {/* <HeaderLink href='/sign-up' name='Find a place' iconSrc='/icons/marker.svg'/> */}
      </div>
    </div>
  );
}
