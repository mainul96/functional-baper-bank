
document.getElementById('btn-deposit').addEventListener('click', function(){
const newValue = getInputValue('deposit-feild');
const innerTextAmount = getInnerText('deposit-amount');
const totalDepositAmount = innerTextAmount + newValue;

setInnerText('deposit-amount', totalDepositAmount);

const totalBlanceDeposit = getInnerText('blance-total');
const totalBlance = newValue + totalBlanceDeposit;
setInnerText('blance-total', totalBlance);


})
