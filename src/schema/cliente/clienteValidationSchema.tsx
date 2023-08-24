import * as yup from 'yup';

export const clienteValidationSchema = yup.object({
  telefone: yup.string().trim().required('Telefone é um campo obrigatório!'),
  email: yup
    .string()
    .trim()
    .email('Formato de email inválido')
    .required('Email é um campo é obrigatório!'),
  endereco: yup.string().trim().required('Endereço é um campo obrigatório!'),
  dataNascimento: yup.string().trim().required('Data nascimento é um campo obrigatório!'),
  cpf: yup.string().trim().required('CPF é um campo obrigatório!'),
  nome: yup.string().trim().required('Nome é um campo obrigatório!'),
});
