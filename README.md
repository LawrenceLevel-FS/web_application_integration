# Web Application Integration

Welcome to my application integration repo. This repo is organized into branches based on week 1 to week 4. Assignments
made on that week will be published to that branch.

## Week One

This covers unit testing using jest.

- First install the dependencies

```bash
git clone https://github.com/LawrenceLevel-FS/web_application_integration.git
```

```bash
cd week1 && npm install
```

```bash
npm run test
```

### Function construction

I'm no LeetCode pro so pay attention

```javascript
const creditCardObsure = (num) => {
    // this if statement checks to see if the input is not a number
    if (typeof num !== "number") {
        // if the input is anything else other than a number it will return this statement
        return `Please only input numbers, (${num}) is a (${typeof num}) not a number`;
    } else {
        // if the input is in fact a number, we'll convert it to an array and join it into a string to check the length.

        if ([num].join("").length < 12 || [num].join("").length > 16) {
            // if it's too long or short to be a valid credit card number we'll return this
            return `Not a valid credit card number, the number you enter was ${
                [num].join(",").length
            } digits long`;
        }
    }
    // if all the checks pass and it's a number with the correct length then we'll
    const newNum = num
        .toString() // turn the num to a string
        .split("") // split each digit into an array
        .map((digit, index, arr) => (index < arr.length - 4 ? "*" : digit)) // map over the array and using the index of the array minus the last 4 index values. All "true" values in the index will be replaced with * else they'll return digit.
        .join("");
    // .join("") collapse array into a single string again.

    return newNum; // return the value of [true, true, true, digit digit].join() or [*,*,*, num, number]
};

module.exports = creditCardObsure; // export for testing
```

## Week Two
(assignment in week2/wdvwai-seleniumOnNextJS/main.test.js )

### Postman
This week covers integration testing using postman
![postman image](https://user-images.githubusercontent.com/49151885/96122371-ad293c00-0ef1-11eb-9e1d-ef148ee03d73.png)

- We used pm.test() to test the end points of GET, POST, PUT/PATCH, and DELETE.

### Selenium
![selenium testing](https://www.perfecto.io/sites/default/files/image/2020-05/social-blog-automated-testing-selenium.png)
- We used selenium to test proper frontend capabilities.