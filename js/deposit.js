document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    // console.log(depositAmount);

    if (isNaN(newDepositAmount)) {
        alert('please provide valid number!');
        depositField.value = '';
        return;
    }

    // get the current deposit amount
    // for non input field use innerText to get the value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    // console.log(depositTotal)

    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    depositTotalElement.innerText = currentDepositTotal;
    depositField.value = '';

    // add in balance
    document.getElementById('balance-total').innerText = parseFloat(document.getElementById('balance-total').innerText) + parseFloat(newDepositAmount);
    // 
    // const balanceField = document.getElementById('balance-total');
    // const previousBalance = balanceField.innerText;

    // const currentBalance = parseFloat(previousBalance) + parseFloat(newDepositAmount);
    // balanceField.innerText = currentBalance;

    // now withdraw---------------
})

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    if (isNaN(newWithdrawAmount)) {
        alert('please provide valid number!');
        withdrawField.value = '';
        return;
    }


    // check balance
    if (newWithdrawAmount > parseFloat(document.getElementById('balance-total').innerText)) {
        withdrawField.value = '';
        alert('Insufficient Balance!!')
        return;
    }
    else {
        // add in withdraw field
        document.getElementById('withdraw-total').innerText = parseFloat(document.getElementById('withdraw-total').innerText) + newWithdrawAmount;
        withdrawField.value = '';

        // 
        // minus from balance
        document.getElementById('balance-total').innerText = parseFloat(document.getElementById('balance-total').innerText) - newWithdrawAmount;
    }

})