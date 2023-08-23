'use client';
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { RiEditBoxFill } from 'react-icons/ri';

import { Produto } from '@/models/produtos/produtosModel';

interface ListaProdutos {
  produtos?: Array<Produto>;
  onEdit?: (produto: Produto) => void;
  onDelete?: (produto: Produto) => void;
}

interface ProdutoRowProps {
  produto: Produto;
  onEdit?: (produto: Produto) => void;
  onDelete?: (produto: Produto) => void;
}

function TabelaProduto({ produtos }: ListaProdutos) {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table" size="medium">
          <TableHead>
            <TableRow style={{ backgroundColor: '#f3f3f3' }}>
              <TableCell
                style={{ fontSize: '17px', fontFamily: 'Poppins, sans-serif', color: '#000' }}
              >
                ID
              </TableCell>
              <TableCell
                style={{ fontSize: '17px', fontFamily: 'Poppins, sans-serif' }}
                align="center"
              >
                CÓDIGO DO PRODUTO
              </TableCell>
              <TableCell
                style={{ fontSize: '17px', fontFamily: 'Poppins, sans-serif' }}
                align="center"
              >
                NOME
              </TableCell>
              <TableCell
                style={{ fontSize: '17px', fontFamily: 'Poppins, sans-serif' }}
                align="center"
              >
                PREÇO
              </TableCell>
              <TableCell
                style={{ fontSize: '17px', fontFamily: 'Poppins, sans-serif' }}
                align="center"
              >
                DESCRIÇÃO
              </TableCell>
              <TableCell
                style={{ fontSize: '17px', fontFamily: 'Poppins, sans-serif' }}
                align="right"
              >
                Ações
              </TableCell>
              <TableCell style={{ fontSize: '17px' }} align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{produtos?.map((row) => <ProdutoRow key={row.id} produto={row} />)}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const ProdutoRow = ({ produto }: ProdutoRowProps) => {
  return (
    <TableRow key={produto.id}>
      <TableCell>{produto.id}</TableCell>
      <TableCell align="center" style={{ fontSize: '15px' }}>
        {produto.codProduto}
      </TableCell>
      <TableCell align="center" style={{ fontSize: '15px' }}>
        {produto.nome}
      </TableCell>
      <TableCell align="center" style={{ fontSize: '15px' }}>
        {produto.preco}
      </TableCell>
      <TableCell align="center" style={{ fontSize: '15px' }}>
        {produto.descricao}
      </TableCell>
      <TableCell align="right">
        <IconButton aria-label="expand row" style={{ fontSize: '21px', color: '#000' }}>
          <RiEditBoxFill />
        </IconButton>
      </TableCell>
      <TableCell align="left">
        <IconButton aria-label="expand row" style={{ fontSize: '21px', color: '#000' }}>
          <AiFillDelete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TabelaProduto;
