/**
 * Theme types.
 */
import { Theme } from '@emotion/react';

/**
 * Shorthand type for the theme object's palette.
 */
export type Palette = Theme['palette'];

/**
 * Color names (not shades) in the theme object's palette.
 */
export type Color = keyof Palette;

/**
 * Typography in the theme object.
 */
export type Typography = Theme['typography'];

/**
 * Shorthand type for the font families in the theme object.
 */
export type FontFamilies = Typography['fontFamily'];

/**
 * Names of the font families (e.g., `base`).
 */
export type FontFamily = keyof FontFamilies;

export type FontSizes = Typography['fontSize'];
export type FontSize = keyof FontSizes;

export type FontWeights = Typography['fontWeight'];
export type FontWeight = keyof FontWeights;

export type LineHeights = Typography['lineHeight'];
export type LineHeight = keyof LineHeights;

export type Breakpoints = Theme['breakpoint'];
export type Breakpoint = keyof Breakpoints;

export type Constraints = Theme['constraint'];
export type Constraint = keyof Constraints;

export type SpacingUnits = Theme['spacing'];
export type SpacingUnit = keyof SpacingUnits;
