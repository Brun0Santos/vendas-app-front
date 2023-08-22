import './globals.css';

import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'Vendas | App',
  description: 'Um projeto simples de uma loja simples',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Toaster />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
