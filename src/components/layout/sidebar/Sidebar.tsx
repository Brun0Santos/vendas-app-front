'use client';
import { Icon } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';
import { BsGraphUp, BsSearch } from 'react-icons/bs';
import { FiLogOut, FiSettings, FiShoppingCart, FiUsers } from 'react-icons/fi';

import {
  BodyContainer,
  CardContainer,
  HeaderContainer,
  Logo,
  MainContainer,
  MainUl,
  SearchBox,
  SidebarMenu,
  TitleBody,
  UserInfo,
} from './styles';

interface LayoutProps {
  children?: React.ReactNode;
  titulo?: string;
  subTitulo?: string;
  tituloCard?: string;
}

interface LinkItemProps {
  icon: IconType;
  href: string;
  classLi?: string;
  titleMenu: string;
}

const TitleMenuLink = ({ icon, href, classLi, titleMenu }: LinkItemProps) => {
  return (
    <li className={classLi}>
      <Link href={href}>
        <i>
          <Icon component={icon} style={{ fontSize: '20px' }}></Icon>
        </i>
        <span>{titleMenu}</span>
      </Link>
    </li>
  );
};

export function Sidebar({ children, titulo, subTitulo, tituloCard }: LayoutProps) {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu>
        <Logo>
          <Image src={'/shopify.png'} alt="Minha Imagem" width={300} height={300} />
        </Logo>

        <MainUl>
          <TitleMenuLink href="#" icon={AiFillHome} titleMenu="Home" classLi="active" />

          <TitleMenuLink href="/consultas/produtos" icon={FiShoppingCart} titleMenu="Produtos" />

          <TitleMenuLink href="google.com.br" icon={FiUsers} titleMenu="Clientes" />

          <TitleMenuLink href="google.com.br" icon={BsGraphUp} titleMenu="Vendas" />

          <TitleMenuLink href="google.com.br" icon={FiSettings} titleMenu="Config" />

          <TitleMenuLink href="google.com.br" icon={FiLogOut} titleMenu="Sair" classLi="logout" />
        </MainUl>
      </SidebarMenu>

      <MainContainer>
        <HeaderContainer>
          <div className="header--title">
            <span>{subTitulo}</span>
            <h2>{titulo}</h2>
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

        <BodyContainer>
          <TitleBody>{tituloCard}</TitleBody>
          <CardContainer>{children}</CardContainer>
        </BodyContainer>
      </MainContainer>
    </div>
  );
}
