const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Chocolate", "Almonds", "Coconut"]), "Chocolate");