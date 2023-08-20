'use client';
import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';

import { Sidebar } from '../layout/sidebar/Sidebar';

export function ProdutosForm() {
  return (
    <Sidebar titulo="Produtos" tituloCard="Cadastro de produtos">
      <Box width={'100%'}>
        <Grid container justifyContent={'space-between'}>
          <Grid item width={'49%'}>
            <TextField
              id="outlined-basic"
              label="Código do Produto"
              variant="outlined"
              type="text"
              placeholder="Digite o código do produto"
              style={{ width: '100%' }}
            />
          </Grid>

          <Grid item width={'49%'}>
            <TextField
              id="outlined-basic"
              label="Preço do Produto"
              variant="outlined"
              type="number"
              placeholder="Digite o preço do produto"
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>

        <TextField
          id="outlined-basic"
          label="Nome do Produto"
          variant="outlined"
          type="text"
          placeholder="Digite o nome do produto"
          style={{ width: '100%', marginTop: '30px' }}
        />

        <TextField
          id="outlined-basic"
          label="Descrição do Produto"
          variant="outlined"
          type="text"
          placeholder="Digite a descrição"
          multiline
          rows={4}
          style={{ width: '100%', marginTop: '30px' }}
        />

        <div style={{ marginTop: '30px' }}>
          <Button
            variant="contained"
            style={{
              marginRight: '10px',
              backgroundColor: 'rgba(149, 198, 117, 255)',
              color: 'black',
            }}
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
