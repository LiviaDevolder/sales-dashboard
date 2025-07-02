import { defineRecipe } from '@chakra-ui/react';

export const textRecipe = defineRecipe({
  base: {
    textAlign: 'left',
  },
  variants: {
    variant: {
      heading: {
        fontSize: '2xl',
        fontWeight: 'bold',
      },
      subheading: {
        fontSize: 'lg',
        fontWeight: 'semibold',
      },
      body: {
        fontSize: 'md',
        fontWeight: 'normal',
      },
      label: {
        fontSize: 'sm',
        fontWeight: 'medium',
      },
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
