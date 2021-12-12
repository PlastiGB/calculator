let buttons = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let calculate = document.querySelector('#calc');
let cleaning = document.querySelectorAll('.cleaning');
let screen = document.querySelector('#screen');

let firstvalue;
let secondvalue;
let operator;
let result;

let input = '';
let opcheck = false;

buttons.forEach(item => {
    item.addEventListener('click', () => {

        if(item.value == '.')
        {

            if(screen.innerText.indexOf('.') > -1)
            {
                return;
            }

        }

        input += item.value;

        screen.innerText = input;

    });
})

operators.forEach(item => {
    item.addEventListener('click', () => {
        if(opcheck)
        {
            secondvalue = screen.innerText;
            
            operate(firstvalue, secondvalue, operator)
            
            operator = item.value;
            firstvalue = screen.innerText;
            input = '';
            
            return;
        }
        
        firstvalue = screen.innerText;
        operator = item.value;
        opcheck = true;

        screen.innerText = '';
        input = '';

        
    })
})

calculate.addEventListener('click', () => { 

    secondvalue = screen.innerText;
    opcheck = false;

    operate(firstvalue, secondvalue, operator);

})

cleaning.forEach(item => {
    
    switch(item.value){
        
        case 'AC':
            item.addEventListener('click', () => {
                firstvalue = '';
                secondvalue = '';
                operator = '';
                result = '';
                input = '';
                opcheck = false;
            
                screen.innerText = '';
            })
            break;
        
        case 'C':
            item.addEventListener('click', () => {
                input = screen.innerText.slice(0, -1)
                screen.innerText = input;
            })
            break;
    }
})

function operate(first, second, op)
{

    switch(op)
    {
        case '+':
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case '*':
            result = multiply(first, second);
            break;
        case '/':
            result = divide(first, second);
            break;
        case '^':
            result = exponent(first, second);
            break;
    }

    screen.innerText = result;

}

function add(a, b)
{
    let c = parseFloat(a) + parseFloat(b);
    return c;
}

function subtract(a, b)
{
    let c = a - b;
    return c;
}

function multiply(a, b)
{
    let c = a * b;
    return c;
}

function divide(a, b)
{
    let c = a / b;
    return c;
}

function exponent(a, b)
{
    let c = Math.pow(a, b);
    return c;
}