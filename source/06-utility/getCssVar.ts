/**
 * Gets the value of CSS custom properties set at the :root
 */
function getCssVar(property: string): string {
  // :root
  const root = getComputedStyle(document.body);
  return root.getPropertyValue(`--${property}`);
}

export default getCssVar;
