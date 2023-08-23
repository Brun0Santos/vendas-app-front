'use client';
import { Avatar, Icon } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { BsFileBarGraphFill, BsSearch } from 'react-icons/bs';
import { FaShoppingCart, FaUserFriends } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMenuDisabled = () => {
    setIsExpanded(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu>
        <Logo>
          <Image src={'/blockchain.png'} alt="Minha Imagem" width={300} height={300} />
        </Logo>

        <MainUl>
          <TitleMenuLink href="/#" icon={AiFillHome} titleMenu="Home" classLi="active" />

          <TitleMenuLink href="/consultas/produtos" icon={FaShoppingCart} titleMenu="Produtos" />

          <TitleMenuLink href="google.com.br" icon={FaUserFriends} titleMenu="Clientes" />

          <TitleMenuLink href="google.com.br" icon={BsFileBarGraphFill} titleMenu="Vendas" />

          <TitleMenuLink href="google.com.br" icon={AiFillSetting} titleMenu="Config" />

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
              <input
                type="text"
                placeholder="Pesquisar"
                className={`menu ${isExpanded ? 'expanded' : ''}`}
                onMouseOut={toggleMenuDisabled}
                onClick={toggleMenu}
              />
            </SearchBox>

            <Avatar sx={{ bgcolor: 'rgba(139,80,200,255)' }}>BR</Avatar>
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
