# Class notes for 6th February 2025

## Centering a webpage

We can center a div inside another div using the following CSS snippets

### Using flexbox

```css
.parent-div{
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Using grid

```css
.parent-div{
    display: flex;
    justify-content: center;
    align-items: center;
}
```


#### Special scenario - aligning a div in the center of the webpage

```css
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* min height so that it can go beyond 100vh  */
}
```

### Partial Centering horizontal only 

```css
.element-to-be-centered{
    margin: 0 auto;
}
```

## What are flexboxes

Flexbox is "a CSS layout model that helps you arrange items in rows and columns, and distribute space within a container"

Read more about flexbox from [MDN documentations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)

### How to display any element as flex 

```css
{
    display: flex
}
```

## Bonus content: more about centering a div in a webpage

If you like to watch - https://youtu.be/pUo7X3gYi2g?si=yU97VDriPCZPIl4b

If you like to read - https://dev.to/abthakur/different-ways-to-center-a-div-in-a-webpage-5enn
