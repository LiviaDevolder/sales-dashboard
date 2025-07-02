import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { slotRecipes } from './slotRecipes';
import { recipes } from './recipes';

const config = defineConfig({
  theme: {
    slotRecipes,
    recipes,
  },
});

export default createSystem(defaultConfig, config);
