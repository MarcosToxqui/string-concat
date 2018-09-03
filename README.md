# concat-string
## Concatenate string with a single pragmatic function.
### Author: Marcos Becerril (based on Chris Cates code).

### Installation
```
npm install string-concat --save
```

### Usage
```
const stringConcat = require('string-concat');

let result = stringConcat(stringConcat(undefined, "Hello", " ","world"), "!!!", null, undefined);
console.log(result);

// Returns: Hello World!!!

var words = ['one', " ", 'two', " ", 'three', " ", 'four']
let result1 = stringConcat(words, "&&&", ["A", "B"],  [1, [2, 3]]);
console.log(result1);

// Returns 
// one two three four&&&AB123

let result2 = stringConcat(["https",":","//","www."], "google", [".", ["com", "/"]])
console.log(result2);

// Returns 
// https://www.google.com/


```
