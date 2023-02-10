/**
 * Helper to construct a min-width media query.
 *
 * @param point The breakpoint
 *
 * @example <caption>Using `mediaMin` with `styled`</caption>
 * ```
 * const Foo = styled('div')`
 *   ${mediaMin(BREAKPOINT.tablet)} {
 *     max-width: 123px;
 *   }
 * `;
 * ```
 */
export function mediaMin(point: string): string {
  return `@media (min-width: ${point})`;
}

/**
 * Helper to construct a max-width media query.
 *
 * @param point The breakpoint
 *
 * @example <caption>Using `mediaMax` with `styled`</caption>
 * ```
 * const Foo = styled('div')`
 *   ${mediaMax(BREAKPOINT.tablet)} {
 *     width: 100%;
 *   }
 * `;
 * ```
 */
export function mediaMax(point: string): string {
  return `@media (max-width: ${point})`;
}
