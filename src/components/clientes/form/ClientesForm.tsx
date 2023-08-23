'use client';
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Grid } from '@mui/material';
import Link from 'next/link';
import { send } from 'process';
import React, { useState } from 'react';

import InputForm from '@/components/common/InputForm';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { Cliente } from '@/models/clientes/clientesModel';

function ClientesForm() {
  const [codigoId, setCodigoId] = useState<string | undefined>('');
  const [dataCadastro, setDataCadastro] = useState<string | undefined>('');
  const [nome, setNome] = useState<string | undefined>('');
  const [cpf, setCpf] = useState<string | undefined>('');
  const [dataNascimento, setDataNascimento] = useState<string | undefined>('');
  const [endereco, setEndereco] = useState<string | undefined>('');
  const [email, setEmail] = useState<string | undefined>('');
  const [telefone, setTelefone] = useState<string | undefined>('');

  const send = () => {
    const cliente: Cliente = {
      id: codigoId,
      cpf,
      nome,
      email,
      endereco,
      dataNascimento,
      dataCadastro,
      telefone,
    };

    console.log(cliente);
  };

  return (
    <Sidebar titulo="Clientes" tituloCard="Cadastro de clientes">
      <Box width={'100%'}>
        {/* {errors && (
          <Alert severity="error" style={{ marginBottom: '23px' }} onClose={handleClose}>
            {errors}
          </Alert>
        )} */}
        {codigoId && (
          <Grid container justifyContent={'space-between'} style={{ marginBottom: '30px' }}>
            <Grid item width={'49%'}>
              <InputForm label={'Código'} style={{ width: '100%' }} value={codigoId} disabled />
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
          <Grid item width={'33%'}>
            <InputForm
              label={'Nome'}
              placeholder="Digite seu nome"
              style={{ width: '100%' }}
              onChanges={setNome}
              value={nome}
            />
          </Grid>

          <Grid item width={'33%'}>
            <InputForm
              label="CPF"
              placeholder="Digite seu CPF"
              style={{ width: '100%' }}
              onChanges={setCpf}
              value={cpf}
              isParser
            />
          </Grid>

          <Grid item width={'33%'}>
            <InputForm
              label="Data Nascimento"
              placeholder="Digite sua data de nascimento"
              style={{ width: '100%' }}
              onChanges={setDataNascimento}
              value={dataNascimento}
            />
          </Grid>
        </Grid>

        <InputForm
          label="Endereço"
          placeholder="Digite seu endereço"
          style={{ width: '100%', marginTop: '35px' }}
          onChanges={setEndereco}
          value={endereco}
        />

        <Grid container justifyContent={'space-between'} style={{ marginTop: '30px' }}>
          <Grid item width={'49%'}>
            <InputForm
              label={'Email'}
              placeholder="Digite seu email"
              style={{ width: '100%' }}
              onChanges={setEmail}
              value={email}
            />
          </Grid>

          <Grid item width={'49%'}>
            <InputForm
              label={'Telefone'}
              placeholder="Digite seu telefone"
              style={{ width: '100%' }}
              onChanges={setTelefone}
              value={telefone}
            />
          </Grid>
        </Grid>

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
            {codigoId ? 'Atualizar' : 'Salvar'}
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

export default ClientesForm;
