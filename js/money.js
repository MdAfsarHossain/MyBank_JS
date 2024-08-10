// const depositInput = document.getElementById('deposit-input');
// const withdrawInput = document.getElementById('withdraw-input');
// const deposit = document.getElementById('total-deposit');
// const withdraw = document.getElementById('total-withdraw');
// const balance = document.getElementById('total-balance');

// Take money from the input field
function getBalanceFromInputFiled(inputFiled) {
    const balanceString = document.getElementById(inputFiled);
    const balance = parseFloat(balanceString.value);
    
    balanceString.value = '';
    return balance;
}


// Take money from the text field
function getBalanceFromTextField(textField) {
    const balanceString = document.getElementById(textField);
    const balance = parseFloat(balanceString.innerText);

    return balance;
}


// Update balance in the text field
function updateBalanceToTextField(textField, balance) {
    document.getElementById(textField).innerText = balance;
}

function checkError(text, balance) {
    if(isNaN(balance) || balance < 0) {
        alert('Invalid ' + text +  ' amount!');
        return true;
    }
}

// Deposite input
document.getElementById('deposit-btn').addEventListener('click', function() {
    const newDeposit = getBalanceFromInputFiled('deposit-input'); 

    if(checkError('Deposit', newDeposit)) {
        return;
    }

    const currentDeposit = getBalanceFromTextField('deposit-field');
    const balance = getBalanceFromTextField('balance-field');

    const newTotalDeposit = currentDeposit + newDeposit;
    const newBalance = newDeposit + balance;

    updateBalanceToTextField('deposit-field', newTotalDeposit);
    updateBalanceToTextField('balance-field', newBalance);
})



// Withdraw input
document.getElementById('withdraw-btn').addEventListener('click', () => {
    const newWithdraw = getBalanceFromInputFiled('withdraw-input');

    
    if(checkError('Withdraw', newWithdraw)) {
        return;
    }

    const currentWithdraw = getBalanceFromTextField('withdraw-field');
    const balance = getBalanceFromTextField('balance-field');
    
    if(newWithdraw > balance) {
        alert('Insufficient funds!');
        return;
    }
    
    const totalWithdraw = currentWithdraw + newWithdraw;
    const newBalance = balance - newWithdraw;

    updateBalanceToTextField('withdraw-field', totalWithdraw);
    updateBalanceToTextField('balance-field', newBalance);
})

