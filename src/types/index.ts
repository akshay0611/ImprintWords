export interface Quote {
  text: string;
  font: string;
  fontSize: number;
  color: string;
  alignment: 'left' | 'center' | 'right';
  background: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

export interface Template {
  id: string;
  name: string;
  background: string;
  font: string;
  preview: string;
}