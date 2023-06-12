import { useMemo, useState } from "react";

export const MAP_PRICES = {
  coffee: 480,
  tea: 280,
  milk: 180,
  coke: 190,
  beer: 580,
};

function useCount() {
  const [count, setCount] = useState({
    coffee: 0,
    tea: 0,
    milk: 0,
    coke: 0,
    beer: 0,
  });

  const totalCount = useMemo(() => {
    return Object.values(count).reduce((total, c) => total + c, 0);
  }, [count]);

  const prices = useMemo(() => {
    return Object.entries(count).reduce(
      (total, [key, value]) => total + MAP_PRICES[key] * value,
      0
    );
  }, [count]);

  /**
   *
   * @param {'coffee' | 'tea' | 'milk' | 'coke' | 'beer'} key
   */
  const updateCount = (key) => {
    setCount({
      ...count,
      [key]: count[key] + 1,
    });
  };

  return {
    count,
    totalCount,
    prices,
    updateCount,
  };
}

export default useCount;
