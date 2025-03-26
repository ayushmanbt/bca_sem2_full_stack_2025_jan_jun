const jokeContainer = document.getElementById('joke');
const fetchButton = document.getElementById('fetchButton');

fetchButton.addEventListener('click', () => {
    jokeContainer.innerHTML = 'Loading...';
    //disabling the button
    fetchButton.disabled = true;
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,explicit&type=single')
        .then(response => response.json())
        .then(data => {
            jokeContainer.innerHTML = data.joke;
        })
        .catch(error => {
            jokeContainer.innerHTML = 'An error occurred';
        })
        .finally(() => {
            //enabling the button
            fetchButton.disabled = false;
        });
});