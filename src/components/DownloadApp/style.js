import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn {
    width: 180px;
    height: 50px;

    background: none;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 30px;
    height: 30px;
  }

  .title-container {
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    color: #f2f2f2;
  }

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }

  .title-store {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
  }

  .uppercase {
    text-transform: uppercase;
  }
`;
