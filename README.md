# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shaunrobinson/lotide`

**Require it:**

`const _ = require('@shaunrobinson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function(head)`: find array head[0];
* `function(tail)`: returns tail of an array;
* `function(middle)`: find the middle value of an array of values;
* `function(assertArraysEqual)`: assert equality between arrays;
* `function(assertEqual)`: assert equality of values;
* `function(assertObjectsEqual)`: assert equality of objects;
* `function(countLetters)`: count letters in a string;
* `function(countOnly)`: return object containing the counts of specific items;
* `function(eqArrays)`: equality between arrays;
* `function(eqObjects)`: determine equality of objects;
* `function(findKey)`: scan object and return first key;
* `function(findKeyByValue)`: scan object return first key which contains given value;
* `function(flatten)`: take in a nested array and return a flattened version of the array;
* `function(letterPositions)`: track letter positions;
* `function(map)`: takes an array, returns a new array based on callback;
* `function(takeUntil)`: returns a slice of an array taken from beging until callback returns truthy value;
* `function(without)`: returns an array with only elements present in a source array