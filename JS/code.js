let display = document.getElementById('display');

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                    display.innerText = eval(display.innerText);
                break;
            case 'Del':
                   display.innerText = display.innerText.slice(0, -1);
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

