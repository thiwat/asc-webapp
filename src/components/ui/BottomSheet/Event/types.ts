export type EventBottomSheetProps = {
  data?: any;
  qty?: number;
  isOpen?: boolean;
  onClose: () => void;
  onChangeQty?: (value: number) => void;
  onPlaceOrder?: () => void;
}