export const CURRENCY_CHANGED = "CURRENCY_CHANGED";

// This action tell to the store that the currency have changed
export const currencyChanged = currency => ({
  type: CURRENCY_CHANGED,
  currency
});
