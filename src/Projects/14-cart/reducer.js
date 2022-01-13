const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "CLEAR_CART") return { ...state, cart: [] };
  if (type === "REMOVE_ITEM") return { ...state, cart: state.cart.filter((v) => v.id !== payload) };
  if (type === "INCREASE") return { ...state, cart: changeAmount(state.cart, payload, 1) };
  if (type === "DECREASE") return { ...state, cart: changeAmount(state.cart, payload, -1) };
  if (type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cTotal, item) => {
        const { price, amount } = item;
        cTotal.amount += amount;
        cTotal.total += amount * price;
        return cTotal;
      },
      { total: 0, amount: 0 }
    );

    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (type === "LOADING") return { ...state, loading: true };
  if (type === "DISPLAY_ITEMS") return { ...state, loading: false, cart: payload };

  throw new Error("no matching action");
};
export default reducer;

const changeAmount = (cart, id, amount) => {
  return cart
    .map((item) => (item.id === id ? { ...item, amount: item.amount + amount } : item))
    .filter((item) => item.amount > 0);
};
