let output = document.getElementById('Display-bar');
let allowComa = true;

function numbers(yourVal) {
    output.value = output.value + yourVal;
    allowComa = true;
}

function operators(yourVal) {
    output.value = output.value + yourVal;
    allowComa = true
}

//To allow only one decimal to be placed 
function decimal(yourVal) {
    if(allowComa === true) {
        output.value = output.value + yourVal;
        allowComa = false;
    }
}

// Delete function
function del() {
    output.value = output.value.slice(0, -1);
    allowComa = true;
}

//Equal function
function equal() {
    try {
        output.value = eval(output.value)
    }
    catch(err) {
        output.value = "ERROR"
    }
    allowComa = true; 
}

//AC function
function clr() {
    output.value = "";
    output.value = output.value + yourVal;
    allowComa = true;
}
