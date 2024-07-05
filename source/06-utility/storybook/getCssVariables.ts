// TypeScript doesn't know yet about CSSLayerBlockRule, which extends
// CSSGroupingRule, so we fake it.
type CSSRulesWithLayers = CSSRule | CSSGroupingRule;

const isCSSStyleRule = (val: CSSRule): val is CSSStyleRule =>
  val instanceof CSSStyleRule;

function getCssVariables(): string[][] {
  return Array.from(document.styleSheets)
    .map(sheet => {
      const rules: CSSRulesWithLayers[] = Array.from(sheet.cssRules);
      return rules.map(r => {
        if ('cssRules' in r && r.cssRules.length > 0) {
          return Array.from(r.cssRules);
        }
        return r;
      });
    })
    .reduce((allStyles, sheet) => {
      return allStyles.concat(
        sheet
          .flat()
          .filter(isCSSStyleRule)
          .reduce((cssVars, rule) => {
            const props = Array.from(rule.style)
              .map(propName => [
                propName.trim(),
                rule.style.getPropertyValue(propName).trim(),
              ])
              .filter(([propName]) => propName.indexOf('--') === 0);
            return [...cssVars, ...props];
          }, [] as string[][]),
      );
    }, [] as string[][]);
}

export default getCssVariables;
