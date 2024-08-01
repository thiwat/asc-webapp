export type ListProps = {
  data: any[];
  className?: string;
  renderItem: (row: any, index: number) => React.ReactNode;
  extractKey: (row: any, index: number) => string;
}