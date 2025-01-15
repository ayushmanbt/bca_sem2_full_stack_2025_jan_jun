# Practical notes for 13th January 2025

In this class we learnt a bit about CSS. All the source codes are available in the **Jan_14_code** folder.

- There are three ways to link CSS to HTML
    - using the `<link>` tag - `<link rel="stylesheet" href="link_to_stylesheet">`
    - using the `<style></style>` tag to write CSS in HTML
    - writing in-element CSS using the attribute `style`
- There are three main ways to reference an element in CSS 
    - using the tag of the element. For example: If we have a `<p></p>` tag in our webpage and we want to style that we use the `p{}` selector to style any and all `<p></p>` tags in the page
    - If we specifically want to target a few of the tags, but not all the tags of the same name the page or want to give same style to multiple tags we can use class
        - To add a class to an element we can use the `class` attribute. **Class names can not have space. and do not start them with numbers, and can use some symbols like "-" and "_"**. For example if we want to add a class of `style_1` to a `<p></p>` tag, it will look like - `<p class="style_1"></p>`
        - A tag can have multiple classes like - `<p class="style_1 style_2"></p>`. So the spaces denote different classes in HTML
        - To reference a class in CSS we use the `.class_name{}` notation to mention the class for example if we are referencing the class `hello` in CSS it will be like `.hello{}` 
    - If we specificallly want to select one element we can use the `id` attribute.
        - IDs should have the unique name
        - IDs follow the other same nomencleture rule as classes
        - To add id to an element we use the id attribute `<p id="p1"></p>`
        - To reference an id `hello` in CSS we can write as - `#hello`
- One of the main purpose we can use CSS for is changing background color and text color. There are different ways to represent colors in CSS -
    - Pre named colors - names like "red", "blue", "green", "aliceblue" are colors we can use to set colors. A full list of HTML colors is here - [https://www.w3schools.com/tags/ref_colornames.asp](https://www.w3schools.com/tags/ref_colornames.asp)
    - Hex Code -  Uses hexadecimal to represent colors. The first two digits represent Red, the next two green and the last two blue. So a red color will be `#FF0000`, green will be `#00FF00` and blue will be `#0000FF`.
    - RGB - We can represent colors with 0-255 value of Red, Green and Blue in RGB like `rgb(10,33,123)`
    - HSL - hue, saturation, lightness

- We can set background colors of any element with the CSS property `background-color` example: `background-color: red` Reference the previous point for how to use colors

- Other than that we can use the `background` property to set image backgrounds like: `background: url("link")`
- We can use the `background-size: cover` to make the background take the size of the screen.
- to set the font color of text we can use the `color` property like: `color: color`
