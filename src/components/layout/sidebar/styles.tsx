import styled from 'styled-components';

export const SidebarMenu = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  width: 117px;
  height: 100vh;
  padding: 0 1.7rem;
  color: #fff;
  overflow: hidden;
  transition: all 0.5s linear;
  /* background: rgba(113, 99, 186, 255); */
  background-color: #fff;

  box-shadow: 0px 19px 40px rgba(0, 0, 0, 0.09);
  &:hover {
    width: 270px;
    transition: 0.5s;
  }
`;

export const Logo = styled.div`
  height: 80px;
  padding: 16px;

  img {
    width: 55px;
    height: 55px;
  }
`;

export const MainUl = styled.ul`
  height: 88%;
  position: relative;
  list-style: none;
  padding: 0;

  li {
    padding: 1rem;
    margin: 8px 0;
    border-radius: 8px;
    transition: all 0.5s ease-in-out;

    &:hover,
    &.active {
      background: rgba(149, 198, 117, 255);
    }

    &.logout {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }

  a {
    color: rgba(51, 54, 58, 255);
    font-size: 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  span {
    overflow: hidden;
  }

  i {
    font-size: 20px;
  }
`;

export const MainContainer = styled.div`
  position: relative;
  background: #e1e1e1;
  width: 100%;
  padding: 1rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 10px;
  padding: 10px 2rem;
  margin-bottom: 1rem;

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchBox = styled.div`
  background: rgb(223, 223, 223);
  border-radius: 15px;
  color: rgba(33, 150, 243, 255);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;

  input {
    background: transparent;
    padding: 10px;
  }

  i:hover {
    transform: scale(1.2);
  }
`;
