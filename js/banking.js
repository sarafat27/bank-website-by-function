//get input value
function getInputValue(inputID) {
    const InputField = document.getElementById(inputID);
    const inputAmountText = InputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    InputField.value = '';
    return amountValue;
}
//get and update current total
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
//get current balance
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const PreviousBalanceTotal = parseFloat(balanceTotalText);
    return PreviousBalanceTotal;
}
//update balance
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const PreviousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = PreviousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = PreviousBalanceTotal - amount;
    }
}

//deposit button handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('current-deposit', depositAmount);
        updateBalance(depositAmount, true);
    }
})

//withdraw button handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log('you can not withdraw more than what you have');
    }
})