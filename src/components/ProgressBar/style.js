import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 100px;
  /* margin: 0 auto; */
  /* height: 100vh; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;

  .progress-container {
    width: 100%;
    height: 9px;
    background-color: #333333;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .progress-bar {
    width: ${(props) => props.progress};
    height: 100%;
    background-color: #56ccf2;
  }

  .car {
    position: absolute;
    bottom: -13px;
    left: calc(${(props) => props.progress} - 60px);
  }
`;
