declare const parseSize: (
  /** Input size value */
  input: any,

  /**
   * Surports: 'em', 'ex', '%', 'px', 'cm', 'mm', 'in', 'pt', 'pc',
  'ch','rem','vh','vw','vmin','vmax'
   *
   * @default 'px'
   */
  defaultUnit?:
    | "em"
    | "ex"
    | "%"
    | "px"
    | "cm"
    | "mm"
    | "in"
    | "pt"
    | "pc"
    | "ch"
    | "rem"
    | "vh"
    | "vw"
    | "vmin"
    | "vmax"
) => string;

export = parseSize;
