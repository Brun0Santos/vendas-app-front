'use client';
import { Box, Button, Grid, TextField } from '@mui/material';
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
            {/* <TextField
              id="outlined-basic"
              label="Código do Produto"
              variant="outlined"
              type="text"
              placeholder="Digite o código do produto"
              style={{ width: '100%' }}
              onChange={(e) => setCodProduto(e.target.value)}
              value={codProduto}
            /> */}

            <InputForm
              label={'Código do Produto'}
              placeholder="Digite o código do produto"
              style={{ width: '100%' }}
              onChanges={setCodProduto}
              value={codProduto}
            />
          </Grid>

          <Grid item width={'49%'}>
            <TextField
              id="outlined-basic"
              label="Preço do Produto"
              variant="outlined"
              type="text"
              placeholder="Digite o preço do produto"
              style={{ width: '100%' }}
              onChange={(e) => setPreco(e.target.value)}
              value={preco}
            />
          </Grid>
        </Grid>

        <TextField
          id="outlined-basic"
          label="Nome do Produto"
          variant="outlined"
          type="text"
          placeholder="Digite o nome do produto"
          style={{ width: '100%', marginTop: '35px' }}
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />

        <TextField
          id="outlined-basic"
          label="Descrição do Produto"
          variant="outlined"
          type="text"
          placeholder="Digite a descrição"
          multiline
          rows={4}
          style={{ width: '100%', marginTop: '35px' }}
          onChange={(e) => setDescricao(e.target.value)}
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
