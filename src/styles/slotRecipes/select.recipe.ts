import { defineSlotRecipe } from '@chakra-ui/react';

export const selectRecipe = defineSlotRecipe({
  className: 'custom-select',
  slots: ['root', 'field', 'indicator'],
  base: {
    root: {
      width: '100%',
      position: 'relative',
    },
    field: {
      width: '100%',
      padding: '8px 12px',
      borderWidth: '1px',
      borderColor: 'gray.200',
      borderRadius: 'md',
      backgroundColor: 'white',
      fontSize: 'sm',
      _disabled: {
        backgroundColor: 'gray.50',
        opacity: 0.7,
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {},
});
