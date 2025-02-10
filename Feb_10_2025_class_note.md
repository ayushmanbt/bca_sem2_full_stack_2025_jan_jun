# More about flexboxes

After recapping about `media-query` from last class in today's class we learnt a bit more about flexbox.

- Flexbox is a horizontal layout by default, that means all the elements in flexbox are laid horizontally

- To make a parent div display its child elements as flexbox we can use the following CSS line

  ```css
  display: flex;
  ```

- Now in flexbox, generally all the elemnts try to take the least amount of space, that is why sometimes the space inside flexbox stays empty. To deal with this we can use the following property in the child elements of the flexbox

  ```css
  flex-grow: 1;
  ```

  This makes sure that the flex items will grow to fill up any empty space

- By default flexbox will try to cram all the elements in the flex in one line, unless we enable wrap. For that we need to add the following css property to the parent element -

  ```css
  flex-wrap: wrap;
  ```

  This will make sure that the flex items if need more space will go to the next line

- For the child elements we can give them more weightage for displaying, then they will take more width (or height if we set `flex-direction: column`). To give weightage we use the `flex` property. By default its value is 1

  ```css
  flex: 3;
  ```

  The above code will set `flex` for that element to 3. 

  Now if we have two element in a flexbox with `flex: 3` and `flex: 1` respectively then the `flex: 3` element will take `3/4` of the space and the rest `1/4` will be taken by the other element.

- We can use the gap property in flexbox to create automatic spacing between the elements in the flexbox.