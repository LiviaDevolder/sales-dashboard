import React from 'react';
import { chakra, Flex, Heading, Avatar } from '@chakra-ui/react';
import { headerRecipe } from '../../../styles/slotRecipes/header.recipe';

const StyledHeader = chakra('header', headerRecipe);

interface HeaderProps {
  userName?: string;
  'data-testid'?: string;
}

export const Header: React.FC<HeaderProps> = ({
  userName = 'User Name',
  'data-testid': testId,
}) => {
  return (
    <StyledHeader data-testid={testId}>
      <Flex justify="space-between" align="center">
        <Flex align="center" gap={3}>
          <Avatar.Root colorPalette="red">
            <Avatar.Fallback />
          </Avatar.Root>
          <Heading as="h2" size="md">
            {userName}
          </Heading>
        </Flex>

        <Heading as="h1" size="lg">
          Sales Report
        </Heading>
      </Flex>
    </StyledHeader>
  );
};
