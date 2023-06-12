import Store from "./Store";

import useCount from "./hooks/useCount";

import StoreContext from "./store/context";

function App() {
  const { count, prices, totalCount, updateCount } = useCount();

  return (
    <StoreContext.Provider
      value={{
        count,
        prices,
        totalCount,
        updateCount,
      }}
    >
      <Store />
    </StoreContext.Provider>
  );
}

export default App;
