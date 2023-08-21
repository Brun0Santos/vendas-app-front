'use client';
import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';

import { useProdutoService } from '@/http';
import { Produto } from '@/models/produtos/produtosModel';
import { convereterEmBigDecimal } from '@/utils/parserValues';

import InputForm from '../common/InputForm';
import { Sidebar } from '../layout/sidebar/Sidebar';

export function ProdutosForm() {
  const [id, setId] = useState<string>();
  const [dataCadastro, setDataCadastro] = useState<string | undefined>('');
  const [codProduto, setCodProduto] = useState<string | undefined>('');
  const [preco, setPreco] = useState<string>('');
  const [nome, setNome] = useState<string | undefined>('');
  const [descricao, setDescricao] = useState<string | undefined>('');

  const service = useProdutoService();

  const send = () => {
    const produto: Produto = {
      id,
      codProduto,
      preco: convereterEmBigDecimal(preco),
      nome,
      descricao,
    };

    if (id) {
      service.atualizarProduto(produto);
    } else {
      service.salvar(produto).then((succes) => {
        setId(succes.id);
        setDataCadastro(succes.dataCadastro);
      });
    }
  };

  return (
    <Sidebar titulo="Produtos" tituloCard="Cadastro de produtos">
      <Box width={'100%'}>
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
              backgroundColor: 'rgba(149, 198, 117, 255)',
              color: 'black',
            }}
            onClick={send}
          >
            {id ? 'Atualizar' : 'Salvar'}
          </Button>

          <Button variant="contained" style={{ color: 'black', backgroundColor: '#03a9f4' }}>
            Voltar
          </Button>
        </div>
      </Box>
    </Sidebar>
  );
}
