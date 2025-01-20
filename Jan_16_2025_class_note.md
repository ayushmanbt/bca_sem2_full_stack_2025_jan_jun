# Class notes for 16th January 2025

In this class we mainly learnt about the 4 layer structure of HTML elements. From outward to inside this structure goes like -

- margin
- border
- padding
- content

For default box sizing in CSS `padding` + `content` is considered the HTML element

### Different ways to set margin

1. We can individually select the direction and provide margin. In that case we have four CSS properties for doing this -

    a. margin-top

    b. margin-left

    c. margin-bottom

    d. margin-right

2. On the other hand if you want to set margin using the short notation you can use the `margin` property like below -

    a. **`margin: <value>;`** will apply uniform margin in all directions

    b. **`margin <vertical_margin> <horizontal_margin>;`** will apply same amount of margin in top and bottom using the `<vertical_margin>` value and will use the `<horizontal_margin>` value 

    c. **`margin <top_margin> <left_margin> <bottom_margin> <right_margin>;`** will apply margin with the values starting from top in anti-clockwise pattern. 

### Different ways to set padding

1. We can individually select the direction and provide padding. In that case we have four CSS properties for doing this -

    a. padding-top

    b. padding-left

    c. padding-bottom

    d. padding-right

2. On the other hand if you want to set padding using the short notation you can use the `padding` property like below -

    a. **`padding: <value>;`** will apply uniform padding in all directions

    b. **`padding <vertical_padding> <horizontal_padding>;`** will apply same amount of padding in top and bottom using the `<vertical_padding>` value and will use the `<horizontal_padding>` value 

    c. **`padding <top_padding> <left_padding> <bottom_padding> <right_padding>;`** will apply padding with the values starting from top in anti-clockwise pattern. 

### Borders

We can set borders in CSS with the followin shorthand syntax -

```CSS
border: <border_width> <border_type> <border_color>;
```

In similar ways you can use this propety like this -

```
border: <border-style>;
```
```
border: <width> <border-style>;
```

```
border: <style> <color>;
```
**Border type**

These are the different border types available in CSS -

- solid
- dashed
- dotted

You can find a full list in [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)


**Border by individual direction**

we can also choose individual directions to apply borders like -

- border-top
- border-left
- border-bottom
- border-right

**Border Radius**

we can use the border-radius property to apply rounded corenrs to our CSS elements

```css
/* Radius is set for all 4 sides */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 10px / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;
```

