function getUrlParameterValue(url, parameter) {
    parameter  = parameter.replace(/\s{2,}/g, ' ').trim()
    let parameterString = url.split('?')[1];
    let paramArr = parameterString.split('&');
    for(let i=0; i<paramArr.length; i++) {
        let pair = paramArr[i].split('=');
        let key = pair[0];
        if(key === parameter) {
            console.log("Value is :",pair[1]);
        }
    }
    }

function myInput() {
    const url = document.getElementById('urlparameter').value;
    const parameter = document.getElementById('parameter').value;
    if(url != '' && parameter != '') {
        getUrlParameterValue(url,parameter)
    }
    else {
        alert("Enter proper URL and parameter")
    }
}