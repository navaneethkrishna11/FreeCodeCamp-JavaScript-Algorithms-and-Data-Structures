function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    { name: "PENNY", value: 1 },
    { name: "NICKEL", value: 5 },
    { name: "DIME", value: 10 },
    { name: "QUARTER", value: 25 },
    { name: "ONE", value: 100 },
    { name: "FIVE", value: 500 },
    { name: "TEN", value: 1000 },
    { name: "TWENTY", value: 2000 },
    { name: "ONE HUNDRED", value: 10000 }
  ];

  let changeToGive = (cash * 100 - price * 100);
  let change = [];
  let totalInDrawer = 0;

  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    const currencyUnit = currencyUnits[i];
    const unitName = currencyUnit.name;
    const unitValue = currencyUnit.value;

    const availableAmount = cid[i][1] * 100;
    totalInDrawer += availableAmount;

    const amountToGive = Math.min(changeToGive, availableAmount);
    const numUnits = Math.floor(amountToGive / unitValue);
    const amountGiven = numUnits * unitValue / 100;

    if (numUnits > 0) {
      change.push([unitName, amountGiven]);
      changeToGive -= amountGiven * 100;
    }
  }

  if (changeToGive === 0) {
    if (totalInDrawer === cash * 100 - price * 100) {
      return { status: "CLOSED", change: cid };
    } else {
      return { status: "OPEN", change: change };
    }
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));
