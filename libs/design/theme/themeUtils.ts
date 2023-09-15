export interface FontFace {
  src: string;
  fontWeight: number;
}

export const mkFontFace =
  (name: string) =>
  ({ fontWeight, src }: FontFace) => ({
    '@font-face': {
      fontFamily: name,
      src: `url('${src}') format("truetype")`,
      fontWeight,
    },
  });
