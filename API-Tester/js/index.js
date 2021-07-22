console.log('Working');

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

let addParamCount = 0;

let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = 'none';

let jsonRadio = document.getElementById('json');
jsonRadio.addEventListener('click', () => {

    let jsonBox = document.getElementById('jsonBox');
    jsonBox.style.display = 'block';

    let parameterBox = document.getElementById('parameterBox');
    parameterBox.style.display = 'none';
})

let customRadio = document.getElementById('custom');
customRadio.addEventListener('click', () => {
    let jsonBox = document.getElementById('jsonBox');
    jsonBox.style.display = 'none';

    let parameterBox = document.getElementById('parameterBox');
    parameterBox.style.display = 'flex';
})

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');

    let textString = `<div>
                            <label for="url">Parameter ${addParamCount + 2}</label>
                            <input type="text" id="inputkey" placeholder="Enter ${addParamCount + 2} Key">
                            <input type="text" id="inputvalue" placeholder="Enter ${addParamCount + 2} Value">
                        </div>`

    let paramElement = getElementFromString(textString);
    params.appendChild(paramElement);
    addParamCount++;
})

