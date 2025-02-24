# Class note for 24/02/2025

## More on bootstrap

Bootstarp has two differnt kinds of CSS classes -

1. Component Classes
   - button
   
   - nav
   
   - card
   
   - alert
   
   - modal

2. Utility Classes

   - **m (used for margin) & p (used for padding)**
   
     In margin and padding we can mention the margin locations
        - blank - all direcrtion margin
        - x - x-axis / horizontal / left & right margin
        - y - y-axis / vertical / top & bottom margin
        - s - start / left margin
        - e - end / right margin
        - t - top margin
        - b - bottom margin
    
     Also you can metion different sizes which basically apply a multiplier on the default margin/padding values using the chart below
        
        - 0 - no margin or padding
        - 1 - 0.25 of spacing
        - 2 - 0.5 of spacing
        - 3 - normal spacing
        - 4 - 1.5x of spacing
        - 5 - 3x of spacing
        - auto - automatic margin / padding
    
    - **w (used for width) & h (used for height)**
        - w-25: 25% of width
        - w-50: 50% of width
        - w-75: 75% of width
        - w-100: 100% of width

        - h-25: 25% of height
        - h-50: 50% of height
        - h-75: 75% of height
        - h-100: 100% of height
    
    - **vw (used for viewport width) & vh (used for viewport height)**
        - vw-25: 25% of viewport width
        - vw-50: 50% of viewport width
        - vw-75: 75% of viewport width
        - vw-100: 100% of viewport width

        - vh-25: 25% of viewport height
        - vh-50: 50% of viewport height
        - vh-75: 75% of viewport height
        - vh-100: 100% of viewport height

    - **d-___**
        
        Sets up display property for an element. The available display properties are -

        - block
        - flex
        - grid
        - inline

    - **screen sizes**

        By default styles are applied to all screen sizes and the screen sizes go in perspective of in screen sizes this and above. The screen sizes availvable are -

        - xs
        - sm
        - md
        - lg
        - xl
        - xxl

        We can use these screen sizes in tandum with normal bootstrap classes to apply the style of that class on that screen size and above.

        For example if we want to apply padding 2 on an element for screen sizes above medium then use the following -

        ```html
        <div class="p-md-4"></div>
        ```



### Want to read more?

Check out bootstrap documentations - https://getbootstrap.com/docs/5.3/getting-started/introduction/


The specific pages -

Margin and padding - https://getbootstrap.com/docs/5.3/utilities/spacing/

Display - https://getbootstrap.com/docs/5.3/utilities/display/

Width and height - https://getbootstrap.com/docs/5.3/utilities/sizing/

Screen sizes - https://getbootstrap.com/docs/5.3/layout/breakpoints/

