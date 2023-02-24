declare module 'gesso' {
  interface GessoComponent {
    modifierClasses?: string | string[];
  }

  interface ConstrainComponent extends GessoComponent {
    hasConstrain?: boolean;
    constrainClasses?: string | string[];
  }

  export type { GessoComponent, ConstrainComponent };
}

declare module '!!raw-loader!*' {
  const content: string;
  export default content;
}
