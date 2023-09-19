/**
 * TODO
 */
function getCssVar(property: string): string {
  // :root
  const root = getComputedStyle(document.body);
  return root.getPropertyValue(`--${property}`);
}

export default getCssVar;
