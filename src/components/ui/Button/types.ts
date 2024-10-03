export type ButtonProps = {
  children: React.ReactNode;
  type: 'primary';
  htmlType: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}