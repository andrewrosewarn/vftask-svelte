import { derived, writable } from "svelte/store";
import type { Product } from "./interfaces/Product";

interface Cart {
  items: Product[];
}

const store = writable<Cart>({
  items: [],
});

function createCart() {
  return {
    subscribe: store.subscribe,
    addItem: (item: Product) => {
      store.update((cart) => ({ ...cart, items: [...cart.items, item] }));
    },
    removeItem: (item: Product) => {
      store.update((cart) => ({
        ...cart,
        items: cart.items.filter((i) => i.id !== item.id),
      }));
    },
  };
}

export const cart = createCart();

export const noOfItems = derived(store, ($store) => $store.items.length);
export const cartTotal = derived(store, ($store) =>
  $store.items.reduce((total, item) => (total += item.price), 0)
);
