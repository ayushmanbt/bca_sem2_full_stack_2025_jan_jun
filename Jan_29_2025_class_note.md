**Class Notes: Understanding the <input> Element in HTML Forms**

### Introduction
The `<input>` element in HTML allows users to enter data in forms. Different `type` attributes define the input field's function, such as text, password, email, date, time, and datetime.

### The `<form>` Tag
The `<form>` element groups input fields and submits user data. Key attributes:
- `action`: Destination for submitted data.
- `method`: Defines how data is sent (`GET` or `POST`).

### The `<label>` Tag
Labels improve accessibility by linking text descriptions to input fields (by `id`) using the `for` attribute.

### Input Elements Discussed

1. **Text Input**
   ```html
   <label for="name">Search:</label>
   <input type="text" name="q" id="name" required autocomplete="off" placeholder="Search here">
   ```
   - Creates a single-line text field with placeholder text.
   - We can use this to make search queries with GET request form submission
   - `placeholder="whatever placeholder you want"` gives us a placeholder text
   - `autocomplete="off"` attribute prevents autocomplete

2. **Password Input**
   ```html
   <label for="password">Password:</label>
   <input type="password" name="password" id="password" required>
   ```
   - Hides entered characters for security.

3. **Email Input**
   ```html
   <label for="email">Email:</label>
   <input type="email" name="email" id="email" required autocomplete="off" placeholder="a@a.com">
   ```
   - adds some validation for email with the `type="email"`
   - `requried` attribute makes the form not submittable with this field empty
   - `autocomplete="off"` attribute prevents autocomplete
   - `placeholder="whatever placeholder you want"` gives us a placeholder text

4. **Date Input**
   ```html
   <label for="date">Select Date:</label>
   <input type="date" name="date" id="date">
   ```
   - Allows users to select a date (year, month, and day).
   - Useful for scheduling or date selection forms.

5. **Time Input**
   ```html
   <label for="time">Select Time:</label>
   <input type="time" name="time" id="time">
   ```
   - Allows users to select a time (hours and minutes).
   - Does not include date selection.

6. **Datetime Input**
   ```html
   <label for="datetime">Select Date and Time:</label>
   <input type="datetime-local" name="datetime" id="datetime">
   ```
   - Allows users to select both date and time.
   - Useful for scheduling events.

7. **Submit Button**
   ```html
   <input type="submit" value="Submit">
   ```
   - Triggers form submission.
   We can also use the button type submit for this. Which gives us more felxibilty regarding the design of the button and its elements -
   ```html
   <button type="submit">Submit Form</button>
   ```