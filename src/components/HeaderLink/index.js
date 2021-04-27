import React from 'react';
import Link from 'next/link';

import { Container } from './style';

export default function HeaderLink({
  name,
  href,
  iconSrc,
  textAlign,
  fontSize,
}) {
  return (
    <Link href={href}>
      <a>
        <Container textAlign={textAlign} fontSize={fontSize}>
          {iconSrc && <img src={iconSrc} alt="" />}
          <p>{name}</p>
        </Container>
      </a>
    </Link>
  );
}
