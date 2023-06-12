import { createContext } from "react";

const StoreContext = createContext({
  count: { coffee: 0, tea: 0, milk: 0, coke: 0, beer: 0, price: 0 },
  totalCount: 0,
  prices: 0,
  /**
   *
   * @param {'coffee' | 'tea' | 'milk' | 'coke' | 'beer'} key
   */
  updateCount: (key) => {},
});

export default StoreContext;
