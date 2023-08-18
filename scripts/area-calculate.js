function calculateTriangleArea() {
    // get triangle base value
    const base = inputValue('triangle-base');

    // get triangle base value
    const height = inputValue('triangle-height');

    const area = 0.5 * base * height;
    // show triangle area
    setElementInnerText('triangle-area', area);
}

function calculateRectangleArea() {
    // get triangle base value
    const width = inputValue('rectangle-width');

    // get triangle base value
    const length = inputValue('rectangle-length');

    const area = width * length;

    // show rectangle area
    setElementInnerText('rectangle-area', area);
}

function calculateParallelogramArea () {
    // get parallelogram base value
    const base = inputValue('parallelogram-base');

    // get parallelogram height value
    const height = inputValue('parallelogram-height');

    // get triangle area
    const area = base * height;
    
    // show parallelogram area
    setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea() {
    const majorRadius = inputValue('ellipse-major-radius');
    const minorRadius = inputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius  * minorRadius;
    setElementInnerText('ellipse-area',area)
}

// reusable function

function inputValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    inputField.value = '';
    return value

}

// reusable span, p, div etc text

function setElementInnerText(ElementId, area) {
    const element = document.getElementById(ElementId);
    element.innerHTML = `${area} cm<sup>2</sup>`;
}
