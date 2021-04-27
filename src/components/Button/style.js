import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.outlined ? 'transparent' : '#56ccf2')};
  border: 2px solid #56ccf2;
  border-radius: 5px;
  cursor: pointer;
  width: ${(props) => props.width};
  height: 50px;
  filter: drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08)),
    drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06));

  &:hover {
    border: 2px solid #3fc6f1;
    background-color: #3fc6f1;
  }
  &:active {
    transform: scale(0.99);
  }

  .title {
    font-size: 14px;
    color: ${(props) => (props.outlined ? '#56ccf2' : '#f2f2f2')};
    margin: 0 10px;
    /* text-transform: uppercase; */
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }

  img {
    width: 25px;
    height: auto;
  }
`;
