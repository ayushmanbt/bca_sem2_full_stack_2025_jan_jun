# Important topics from backend theory 

1. CRUD - Create Read Update Delete - A common thing seen in servers regarding any resource. We performe these 4 tasks on any and all resources. 

2. Client Server architecture/model - This is the de facto architecture of the web. Client requests for resources and the server responds with the resources

![](./simple%20client%20server.webp)

3. Different type of web requests and their differences -

- **GET** - Used to GET resources from server
- **POST** - Used to create new resources in the server
- **PUT** - Used for updating resources (if not found new resource is created in PUT request)
- **PATCH** - Used for updating resources (if not found new resource is **not** created in PATCH request)
- **DELETE** - Used to delete elements from server

4. MVC Model - 
  
   MVC i.e **M**odel, **V**iew, **C**ontroller is a model used in the software development.
      **model** represents the structure of the data user/the application is dealing with. 

      **view** represents how the data is shown to the user.

      **controller** represents how we update the data stored in server using input from user (via view) and by the rules of the controller. It also transports the model data to view.

### Javasript array functions

1. **forEach:** This takes the elements in an array and loop through each of them and applies the callback supplied to it to each element - 

    ```js
    arr = [1,2,3,4]
    arr.forEach(e => {
        e = e + 1;
    }) //This is just a glorified loop but this will not change the array
    ```

2. **map:** This takes the elements in an array and loop through each of them and applies the callback supplied to it to each element and creates a new array

    ```js
    arr = [1,2,3,4]
    arr2 = arr.forEach(e => {
        e = e + 1;
        return e
    }) //This will use the return value to make the updates array 
    console.log(arr2) // [2,3,4,5]
    ```
3. **filter:** This takes the elements in an array and loop through each of them and applies the callback supplied to it to each element and based on the `true` or `false` return value creates a new filtered(shorter) array

    ```js
    arr = [1,2,3,4]
    arr2 = arr.forEach(e => {
        return e%2 == 0; // this returns true for even elements
    }) 
    console.log(arr2) // [2,4]
    ```

There are also other array methods namely `sorted` (which returns a new sorted array) and `reduce`(which performs aggregation on the array elements)


