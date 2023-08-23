'use client';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Box, Button } from '@mui/material';
import { AxiosResponse } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useSWR from 'swr';

import Loaders from '@/components/common/loaders/Loaders';
import ModalDialog from '@/components/common/modal/ModalDialog';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { useProdutoService } from '@/http';
import { httpCliente } from '@/http/routes/routes';
import { Produto } from '@/models/produtos/produtosModel';

import TabelaProduto from './TabelaProduto';

function ListaProdutos() {
  const [listaProdutos, setListaProduto] = useState<Array<Produto>>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataProduto, setDataProduto] = useState<Produto>();
  const { data: response } = useSWR<AxiosResponse<Produto[]>>('/api/produtos', (url) =>
    httpCliente.get(url),
  );
  const router = useRouter();
  const service = useProdutoService();

  useEffect(() => {
    setListaProduto(response?.data || []);
  }, [response]);

  const handleOnEdit = (produto: Produto) => {
    const url: string = `/cadastros/produtos?id=${produto.id}`;
    router.push(url);
  };

  const handleConfirmDelete = () => {
    if (dataProduto?.id) {
      service.deletarProduto(String(dataProduto.id)).then(() => {
        setShowModal(false);
        toast.success('Produto deletado com sucesso');
        const novaLista = listaProdutos?.filter((produtoId) => produtoId.id !== dataProduto.id);
        setListaProduto(novaLista);
      });
    }
  };

  const handleOnDelete = (produto: Produto) => {
    setDataProduto(produto);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
        <TabelaProduto produtos={listaProdutos} onEdit={handleOnEdit} onDelete={handleOnDelete} />
        <Loaders isRender={!response} />
      </Box>
      <ModalDialog
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirmDel={handleConfirmDelete}
      />
    </Sidebar>
  );
}

export default ListaProdutos;
