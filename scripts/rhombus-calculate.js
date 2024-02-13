function rhombusCalculateArea(){
    const d1 = getInputValueById('rhombus-d1')
    const d2 = getInputValueById('rhombus-d2')

    const area = 0.5 * d1 * d2  
    console.log(area)
    setInnerTextById('rhombus-area', area)
}

function getInputValueById(inputValue){
    const inputField = document.getElementById(inputValue);
    const inputFieldValue = inputField.value;
    const value = parseFloat(inputFieldValue)
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area
}