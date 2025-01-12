# Class notes for 9th January 2025

In this class we talked about inputs and forms 

- `<form></form>` is an interactive HTML element which can handle submission automatically or manually
    - `action=` attribute in form can be used to denote where the form submission will go to for example we can mention the url "https://www.google.com" to handle the form submission. Default value of this attribute is "/" or the current page itself
    - `method=` we can mention the method used to handle the form submission. This can be "GET" (default value) or "POST" or other available request types
        - one problem with GET request is the form submissions show up in the URL so we genrally use `method="GET"` for **non sensitive** and **replicable** scenarios like search queries
        - using post request without a valid server setup is not possible as the client will not find any function handling the post request, but the data in post request does not show in the URL hence making it more secure for sensitive scenario like user login.
    - the `<input type="submit" value="text in button">` can be used to trigger the form submission with the value of this input tag showing in the button shown 

- `<input>` tag (a tag without any closing tag or self closing (self closing is required for something like react so in that case input looks like `<input ... />`))
    - `type` attribute in input is one of the key attributes which declares the `type` of the input field. A few of the noted value of type are -
        - `text` - the standerd text type
        - `password` - used to hide the letters being typed on the field
        - `submit` - used to create the submit button for the page. The text in the button is determined by the `value` field.
        - `email` - checks if we entered a valid email
        - `number` - used to enter numbers and gives numberpad for these inputs in mobile
        - A few others we will discuss in next class - `checkbox`, `radio`
    - `name` attribute is another key attribute for `input`. this name is the name shown against the value entered in the form field when the form is submitted.
    - `placeholder` - gives us a placeholder text
    - `required` - makes the form unsubmitable if this field is not filled.
    - `readonly` - makes the form field not editable **{NOT MENTIONED IN CLASS}**
    - `value` - gives a value to start with to the form field. 

- `<label for="id">label tag</label>` tag is used to display a label for input field. the for attribute accepts the id of an input field and clicking on the label focuses on the input field itself.

- `<textarea>` is used for big texts, its like `<input type="text">` but scalable.