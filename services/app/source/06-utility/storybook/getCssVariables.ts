function getCssVariables(): string[][] {
  return Array.from(document.styleSheets).reduce(
    (allStyles, sheet) =>
      allStyles.concat(
        Array.from(sheet.cssRules)
          .filter(r => r instanceof CSSStyleRule)
          .reduce((cssVars, rule) => {
            const props = Array.from((rule as CSSStyleRule).style)
              .map(propName => [
                propName.trim(),
                (rule as CSSStyleRule).style.getPropertyValue(propName).trim(),
              ])
              .filter(([propName]) => propName.indexOf('--') === 0);
            return [...cssVars, ...props];
          }, [] as string[][]),
      ),
    [] as string[][],
  );
}

export default getCssVariables;
