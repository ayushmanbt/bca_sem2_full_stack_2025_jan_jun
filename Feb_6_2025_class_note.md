# Class notes for 6th February 2025

In today's class we talked about responsive design

## What is responsive design and why we need it?

Responsive design makes sure our website looks good on all devices starting from mobile to wide screen TVs

Responsive design ensures -

1. Better user Experience

2. Improves SEO

3. Increases website conversion


## Elements of responsive design

1. **Media Query**
    ```css
    media screen and (max-width: width-top-limit){
        /*coditional style*/
    }
    ```

    The approach above is where you stylize the desktop website first and then the mobile website

    ```css
     media screen and (min-width: width-bottom-limit){
        /*coditional style*/
    }
    ```

    The approach above is where you stylize the mobile website first and then the desktop website

2. **%width with max-width**

    In this approach we design 


3. **Change flex-direction**

    Flexbox displays our items in row, now in smaller screens this can look clunky so we can use `flex-direction: column` to get the columnar layout for narrower mobile devices

## The `flex` property

Every element in the flexbox can use the `flex` css property to increase its weightage in a flexbox, the higher the number the higher space it gets

```css
.element{
    flex: 2;
}
```

So if in a flexbox we have 2 elements, one with `flex: 1` and another with `flex: 3` then the 1st element will get 1/4th of space and the second element will get 3/4th of the space

Read more about the flex property in [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

Today's code of a responsive form is in [Feb 6 code](./Feb_5_code/)