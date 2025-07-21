// console.log("2">1)
// console.log("02">1)


// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

//  console.log(undefined == 0);
// console.log(undefined > 0)
//  console.log(undefined < 0)

// console.log("2"==2)
// console.log("2"===2);

// ✅ == Type Coercion Rules
// 1️⃣ Same Type ➔ Compare Directly

// 5 == 5           // true
// "hello" == "hi"  // false
// true == false    // false
// 2️⃣ Boolean ➔ Convert to Number
// true ➔ 1

// false ➔ 0

// Examples:


// true == 1        // true
// false == 0       // true
// true == 2        // false
// 3️⃣ String + Number ➔ String Converts to Number

// "2" == 2         // true
// "10" == 10       // true
// "5" == 6         // false
// 4️⃣ null and undefined
// ✅ Special case:

// null == undefined ➔ true

// Otherwise, null and undefined are not equal to any other value.


// null == undefined   // true
// null == 0           // false
// undefined == 0      // false
// 5️⃣ Object compared with String/Number
// Object is converted to primitive using valueOf() or toString().

// Examples:


// [1,2] == "1,2"      // true
// [] == ""            // true
// [] == 0             // true
// [null] == 0         // true (since [null] → "" → 0)

// 6️⃣ NaN is NEVER equal

// NaN == NaN          // false
// NaN == 0            // false
// 🚦 Quick Memory Recap:
// ✅ == allows type coercion:

// String vs Number ➔ String ➔ Number

// Boolean ➔ Number

// null == undefined ➔ true

// NaN ➔ never equal to anything