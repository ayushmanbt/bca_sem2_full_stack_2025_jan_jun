# March 5 2025, Introduction to Javascript

- Javascript is an interpreted language
- Javascript can be linked with HTML with the following line - `<script src="source of script"></script>`
- You can also write JS inside the script tags, in that case don't mention the source -
  ```HTML
  <script>
    alert(1);
  </script>
  ```
- We can run javascript in our browsers by opening the inspect window and going to the console tab. 
- Javascript runs on an engine. Every browser has their JS engine. The JS engine for chrome is V8 (not the car one)
- JS is mainly used to make our websites interacitve. 
- We have access to Document Object Model (DOM) in javascript with the `document` variable.
- There is also the Browser Object Model (BOM) which is referenced by the `window` variable.
  - The browser object can be used to do window related tasks like opening and closing window
  - BOM can be used to get the address of the current page and navigate to the next page
- We can get elements from the document using 
    - `document.getElementById("id")` - gets the element with the given ID
    - `document.getElementsByClassName("class")` - gets all the elements with the given class name
- We can use `element.addEventListener("event name", function)` to handle DOM events in JS. You can get a full list of HTML events in - https://developer.mozilla.org/en-US/docs/Web/Events
- based on DOM events we can do different things, in today's class we did an `alert()` (A function to show a popup)  from our page. See at [Mar_5_code](./Mar_5_code/)


## Bonus section

Story of rebeccapurple - #663399 - https://en.wikipedia.org/wiki/Eric_A._Meyer
