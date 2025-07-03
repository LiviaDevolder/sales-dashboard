import React from 'react';
import { Box, Heading, Avatar, useSlotRecipe } from '@chakra-ui/react';
import { headerRecipe } from '../../../styles/slotRecipes/header.recipe';

interface HeaderProps {
  userName?: string;
  'data-testid'?: string;
}

export const Header: React.FC<HeaderProps> = ({
  userName = 'User Name',
  'data-testid': testId,
}) => {
  const recipe = useSlotRecipe({ recipe: headerRecipe });
  const styles = recipe();

  return (
    <Box css={styles.root} data-testid={testId}>
      <Box css={styles.container}>
        <Box display="flex" alignItems="center" gap={3}>
          <Avatar.Root colorPalette="blue">
            <Avatar.Fallback />
          </Avatar.Root>
          <Heading as="h2" size="md" css={styles.title}>
            {userName}
          </Heading>
        </Box>

        <Heading as="h1" size="lg" css={styles.title}>
          Relatório de Vendas
        </Heading>
      </Box>
    </Box>
  );
};
