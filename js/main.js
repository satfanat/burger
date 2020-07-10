function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {

    let showAmount = document.querySelector("span.show-amount");

    if (amountNumber > 10) { alert("Maximum 10 db terméket vásárolhat"); }
    else if (amountNumber < 1) { alert("Minimum 1 db terméket vásárolhat"); }
    else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}