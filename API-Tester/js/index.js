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
addParam.addEventListener('click', (e) => {
    e.preventDefault();
    let params = document.getElementById('params');

    let textString = `<div>
                            <label for="url">Parameter ${addParamCount + 2}</label>
                            <input type="text" id="inputkey${addParamCount + 2}" placeholder="Enter ${addParamCount + 2} Key">
                            <input type="text" id="inputvalue${addParamCount + 2}" placeholder="Enter ${addParamCount + 2} Value">
                            <button class="deleteParam">-</button>
                        </div>`

    let paramElement = getElementFromString(textString);
    params.appendChild(paramElement);

    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {

            e.target.parentElement.remove();
        })
    }
    addParamCount++;
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('responsePrism').innerHTML = "Fetching Response, Please wait! .....";

    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    if (contentType == 'custom') {
        data = {};
        for (i = 0; i < addParamCount + 1; i++) {
            if (document.getElementById('inputkey' + (i + 1)) != undefined) {
                let key = document.getElementById('inputkey' + (i + 1)).value;
                let value = document.getElementById('inputvalue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('reqJson').value;
    }

    //for debugging
    console.log(url);
    console.log(requestType);
    console.log(contentType);
    console.log(data);

    if (requestType == 'Get') {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    }

    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.text())
            .then((text) => {
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });

    }
});
