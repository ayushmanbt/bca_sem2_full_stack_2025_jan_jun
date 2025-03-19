let numberHolder = document.getElementById('number');

let number = 0

function decrease() { 
    number = number - 1
    numberHolder.innerHTML = number;
}

// Alternative way of declaring this function as a variable

// let decrease = () => {
//     number = number - 1
//     numberHolder.innerHTML = number;
// }    

function increase() { 
    number = number + 1
    numberHolder.innerHTML = number;
}