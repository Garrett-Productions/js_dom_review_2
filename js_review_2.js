var myArr = [];
console.log(myArr.length); // -> "0"

myArr[0] = 42; // myArr == [42], length==1
console.log(myArr[0]); // -> "42"

myArr[1] = "hi"; // myArr == [42,"hi"], length==2
myArr[2] = true; // myArr == [42,"hi",true], length==3

myArr[myArr.length+1] = 2; // myArr == [42,"hi",true,undefined,2]
console.log(myArr.length); // -> "5"

myArr[0] = 101; // myArr == [101,"hi",true,undefined,2]
myArr[3] = "MG"; // myArr == [101,"hi",true,"MG",2]

myArr.pop(); // myArr == [101,"hi",true,"MG"]
console.log(myArr.length); // -> "4"
myArr.push("dat"); // myArr == [101,"hi",true,"MG","dat"]
console.log(myArr.length); // -> "5"

// ---------------------------------------------------------- //

//The array property .length is defined as ‘one greater than the largest populated index’:
var myArr == [42,"hi"]; // myArr.length == 2
myArr.push(true); // myArr == [42,"hi",true] and length == 3

//However, when directly setting values in arrays, we can add them at any (non-negative integer) index:
myArr[myArr.length+1] = 2; // myArr == [42,"hi",true,undefined,2]
console.log(myArr.length); // "5", although we set only 4 values
myArr.pop(); // myArr == [42,"hi",true,undefined]
console.log(myArr.length); // "4", although we never set myArr[3]
//THIS IS COOL AND WORKS BUT IS NOT IDEAL BUT WE CAN SIMPLIFY THIS TO AVOID 'SPARSENESS' BY USING EITHER push() or (arr[arr.length])

//**Keys on pushing and popping an array's value

// Likewise, when removing array values, use pop() or directly decrement the length (arr.length--). 
// This means that if you need to remove a value from the middle of your array, you need to move the last value in the array into 
// that middle index. Even though you are removing a middle value, 
// you won’t be removing that value’s “chair”. You’ll actually be removing the last “chair” in the array 
// to the value currently there needs to be moved somewhere else! 
//-------------------------------------------------------------------------------//

//Arrays are passed by Reference, when an array is passed as an argument, a pointer is sent.. Meaning a copy of the array and the pointer is created
//The caller and the callee both have "live" access to the same array 
// meaning if the array is updated or changed by the callee, when we pass it to another function these changes are reflected to the caller weather it's been returned or not

var arr = [42,68,7,21,243,512];
for (var x = arr.length-2; x > 1; x--) { // x = 6-2=4, x=4, as long as x is greater than 1 subtract the value by 1 each time as long its bigger than 1
arr[x - 1] = arr[x + 1]; //arr[4-1] = arr[4 +1]
}
//console.log(arr);
console.log(x);// Does x exist out here?

//This chapter covered JavaScript arrays in more depth. We showed how to declare and initialize arrays, 
// how to read from specific indices, and how to write values into arrays – both overwriting existing values, 
// as well as writing into new index locations that likely extend an array’s length. 
// We made significant use of the property .length that is present in every array, and we discussed how this property is usually 
// (but not always) equal to the number of elements present in the array. Specifically, we mentioned that arrays can be sparse, 
// which means we can configure an array so that certain index locations have not yet been written with any value 
// (and hence contain undefined). We rehearsed numerous times the iteration of an array, using a FOR loop. 
// We touched on the subject of function parameters that are passed by reference, 
// and how that changes a function from purely returning advisory information to making permanent changes in the array 
// (or another parameter). We did an exhaustive walkthrough of debugging FOR loops with arrays. 
// Finally, we built on our new understanding of JavaScript data types, and discussed the values that 
// (across type conversion) all equate to false – the six “falsy” values.



