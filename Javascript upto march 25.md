# Things we learnt

- How to declare variables - `let` keyword
- Difference between `let`, `var` and `const`
- Different datatypes in JS - 
    - Number - 1, 2, 22.6, not a number aka `NaN` is also a number
    - String - "hello", "a", "abc", "123"
    - Null 
    - Undefined
    - Object - {}
    - Boolean - true, false
- Document Object Model (DOM) - access with `document` and Browser Object Model (BOM) - access with `window`
- There are the usual operators - `+`,`-`,`*`,`/`,`%`
- There is a `Math` library to perform mathematical operations
- There is a `...` (Spread) operator you can use to spread the object keys and values and array elements in a new object or array.

  ```js
  let x = [1,2,3]
  let y = [4,5,6]
  let z = [...x,...y] // [1,2,3,4,5,6] - one dimensional array
  let a = [x,y] // [[1,2,3],[4,5,6]] - two dimensional array
  ```

- counting in array starts from 0
- Deep copy vs Shallow Copy - see [March 20 code](./Mar_20_code/)

- In JS we have the usual if else statement and comparison operators. The only different ones are `==` and `===` where `==` does not consider data type and considers `1 == "1"` to be `true`, `===` considers the data type. So `1 === "1"` is considered `false`

- There is logical and - `&&` and logical or - `||` in JS

(Let me know if I missed to mention about anything here)