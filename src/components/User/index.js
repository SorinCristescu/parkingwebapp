import { Container } from './style';

function User({ name, src, alt }) {
  return (
    <Container>
      <img src={src} alt={alt} />
      <p className="user-name">{name}</p>
    </Container>
  );
}

export default User;
