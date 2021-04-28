import Link from 'next/link';
import Button from '../Button';

import { Container } from './style';

function ButtonGroup({
  hrefLeft,
  hrefRight,
  onClickLeft,
  onClickRight,
  titleLeft,
  titleRight,
}) {
  return (
    <Container>
      <Link href={hrefLeft}>
        <a>
          <Button
            title={titleLeft}
            onClick={onClickLeft}
            width="180px"
            outlined
          />
        </a>
      </Link>
      <Link href={hrefRight}>
        <a>
          <Button title={titleRight} onClick={onClickRight} width="180px" />
        </a>
      </Link>
    </Container>
  );
}

export default ButtonGroup;
