import type { SlotRecipeConfig } from '@chakra-ui/react';
import { selectRecipe } from './select.recipe';
import { headerRecipe } from './header.recipe';

export const slotRecipes: Record<string, SlotRecipeConfig> = {
  NativeSelect: selectRecipe,
  Header: headerRecipe,
};
