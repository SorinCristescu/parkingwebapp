import { Container } from './style';

function Button({
  iconLeft,
  iconRight,
  title,
  srcLeft,
  altLeft,
  srcRight,
  altRight,
  small,
  outlined,
  disabled,
  onClick,
  width,
}) {
  return (
    <Container
      onClick={onClick}
      small={small}
      outlined={outlined}
      disabled={disabled}
      width={width}
    >
      {iconLeft ? <img className="icon" src={srcLeft} alt={altLeft} /> : null}
      <p className="title">{title}</p>
      {iconRight ? (
        <img className="icon" src={srcRight} alt={altRight} />
      ) : null}
    </Container>
  );
}

export default Button;
