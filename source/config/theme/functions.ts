import { BaseTheme } from './theme';
import {
  Palette,
  FontFamily,
  FontSize,
  FontWeight,
  Breakpoint,
  Constraint,
  SpacingUnit,
  LineHeight,
} from './types';

export interface ThemeProps {
  theme: BaseTheme;
}

/**
 * Helper type for theme accessors. An accessor is a shorthand function to access the theme
 * object using what is hopefully a convenient shorthand.
 *
 * For example, one can refer to a palette value like so:
 *
 * ```ts
 * const Blue = styled('div')`
 *   color: ${palette('blue', 'light')};
 * `;
 * ```
 *
 * @typeparam T The expected output type of this function (typically `number`, `string`, or a subtype).
 */
export type ThemeFunction<T, TP = unknown> = (props: ThemeProps & TP) => T;

/**
 * Palette accessor.
 *
 * @param color A key of the palette, such as `'gold'`
 * @param shade The shade of this color, such as `'light'`
 *
 * @example <caption>Using `palette` with `styled`</caption>
 * const Foo = styled('p')`
 *  color: ${palette('blue', 'light')};
 * `;
 */
export function palette<
  Color extends keyof Palette,
  Shade extends keyof Palette[Color],
>(color: Color, shade: Shade): ThemeFunction<Palette[Color][Shade]> {
  return props => props.theme.palette[color][shade];
}

/**
 * Font family accessor.
 *
 * @param family The font family to use
 *
 * @example <caption>Using `fontFamily` with `styled`</caption>
 * const Foo = styled('p')`
 *  font-family: ${fontFamily('base')};
 * `
 */
export function fontFamily(family: FontFamily): ThemeFunction<string> {
  return props => props.theme.typography.fontFamily[family];
}

/**
 * Font size accessor.
 *
 * @param size The font size to use
 *
 * @example <caption>Using `fontSize` with `styled`</caption>
 * const Foo = styled('p')`
 *  font-family: ${fontSize(3)};
 * `
 */
export function fontSize(size: FontSize): ThemeFunction<string> {
  return props => props.theme.typography.fontSize[size];
}

/**
 * Font weight accessor.
 *
 * @param weight The font weight to use
 *
 * @example <caption>Using `fontWeight` with `styled`</caption>
 * const Foo = styled('p')`
 *   font-weight: ${fontWeight('bold')};
 * `;
 */
export function fontWeight(weight: FontWeight): ThemeFunction<number> {
  return props => props.theme.typography.fontWeight[weight];
}

/**
 * Line Height accessor.
 *
 * @param height The line height to use
 *
 * @example <caption>Using `fontWeight` with `styled`</caption>
 * const Foo = styled('p')`
 *   font-weight: ${fontWeight('bold')};
 * `;
 */
export function lineHeight(height: LineHeight): ThemeFunction<number> {
  return props => props.theme.typography.lineHeight[height];
}

/**
 * Accessor for breakpoints. This is a lower-level function than [[media]].
 *
 * @param point The breakpoint name
 *
 * @example <caption>Using `breakpoint` with `styled`</caption>
 * ```
 * const Foo styled('div')`
 *   @media (min-width: ${breakpoint('tablet')}) {
 *   }
 * `;
 * ```
 */
export function breakpoint(point: Breakpoint): ThemeFunction<string> {
  return props => props.theme.breakpoint[point];
}

/**
 * Helper to construct a media query.
 *
 * @param point The breakpoint name
 *
 * @example <caption>Using `media` with `styled`</caption>
 * ```
 * const Foo = styled('div')`
 *   ${media('tablet')} {
 *     max-width: 123px;
 *   }
 * `;
 * ```
 */
export function media(point: Breakpoint): ThemeFunction<string> {
  return props => `@media (min-width: ${breakpoint(point)(props)})`;
}

/**
 * Accessor for constraints.
 *
 * @param value The constraint name
 *
 * @example <caption>Using `constraint` with `styled`</caption>
 * ```
 * const Foo = styled('div')`
 *   max-width: ${constraint('dialog')}
 * `;
 * ```
 */
export function constraint(value: Constraint): ThemeFunction<string> {
  return props => props.theme.constraint[value];
}

/**
 * Spacing accessor.
 *
 * @param unit The unit of spacing to use
 *
 * @example <caption>Using `spacing` with `styled`</caption>
 * const Foo = styled('p')`
 *   margin-bottom: ${spacing(2)}
 * `;
 */
export function spacing(unit: SpacingUnit): ThemeFunction<string> {
  return props => props.theme.spacing[unit];
}
