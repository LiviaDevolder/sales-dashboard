import type { RecipeDefinition, RecipeVariantRecord } from '@chakra-ui/react';
import { textRecipe } from './text.recipe';

export const recipes: Record<string, RecipeDefinition<RecipeVariantRecord>> = {
  Text: textRecipe,
};
