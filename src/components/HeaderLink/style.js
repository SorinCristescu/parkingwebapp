import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px 0;

  img {
    width: 20px;
    height: 20px;
  }

  p {
    width: 100%;
    font-size: ${(props) => props.fontSize};
    text-align: ${(props) => props.textAlign};
    margin-top: 5px;
    color: #bdbdbd;
  }
`;
