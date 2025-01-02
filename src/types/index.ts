export interface Quote {
  text: string;
  font: string;
  fontSize: number;
  color: string;
  alignment: 'left' | 'center' | 'right';
  background: string;
}

export interface Template {
  id: string;
  name: string;
  background: string;
  font: string;
  preview: string;
}