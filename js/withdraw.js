document.getElementById('btn-withdra').addEventListener('click', function(){
   
const totalWithdra = getInputValue('widthraw-feild');
const innerTextWithdraAmount = getInnerText('withdra-amount');
const totalWithdraAmount = totalWithdra + innerTextWithdraAmount;
setInnerText('withdra-amount', totalWithdraAmount);


const innerTextTotal = getInnerText('blance-total');
const result = innerTextTotal - totalWithdra;
setInnerText('blance-total', result);
})