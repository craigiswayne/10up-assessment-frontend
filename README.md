## Getting Started

#### Spec
Original spec files for this assessment can be found in `spec/`

---

### Styles
There are 2 stylesheets used
1. Styles for the Critical / Above the Fold content
2. Styles for the Below the fold content

SCSS syntax is used. To compile these styles, run:
```
npm run compile:css
```
*source files can be found in `src/`*

##### Animations / Effects
There are very few effects added to the design. The ones that do exist are:
* Hover state on buttons
* Hover state on menu items
* Hover state on "Learn More" link in the Hero Section

---

### JavaScript
There is only javascript for the menu and lazy loading, and as a result.

I chose not to use the whole bootstrap library since it's overkill.

Typically you would want to use the frontend library since there will be much more functionality being used in the framework.

This was also done to demonstrate my javascript capabilities.

The source is in a typescript file which can easily be compiled using:
```
npm run compile:js
```
*This will also minify the bad boy*

*source files can be found in `src/`*

----

### Lazy Loading
In an attempt to speed up the browser rendering, I've lazy loaded to images,
1. The Phone image in the white section
2. The 10Up logo at the bottom of the page

---

### Linting
You can run linting on the css 
```
npm run lint:css
```

If you want to the linter to automatically fix whatever it can, run
```
npm run lint:css -- --fix
```

---
