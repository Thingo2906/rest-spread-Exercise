/*function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }*/

/* Write an ES2015 Version */
function filterOutOdds(...nums) {
    return nums.filter(num => num%2 ===0);
}

/*Write a function called findMin that accepts a variable number of arguments 
and returns the smallest argument. Make sure to do this using the rest and spread operator.*/
 function findMin(...nums){
    return nums.reduce((min, val) => {
        return min < val ? min : val;
    });
 }
 // Another way:
 //const findMin = (...nums) => Math.min(nums);

/*Write a function called mergeObjects that accepts two objects and returns a new object which
 contains all the keys and values of the first object and second object.*/
function mergeObjects(object1, object2){
    return ({...object1, ...object2});

}
/*Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a 
new array with the original array values and all of additional arguments doubled.*/
function doubleAndReturnArgs(arr, ...nums){
    return [...arr, ...nums.map(num => num *2)];
}


//Write the following functions using rest, spread and refactor these functions to be arrow functions!
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom= items => {
    let indexOfrandomNumber = Math.floor(Math.random() * items.length);
    return [...items.slice(0, indexOfrandomNumber),...items.slice(randomNumber +1)];    

}




/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    return {...obj, [key] : val};
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    const newObject = {...obj};
    delete newObject[key];
    return newObject;
  
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const newObject = {...obj};
    newObject[key] = val;
    return newObject;


}