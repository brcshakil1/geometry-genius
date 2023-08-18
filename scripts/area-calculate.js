function calculateTriangleArea() {
    // get triangle base value
    const base = inputValue('triangle-base');

    // get triangle base value
    const height = inputValue('triangle-height');

    // validation input base and height
    if(isNaN(base) || isNaN(height)) {
        alert("Please insert number.");
        return;
    }

    const area = 0.5 * base * height;
    // show triangle area
    setElementInnerText('triangle-area', area);
    addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea() {
    // get rectangle width value
    const width = inputValue('rectangle-width');

    // get rectangle length value
    const length = inputValue('rectangle-length');

    // validate input width and length
    if(isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        return;
    }

    const area = width * length;

    // show rectangle area
    setElementInnerText('rectangle-area', area);
    addToCalculationEntry('Rectangle', area);
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
    addToCalculationEntry('Parallelogram',area)
}

function calculateEllipseArea() {
    const majorRadius = inputValue('ellipse-major-radius');
    const minorRadius = inputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius  * minorRadius;
    const areaToDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaToDecimal)
    addToCalculationEntry('Ellipse', area);
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

// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create and element you want to add
 * 3. if needed some class
 * 4.set inner HTML. it could be dynamic Template string
 * 5. append the created element as a child of the parent.
 */
function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' +area);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-secondary">Convert</button>`;
    calculationEntry.appendChild(p);
}

// data validation
/**
 * 1. set the proper type of the input field.
 * 2. check type using type of
 * 3. isNaN (NaN means not a number. isNaN is checking whether the input is not a number or not)
 */