// This is JS code, you don't need to worry how it works
// it just shows you how the form data looks from the backend perspective

let checkbox_result = document.getElementById("checkbox_form_result");

document.getElementById("checkbox_form").addEventListener("submit", function(e) {
    checkbox_result.innerHTML = "";
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.forEach((value, key) => {
        checkbox_result.innerHTML += `<p>${key}: ${value}</p>`;
    })
})

let checkbox_result_2 = document.getElementById("checkbox_form_result_2");

document.getElementById("checkbox_form_2").addEventListener("submit", function(e) {
    checkbox_result_2.innerHTML = "";
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.forEach((value, key) => {
        checkbox_result_2.innerHTML += `<p>${key}: ${value}</p>`;
    })
})

let radio_result = document.getElementById("radio_form_result");

document.getElementById("radio_form").addEventListener("submit", function(e) {
    radio_result.innerHTML = "";
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.forEach((value, key) => {
        radio_result.innerHTML += `<p>${key}: ${value}</p>`;
    })
})

let radio_result_2 = document.getElementById("radio_form_result_2");

document.getElementById("radio_form_2").addEventListener("submit", function(e) {
    radio_result_2.innerHTML = "";
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.forEach((value, key) => {
        radio_result_2.innerHTML += `<p>${key}: ${value}</p>`;
    })
})


let dropdown_slider_result = document.getElementById("dropdown_slider_result");

document.getElementById("dropdown_slider").addEventListener("submit", function(e) {
    dropdown_slider_result.innerHTML = "";
    e.preventDefault();
    let form_data = new FormData(e.target);
    form_data.forEach((value, key) => {
        dropdown_slider_result.innerHTML += `<p>${key}: ${value}</p>`;
    })
})