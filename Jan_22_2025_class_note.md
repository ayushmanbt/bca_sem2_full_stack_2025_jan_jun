# 22nd January 2025 class notes

We restarted going through basics of HTML

Anatomy of a HTML Element -

```html
<!DOCTYPE html>
<html>
    <head>
        ...
    </head>
    <body>
        ...
    </body>
</html>
```

The `<!DOCTYPE html>` declares it is HTML5 document

The `<html>..</html>`  contains all of our HTML

The `<head>..</head>`  contains all metadata for webpage which is not visible in the page

The `<body>..</body>`  contains all the things to be shown in the webpage

This `<tag_name />` is a self closing tag. `<meta>` tag is a self closing tag

### Title tag

`<title>...</title>` tag can be used to change the title (The text shown as the name of the webpage)

### Different Meta tags

- `<meta charset="UTF-8">`
Specifies the character encoding for the web page.
Example: `<meta charset="UTF-8">` ensures support for most languages.

`<meta name="viewport" content="...">`
Controls the page's dimensions and scaling on different devices.
Example:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```


`<meta name="description" content="...">`
- Provides a brief description of the page.
- Used by search engines to display summaries in search results.
Example:
```html
<meta name="description" content="Learn about meta tags in HTML">
```

`<meta name="keywords" content="...">` (Not mentioned in class)
Specifies keywords relevant to the page.
Example:
```html
<meta name="keywords" content="HTML, meta tags, SEO">
```
Note: Modern search engines rely less on this

`<meta name="author" content="...">` (Not mentioned in class)
Indicates the author of the page.
Example:

```html
<meta name="author" content="John Doe">
```

`<meta property="og:...">` (Open Graph Tags)
Used for social media sharing.
Example:
```html
<meta property="og:title" content="Meta Tags Guide">
<meta property="og:image" content="image.jpg">
```

There are a few more meta tag. Read more about them from - [mdn docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

### What you can try at home

#### Google search and matching title and description tag

1. In PC/Laptop search for some thing in google.
2. Select a result and note down its title and description
3. Go to the page
4. Right click and select `view page source`
5. Match the `meta` description and title of the page. 

