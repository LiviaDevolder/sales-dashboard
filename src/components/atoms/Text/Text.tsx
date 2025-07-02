import {
  chakra,
  Text as ChakraText,
  type RecipeVariantProps,
  type TextProps as ChakraTextProps,
} from '@chakra-ui/react';
import { textRecipe } from '../../../styles/recipes/text.recipe';

export const Text = chakra(ChakraText, textRecipe);

type TextVariantProps = RecipeVariantProps<typeof textRecipe>;

export interface TextProps extends ChakraTextProps, TextVariantProps {}
