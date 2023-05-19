import { create } from "zustand";
import { IProduct } from "./components/ProductList";

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  setQuery: (query: string) => set(() => ({ query })),
}));

export interface ICartProduct extends IProduct {
  count: number;
}

interface SearchState {
  query: string;
  setQuery: (query: string) => void;
}

interface CartState {
  cart: ICartProduct[];
  clearCart: () => void;
  addToCart: (product: IProduct) => void;
  removeItem: (productId: string) => void;
  addProductOnce: (productId: string) => void;
  removeProductOnce: (productId: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  clearCart: () => set({ cart: [] }),
  addToCart: (product: IProduct) =>
    set((state) => {
      const productExistsInCart = state.cart.find(
        (item: IProduct) => item.id === product.id
      );

      if (productExistsInCart) {
        const updateCart = state.cart.map((cartProduct: ICartProduct) => {
          return cartProduct.id === product.id
            ? { ...cartProduct, count: cartProduct.count + 1 }
            : cartProduct;
        });

        return { cart: updateCart };
      }

      const newProduct = { ...product, count: 1 };
      return { cart: [...state.cart, newProduct] };
    }),

  removeItem: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item: ICartProduct) => item.id !== productId),
    })),

  addProductOnce: (productId) =>
    set((state) => {
      const updateCart: ICartProduct[] = state.cart.map(
        (product: ICartProduct) => {
          if (product.id !== productId) return product;
          return { ...product, count: product.count + 1 };
        }
      );

      return { cart: updateCart };
    }),

  removeProductOnce: (productId: string) =>
    set((state) => {
      const updateCart: ICartProduct[] = state.cart.map(
        (product: ICartProduct) => {
          if (product.id !== productId) return product;
          return { ...product, count: Math.max(1, product.count - 1) };
        }
      );

      return { cart: updateCart };
    }),
}));
