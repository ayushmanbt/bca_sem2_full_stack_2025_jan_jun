// In javascript you can declare an object with the {}

let x = {
    name: "John",
    age: 20
}

console.log(x.name) // John

// We can also copy the information from one object to another object, but that leads to both referencing the same object
let y = x
x.name = "Jane"
console.log(y.name) // Jane

// To avoid this we can use the spread operator
let z = {...x}
x.name = "Jimmy"
console.log(z.name) // Jane


// but using spread operator only works for objects with 1 layer

let a = {
    name: "John",
    age: 20,
    address: {
        city: "New York",
        country: "USA"
    }
}

let b = {...a}

a.address.city = "San Francisco"
console.log(b.address.city) // San Francisco   

// To avoid this we can use the deep copy method
let c = JSON.parse(JSON.stringify(a))
a.address.city = "Los Angeles"
console.log(c.address.city) // San Francisco
