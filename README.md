# Array API

<figure style="text-align: center">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="DOM Tree" width="100" />
   <figcaption>JavaScript</figcaption>
</figure>

## Array

The Array object enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

- JavaScript arrays are resizable and can contain a mix of different data types.
- JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers as indexes.
- JavaScript arrays are zero-indexed and the last element is at the value of the array's length property minus 1.
- JavaScript array-copy operations create shallow copies.

## Array.prototype.map

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.

### Signature

#### Parameters

- callbackFn: `(element, index, array) => {//...}`
- thisArg: A value to use as this when executing `callbackFn` | (optional)

#### Return

- A **new array** with each element being the result of the callback function.

```javascript
const numbers = [1, 2, 3];

const numbersPerIndexAndLength = numbers.map((number, index, numbers) => {
  const numberPerIndexAndLength = number * index * numbers.length;
  return numberPerIndexAndLength;
});

console.log(numbersPerIndexAndLength); // [ 0, 6, 18 ]
```

## Array.prototype.filter

The `filter()` method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

### Signature

#### Parameters

- callbackFn: `(element, index, array) => {...}`
- thisArg: A value to use as this when executing `callbackFn` | (optional)

#### Return

- A **shallow copy** of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.

```javascript
const numbers = [0, 2, 4, 8, 10, 12, 14, 16, 10, 20];

const isGreaterThanTen = numbers.filter((number) => {
  const isGreater = number > 10;
  return isGreater;
});

console.log(isGreaterThanTen); // [ 12, 14, 16, 10, 20 ]
```

## Array.prototype.reduce

The `reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

### Signature

#### Parameters

- callbackFn: `(accumulator, element, index, array) => {...}`
- initialValue: A value to which accumulator is initialized the first time the callback is called. If initialValue is not specified, accumulator is initialized to the first value in the array | (optional)
- thisArg: A value to use as this when executing `callbackFn` | (optional)

#### Return

- The value that results from running the "reducer" callback function to completion over the entire array.

```javascript
const numbers = [0, 2, 4, 8, 10, 12, 14, 16, 10, 20];

const getTotal = numbers.reduce((acc, number) => {
  const currentTotal = acc + number;
  return currentTotal;
}, 0);

console.log(getTotal); // 96
```

## Source

- Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- Array.prototype.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- Array.prototype.filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- Array.prototype.reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
