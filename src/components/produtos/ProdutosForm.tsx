'use client';
import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';

import InputForm from '../common/InputForm';
import { Sidebar } from '../layout/sidebar/Sidebar';

export function ProdutosForm() {
  const [codProduto, setCodProduto] = useState<string | undefined>('');
  const [preco, setPreco] = useState<string>('');
  const [nome, setNome] = useState<string | undefined>('');
  const [descricao, setDescricao] = useState<string | undefined>('');

  const send = () => {
    const produto = {
      codProduto,
      preco,
      nome,
      descricao,
    };

    console.log(produto);
  };

  return (
    <Sidebar titulo="Produtos" tituloCard="Cadastro de produtos">
      <Box width={'100%'}>
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
            Salvar
          </Button>

          <Button variant="contained" style={{ color: 'black', backgroundColor: '#03a9f4' }}>
            Voltar
          </Button>
        </div>
      </Box>
    </Sidebar>
  );
}
