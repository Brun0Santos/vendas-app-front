import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { Produto } from '@/models/produtos/produtosModel';

interface ProdutoRowProps {
  produto: Produto;
  onEdit?: (produto: Produto) => void;
  onDelete?: (produto: Produto) => void;
}

interface ListaProdutos {
  produtos?: Array<Produto>;
  onEdit?: (produto: Produto) => void;
  onDelete?: (produto: Produto) => void;
}

function TabelaProdutos({ produtos }: ListaProdutos) {
  return (
    <Sidebar titulo="Produtos" tituloCard="Lista de Produtos">
      <Box flexDirection={'column'} width={'100%'}>
        <Link href={'/cadastros/produtos'}>
          <Button
            variant="contained"
            style={{
              marginRight: '10px',
              backgroundColor: '#a3ebae',
              color: 'black',
            }}
          >
            <AddCircleOutlinedIcon style={{ fontSize: '15px', marginRight: '7px' }} />
            Novo Produto
          </Button>
        </Link>
        <br />
        <br />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="customized table" size="medium">
            <TableHead>
              <TableRow style={{ backgroundColor: '#fafafa' }}>
                <TableCell>ID</TableCell>
                <TableCell align="center">CÓDIGO DO PRODUTO</TableCell>
                <TableCell align="center">NOME</TableCell>
                <TableCell align="center">PREÇO</TableCell>
                <TableCell align="center">DESCRIÇÃO</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {produtos?.map((row) => <ProdutoRow key={row.id} produto={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Sidebar>
  );
}

const ProdutoRow = ({ produto }: ProdutoRowProps) => {
  return (
    <TableRow key={produto.id}>
      <TableCell component="th" scope="row">
        {produto.codProduto}
      </TableCell>
      <TableCell align="center">{produto.nome}</TableCell>
      <TableCell align="center">{produto.preco}</TableCell>
      <TableCell align="center">{produto.descricao}</TableCell>
    </TableRow>
  );
};

export default TabelaProdutos;
