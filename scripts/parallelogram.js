function parallelogramCalculateArea(){
    const base = getInputValueById('parallelogram-base')
    const height = getInputValueById('parallelogram-height')

    const area = base * height
    console.log(area)
    setInnerTextById('parallelogram-area', area)
}

function getInputValueById(inputValue){
    const inputField = document.getElementById(inputValue);
    const inputFieldValue = inputField.value;
    const Value = parseFloat(inputFieldValue)
    return Value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}