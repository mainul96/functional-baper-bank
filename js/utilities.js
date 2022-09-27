function getInputValue(inputValue){
    const inputValueString = document.getElementById(inputValue);
    const inputFieldValue = inputValueString.value;
    const userInputValue = parseFloat(inputFieldValue);
    inputValueString.value = '';
    return userInputValue;
}

function getInnerText(innerText){
    const depositAmount = document.getElementById(innerText);
    const depositText = depositAmount.innerText;
    const depositBlance = parseFloat(depositText);
    return depositBlance;
}
function setInnerText(innerId, total){
    const innerInfo = document.getElementById(innerId);
    innerInfo.innerText = total;
}
