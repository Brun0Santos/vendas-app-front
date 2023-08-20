'use client';
import { Box, Grid, TextField } from '@mui/material';
import React from 'react';

import { Sidebar } from '../layout/sidebar/Sidebar';

export function ProdutosForm() {
  return (
    <Sidebar titulo="Produtos" subTitulo="Cadastro de produtos">
      <Box width={'100%'}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-basic"
              label="Código do Produto"
              variant="outlined"
              type="text"
              placeholder="Digite o código do produto"
              style={{ width: '95%' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* Conteúdo da segunda coluna */}
            <TextField
              id="outlined-basic"
              label="Preço do Produto"
              variant="outlined"
              type="number"
              placeholder="Digite o preço do produto"
              style={{ width: '95%' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Sidebar>
  );
}
