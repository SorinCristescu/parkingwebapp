import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;
  background-color: #0a0a0a;
`;

export const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    color: #f2f2f2;
    line-height: 31px;
    font-weight: 600;
    font-size: 24px;
    font-style: normal;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    width: 300px;
    height: auto;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  padding: 50px 0;
`;

export const MainLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .links {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const SecondaryLinks = styled.div`
  width: 100%;
  margin: 20px 0;
`;
