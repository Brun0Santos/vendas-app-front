'use client';
import { Alert, Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useProdutoService } from '@/http';
import { Produto } from '@/models/produtos/produtosModel';
import { produtoValidationSchema } from '@/schema/produto/produtoValidationSchema';
import { convereterEmBigDecimal, formatReal } from '@/utils/parserValues';

import InputForm from '../../common/InputForm';
import { Sidebar } from '../../layout/sidebar/Sidebar';

export function ProdutosForm() {
  const [id, setId] = useState<string>();
  const [dataCadastro, setDataCadastro] = useState<string | undefined>('');
  const [codProduto, setCodProduto] = useState<string | undefined>('');
  const [preco, setPreco] = useState<string>('');
  const [nome, setNome] = useState<string | undefined>('');
  const [descricao, setDescricao] = useState<string | undefined>('');
  const [errors, setErrors] = useState<string>('');

  const service = useProdutoService();

  const searchParams = useSearchParams();

  const searchId = searchParams.get('id');

  const handleClose = () => {
    setErrors('');
  };

  useEffect(() => {
    if (searchId) {
      service.getProdutoFromId(String(searchId)).then((res) => {
        setId(res.id);
        setDataCadastro(res.dataCadastro);
        setCodProduto(res.codProduto);
        setPreco(formatReal(String(res.preco)));
        setNome(res.nome);
        setDescricao(res.descricao);
      });
    }
  }, [searchId]);

  const send = () => {
    const produto: Produto = {
      id,
      codProduto,
      preco: convereterEmBigDecimal(preco),
      nome,
      descricao,
    };

    produtoValidationSchema
      .validate(produto)
      .then(() => {
        if (id) {
          setErrors('');
          service.atualizarProduto(produto);
          toast.success('Produto atualizado com sucesso!', { duration: 1600 });
        } else {
          service.salvar(produto).then((succes) => {
            setErrors('');
            setId(succes.id);
            setDataCadastro(succes.dataCadastro);
            toast.success('Produto salvo com sucesso!', { duration: 1600 });
          });
        }
      })
      .catch((errors) => {
        setErrors(errors?.message);
      });
  };

  return (
    <Sidebar titulo="Produtos" tituloCard="Cadastro de produtos">
      <Box width={'100%'}>
        {errors && (
          <Alert severity="error" style={{ marginBottom: '23px' }} onClose={handleClose}>
            {errors}
          </Alert>
        )}
        {id && (
          <Grid container justifyContent={'space-between'} style={{ marginBottom: '30px' }}>
            <Grid item width={'49%'}>
              <InputForm label={'ID do Produto'} style={{ width: '100%' }} value={id} disabled />
            </Grid>

            <Grid item width={'49%'}>
              <InputForm
                label={'Data de Cadastro'}
                style={{ width: '100%' }}
                value={dataCadastro}
                disabled
              />
            </Grid>
          </Grid>
        )}
        <Grid container justifyContent={'space-between'}>
          <Grid item width={'49%'}>
            <InputForm
              label={'Código do Produto'}
              placeholder="Digite o código do produto"
              style={{ width: '100%' }}
              onChanges={setCodProduto}
              value={codProduto}
            />
          </Grid>

          <Grid item width={'49%'}>
            <InputForm
              label="Preço do Produto"
              placeholder="Digite o preço do produto"
              style={{ width: '100%' }}
              onChanges={setPreco}
              value={preco}
              isParser
            />
          </Grid>
        </Grid>

        <InputForm
          label="Nome do Produto"
          placeholder="Digite o nome do produto"
          style={{ width: '100%', marginTop: '35px' }}
          onChanges={setNome}
          value={nome}
        />

        <InputForm
          label="Descrição do Produto"
          placeholder="Digite a descrição"
          multiline
          rows={4}
          style={{ width: '100%', marginTop: '35px' }}
          onChanges={setDescricao}
          value={descricao}
        />

        <div style={{ marginTop: '30px' }}>
          <Button
            variant="contained"
            style={{
              marginRight: '10px',
              backgroundColor: '#03a9f4',
              color: 'black',
            }}
            onClick={send}
          >
            {id ? 'Atualizar' : 'Salvar'}
          </Button>

          <Link href={'/consultas/produtos'}>
            <Button variant="contained" style={{ color: 'black', backgroundColor: '#c7c7c7' }}>
              Voltar
            </Button>
          </Link>
        </div>
      </Box>
    </Sidebar>
  );
}
