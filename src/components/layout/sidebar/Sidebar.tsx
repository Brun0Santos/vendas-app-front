import Image from 'next/image';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsGraphUp, BsSearch } from 'react-icons/bs';
import { FiLogOut, FiSettings, FiShoppingCart, FiUsers } from 'react-icons/fi';

import {
  HeaderContainer,
  Logo,
  MainContainer,
  MainUl,
  SearchBox,
  SidebarMenu,
  UserInfo,
} from './styles';

function Sidebar() {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu>
        <Logo>
          {/* <img src="../../../../public/shopify.png"></img> */}
          <Image src={'/shopify.png'} alt="Minha Imagem" width={300} height={300} />
        </Logo>
        <MainUl>
          <li className="active">
            <a href="#">
              <i>
                <AiFillHome />
              </i>
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i>
                <FiShoppingCart />
              </i>
              <span>Produtos</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i>
                <FiUsers />
              </i>
              <span>Clientes</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i>
                <BsGraphUp />
              </i>
              <span>Vendas</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i>
                <FiSettings />
              </i>
              <span>Configurações</span>
            </a>
          </li>

          <li className="logout">
            <a href="">
              <i>
                <FiLogOut />
              </i>
              <span>Sair</span>
            </a>
          </li>
        </MainUl>
      </SidebarMenu>

      <MainContainer>
        <HeaderContainer>
          <div className="header--title">
            <span>Bem vindo</span>
            <h2>Dashboard</h2>
          </div>

          <UserInfo>
            <SearchBox>
              <i>
                <BsSearch />
              </i>
              <input type="text" placeholder="Search" />
            </SearchBox>
            <Image src={'/student.png'} alt="Minha Imagem" width={300} height={300} />
          </UserInfo>
        </HeaderContainer>
      </MainContainer>
    </div>
  );
}

export default Sidebar;
