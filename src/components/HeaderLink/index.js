import React from 'react';
import Link from 'next/link';

import styles from './HeaderLink.module.css';

export default function HeaderLink({ name, href, iconSrc }) {
  return (
    <Link href={href}>
      <a>
        <div className={styles.link_container}>
          {iconSrc && <img className={styles.icon} src={iconSrc} alt='' />}
          <p>{name}</p>
        </div>
      </a>
    </Link>
  );
}
