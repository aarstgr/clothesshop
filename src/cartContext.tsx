import { createContext } from 'react';

export interface CartItemType {
  index:string;
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
  [key: string]: any;
  
}

export interface CartContextType {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (id: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  emptyCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateItemQuantity: () => {},
  emptyCart: () => {},
});