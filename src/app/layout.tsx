import './globals.css';

import type { Metadata } from 'next';

// import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'Vendas | App',
  description: 'Um projeto simples de uma loja simples',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
