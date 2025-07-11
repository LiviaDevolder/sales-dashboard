import { defineSlotRecipe } from '@chakra-ui/react';

export const headerRecipe = defineSlotRecipe({
  className: 'app-header',
  slots: ['root', 'container', 'statusIndicator', 'title'],
  base: {
    root: {
      color: 'white',
      py: 4,
      px: { base: 4, md: 6 },
      bgColor: 'brand.900',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: 'container.xl',
      mx: 'auto',
    },
    statusIndicator: {
      width: 3,
      height: 3,
      borderRadius: 'full',
      bg: 'red.400',
    },
  },
});
