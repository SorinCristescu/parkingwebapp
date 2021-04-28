import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 0 100px;
  position: fixed;
  top: 0;
  left: 0;
  height: 105px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #090909 70.31%, rgba(51, 51, 51, 0) 100%);
  z-index: 100;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin: 0 20px;
    font-size: 120%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;
