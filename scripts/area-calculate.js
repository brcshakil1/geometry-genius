function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValue = baseField.value;
    const base = parseFloat(baseValue);
    console.log(base);

    // get triangle base value
    const heightFiled = document.getElementById('triangle-height');
    const heightValue = heightFiled.value;
    const height = parseFloat(heightValue);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area)

    // show triangle area
    const triangleAreaField = document.getElementById('triangle-area');
    triangleAreaField.innerHTML = `${area} cm<sup>2</sup>`
}

function calculateRectangleArea() {
    // get triangle base value
    const widthField = document.getElementById('rectangle-width');
    const widthValue = widthField.value;
    const width = parseFloat(widthValue);
    console.log(width);

    // get triangle base value
    const lengthFiled = document.getElementById('rectangle-length');
    const lengthValue = lengthFiled.value;
    const length = parseFloat(lengthValue);
    console.log(length);

    const area = width * length;
    console.log(area)

    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerHTML = `${area} cm<sup>2</sup>`
}