import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { slotRecipes } from './slotRecipes';
import { recipes } from './recipes';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          900: { value: '#1a365d' },
          800: { value: '#153e75' },
          700: { value: '#2a69ac' },
        },
      },
    },
    slotRecipes,
    recipes,
  },
});

export default createSystem(defaultConfig, config);
