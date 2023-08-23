'use client';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Box, Button } from '@mui/material';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import Loaders from '@/components/common/loaders/Loaders';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { httpCliente } from '@/http/routes/routes';
import { Produto } from '@/models/produtos/produtosModel';

import TabelaProduto from './TabelaProduto';

function ListaProdutos() {
  const [listaProdutos, setListaProduto] = useState<Array<Produto>>([]);
  const { data: response } = useSWR<AxiosResponse<Produto[]>>('/api/produtos', (url) =>
    httpCliente.get(url),
  );

  useEffect(() => {
    setListaProduto(response?.data || []);
  }, [response]);

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
              marginBottom: '22px',
            }}
          >
            <AddCircleOutlinedIcon style={{ fontSize: '15px', marginRight: '7px' }} />
            Novo Produto
          </Button>
        </Link>
        <TabelaProduto produtos={listaProdutos} />
        <Loaders isRender={!response} />
      </Box>
    </Sidebar>
  );
}

export default ListaProdutos;
