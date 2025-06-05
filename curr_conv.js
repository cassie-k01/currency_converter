const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
    RWF: 9.86,
    NRA: 1200,
    SHL: 2900,
};

document.getElementById('convertButton').addEventListener('click', () => {
    const currencyFrom = document.getElementById('currencyFrom').value.toUpperCase();
    const currencyTo = document.getElementById('currencyTo').value.toUpperCase();
    const amount = Number(document.getElementById('amount').value);

    if (currencies[currencyFrom] && currencies[currencyTo]) {
        const convertedAmount = (amount * currencies[currencyTo]) / currencies[currencyFrom];
        document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${currencyTo}`;
    } else {
        document.getElementById('result').innerText = "Currency not found!";
    }
});
