
function calculateTraingleArea(){
    // triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const baseText = triangleBaseInput.value;
    const base = parseFloat(baseText);
    console.log(base); 

    // triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const heightText = triangleHeightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // triangle area
    const area = 0.5 * base * height;
    const displayTriangleArea = document.getElementById('triangle-area');
    displayTriangleArea.innerText = area;
}

// rectangle
function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const widthText = rectangleWidthInput.value;
    const width = parseFloat(widthText);

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const lengthText = rectangleLengthInput.value;
    const length = parseFloat(lengthText);

    const area = width * length;
    const displayRectangleArea = document.getElementById('rectangle-area');
    displayRectangleArea.innerText = area;

}

// parallelogram
function calculateParallelogramArea(){
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const baseText = parallelogramBaseInput.value;
    const base = parseFloat(baseText);

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const heightText = parallelogramHeightInput.value;
    const height = parseFloat(heightText);

    const area = base * height;
    const displayParallelogramArea = document.getElementById('parallelogram-area');
    displayParallelogramArea.innerText = area;
}

// Rhombus

function calculateRhombusArea(){
    const d1Input = document.getElementById('diagonal-1');
    const d1Text = d1Input.value;
    const diagonal1 = parseFloat(d1Text);
    
    const d2Input = document.getElementById('diagonal-2');
    const d2Text = d2Input.value;
    const diagonal2 = parseFloat(d2Text);

    const area = 0.5 * diagonal1 * diagonal2;
    const displayRhombusArea = document.getElementById('rhombus-area');
    displayRhombusArea.innerText = area;
}

// pentagon
function calculatePentagonArea(){
    const perimeterInput = document.getElementById('perimeter');
    const perimeterText = perimeterInput.value;
    const perimeter = parseFloat(perimeterText);

    const apothemInput = document.getElementById('apothem');
    const apothemText = apothemInput.value;
    const apothem = parseFloat(apothemText);

    const area = 0.5 * perimeter * apothem;
    const displayPentagonArea = document.getElementById('pentagon-area');
    displayPentagonArea.innerText = area;
}

// ellipse
function calculateEllipseArea(){
    const majorInput = document.getElementById('major');
    const majorText = majorInput.value;
    const major = parseFloat(majorText);

    const minorInput = document.getElementById('minor');
    const minorText = minorInput.value;
    const minor = parseFloat(minorText);

    const area = (22/7) * major * minor;
    const displayEllipseArea = document.getElementById('ellipse-area');
    displayEllipseArea.innerText = area;
}