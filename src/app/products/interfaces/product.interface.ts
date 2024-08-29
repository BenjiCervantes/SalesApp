export interface Product {
  id:           string;
  name:         string;
  description:  string;
  details?:     string;
  price:        number;
  imgUrlList:   string[];
  trademark:    string;
  content:      number;
  measurement:  Measurement;
}

export enum Measurement {
  mililiters = 'mililitros',
  grams      = 'gramos',
  ounce      = 'onzaz',
  piece      = 'pieza',
  pieces     = 'piezas',
  pair       = 'par'
}
