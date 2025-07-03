'use client';

import system from '../../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import type { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
