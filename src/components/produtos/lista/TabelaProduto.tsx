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

import { TableStyles } from './styles';

interface ListaProdutos {
  produtos: Array<Produto>;
  onEdit: (produto: Produto) => void;
  onDelete: (produto: Produto) => void;
}

interface ProdutoRowProps {
  produto: Produto;
  onEdit: (produto: Produto) => void;
  onDelete: (produto: Produto) => void;
}

function TabelaProduto({ produtos, onEdit, onDelete }: ListaProdutos) {
  return (
    <Box>
      <TableStyles>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table" size="medium">
            <TableHead>
              <TableRow style={{ backgroundColor: '#f3f3f3' }}>
                <TableCell>ID</TableCell>
                <TableCell align="center">CÓDIGO DO PRODUTO</TableCell>
                <TableCell align="center" className="styles">
                  NOME
                </TableCell>
                <TableCell align="center">PREÇO</TableCell>
                <TableCell align="right">AÇÕES</TableCell>
                <TableCell style={{ fontSize: '17px' }} align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produtos?.map((row) => (
                <ProdutoRow key={row.id} produto={row} onEdit={onEdit} onDelete={onDelete} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableStyles>
    </Box>
  );
}

const ProdutoRow = ({ produto, onEdit, onDelete }: ProdutoRowProps) => {
  return (
    <TableRow key={produto.id}>
      <TableCell style={{ fontSize: '16px' }}>{produto.id}</TableCell>
      <TableCell align="center">{produto.codProduto}</TableCell>
      <TableCell align="center">{produto.nome}</TableCell>
      <TableCell align="center">{produto.preco}</TableCell>
      <TableCell align="right">
        <IconButton
          aria-label="expand row"
          style={{ fontSize: '21px', color: '#000' }}
          onClick={() => onEdit(produto)}
        >
          <RiEditBoxFill />
        </IconButton>
      </TableCell>
      <TableCell align="left">
        <IconButton
          aria-label="expand row"
          style={{ fontSize: '21px', color: '#000' }}
          onClick={() => onDelete(produto)}
        >
          <AiFillDelete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TabelaProduto;
