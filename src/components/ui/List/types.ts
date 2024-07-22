export type ListProps = {
  data: any[];
  renderItem: (row: any, index: number) => React.ReactNode;
  extractKey: (row: any, index: number) => string;
}