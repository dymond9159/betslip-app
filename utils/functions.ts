export const currencyFormat = (
  amount: number,
  currency: string,
  exchangeRate: number
) => {
  return currency === "coin"
    ? amount.toLocaleString()
    : `$${(amount * exchangeRate).toLocaleString()}`;
};
