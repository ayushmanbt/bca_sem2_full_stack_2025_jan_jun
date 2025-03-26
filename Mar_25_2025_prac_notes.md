# 25th march 2025 class notes

Make a website to bring data from third party API and show it

In this we have used jokesAPI - https://sv443.net/jokeapi/v2/

## Things we learnt about in this class

### Callback functions

Callback functions are functions which call back a function which is passed as a parameter to another function

```js
function a(b){
    b() //a is calling back function b passed as a parameter
}

function c(){
    console.log("hello")
}

a(c)
```

### setTimeout vs setInterval

setTimeout calls the callback function after a certain time for 1 time

```js
setTimeout(() => {
    console.log("hello world") //prints one time "hello world" after 1 second
},1000) //the time is passed in milliseconds so 1000 means 1 second
```

setInterval calls the callback function at the given interval repeatedly
```js
setInterval(() => {
    console.log("hello world") //prints "hello world" every 1 second
},1000) // this also tells time in milliseconds
```

### Promises

You can use javascript promises to handle something which may or may not work.

Success is known as `resolve`
Failure is known as `reject`

Here is a sample promise

```js
//we declared a function so that we can call it
let samplePromise = () => new Promise((resolve, reject) => { // promise has a callback function with two params resolve and reject which we call with a value to resolve or reject a promise
    if(Math.random() > 0.5){ //using math.random to simulate random error
        resolve("success")
    }
    else{
        reject("Failure")
    }
})
```

API requests use promises as their base. 

### Fetch API

We can use the fetch function to fetch API requests