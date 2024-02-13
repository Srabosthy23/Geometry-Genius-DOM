function rectangleCalculateArea(){
    // get rectangle weight value
    const rectangleWeightInput = document.getElementById('rectangle-weight');
    const rectangleWeightInputValue = rectangleWeightInput.value;
    const weight = parseFloat(rectangleWeightInputValue);

    // get rectangle length value
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthInputValue = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthInputValue);

    // get rectangle area
    const area = weight * length;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}