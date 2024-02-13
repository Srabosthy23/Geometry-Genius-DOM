function triangleCalculateArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseInputValue = triangleBaseInput.value;
    const base = parseFloat(triangleBaseInputValue);
    
    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightInputValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightInputValue);

    // get triangle area
    const area = 0.5 * base * height;

    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;
}
