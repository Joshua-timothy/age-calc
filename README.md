# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow

### What I learned

This project has helped strengthened my knowledge on Booleans, i used Booleans to check if the form input fields are valid before displaying the results

Code snippets, see below:

```js
let isDayInputValid = false;
let isMonthInputValid = false;
let isYearInputValid = false;

// This block of code is inside an eventListener that listens for a click event on the form button

dayInput.value <= 31 && dayInput.value !== ""
  ? (isDayInputValid = true)
  : (isDayInputValid = false);

monthInput.value <= 12 && monthInput.value !== ""
  ? (isMonthInputValid = true)
  : (isMonthInputValid = false);

yearInput.value <= currentYear && yearInput.value !== ""
  ? (isYearInputValid = true)
  : (isYearInputValid = false);

// What follows this block of code is a conditional statement that checks if all the variables that stores a boolean value is set to true, then calculate the values from the input fields and displays the result
```

Thanks for going through this 🙃

## Author

- Frontend Mentor - [@DevJhozi](https://www.frontendmentor.io/profile/DevJhozi)
- LinkedIn - [Joshua Timothy](https://www.in.com/Joshuatimothy-dev)
- Twitter - [@JhoziKay](https://www.x.com/JhoziKay)
