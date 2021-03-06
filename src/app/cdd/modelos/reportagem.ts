export interface Reportagem {
  id: string;
  title: string;
  link: [{ ref: string, texto: string }];
  img : string,
  publishDate: string;
  source: string;
  resumo: string;
  cols: number;
  rows: number;
}
