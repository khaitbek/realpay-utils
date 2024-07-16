export const formatToAmount = (
  balance: number | string | null,
  hasDecimal = true,
) => {
  // if balance is null or undefined, we return empty string
  if (balance !== 0 && (balance === undefined || balance === null)) return;
  // 2200055 to 22 000.55
  const formatBalanceAsNumber = Number(balance);

  const determineDecimal = hasDecimal
    ? formatBalanceAsNumber / 100
    : formatBalanceAsNumber;

  return determineDecimal
    .toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,/g, " ");
};
