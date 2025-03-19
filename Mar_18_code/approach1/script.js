let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let numberHolder = document.getElementById('number');

let number = 0

minusButton.addEventListener('click', function() { 
    number = number - 1
    numberHolder.innerHTML = number;
})

plusButton.addEventListener('click', function() { 
    number = number + 1
    numberHolder.innerHTML = number;
})