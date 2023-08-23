import styled from 'styled-components';

export const SidebarMenu = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  width: 117px;
  height: 100vh;
  padding: 0 1.7rem;
  color: #fffdfd;
  overflow: hidden;
  transition: all 0.5s linear;
  background-color: #fff;

  &:hover {
    width: 270px;
    transition: 0.5s;
  }
`;

export const Logo = styled.div`
  height: 84px;
  padding-top: 25px;

  img {
    width: 59px;
    height: 59px;
  }
`;

export const MainUl = styled.ul`
  height: 88%;
  position: relative;
  list-style: none;
  padding: 19px 0px 0px;

  li {
    padding: 1rem;
    margin: 8px 0;
    border-radius: 8px;
    transition: all 0.5s ease-in-out;

    &:hover,
    &.active {
      background: #e8eaf6;
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
    font-size: 16px;
  }

  i {
    font-size: 13px;
  }
`;

export const MainContainer = styled.div`
  position: relative;
  background: #f7f7f7;
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
  margin-top: 0.7rem;
  box-shadow: 0px 19px 40px rgba(0, 0, 0, 0.09);

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

  div {
    cursor: pointer;
  }
`;

export const SearchBox = styled.div`
  background: rgb(223, 223, 223);
  border-radius: 15px;
  color: rgba(33, 150, 243, 255);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  height: 37px;

  input {
    background: transparent;
    padding: 10px;
  }

  i {
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.5 ease-out;
  }

  i:hover {
    transform: scale(1.2);
  }

  .expanded {
    width: 15rem;
  }
`;

export const BodyContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 19px 40px rgba(0, 0, 0, 0.09);
`;

export const TitleBody = styled.h2`
  color: #2e2e2e;
  padding-bottom: 27px;
  font-size: 18px;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
`;
