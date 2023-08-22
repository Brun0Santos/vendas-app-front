import * as yup from 'yup';

export const produtoValidationSchema = yup.object({
  codProduto: yup.string().trim().required('O campo cod produto é obrigatório!'),
  preco: yup.number().required().positive('Preço é um campo obrigatório!'),
  nome: yup.string().trim().required('Nome é um campo obrigatório!'),
  descricao: yup.string().trim().required('Descrição é um campo obrigatório!'),
});
