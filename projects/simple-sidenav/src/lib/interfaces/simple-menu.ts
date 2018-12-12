export interface SimpleMenu {
  id?: string|number;
  name?: string;
  icon?: string;
  menu?: Array<SimpleMenu>;
}
