/* ============================================================
   LESSON 4 — IF STATEMENTS: FRESH EXERCISES
   ------------------------------------------------------------
   Tools: if / else if / else, plus everything before.
   Each function RETURNS a value chosen by a decision.

   Run:  node 4-if-statements.js
   Each exercise: 3 TEST CASES, INPUT -> EXACT RETURN value.
   ============================================================ */

// ----- 1. Pass or fail -----
// Write `passFail(score)` that RETURNS "Pass" when score >= 60, else "Fail".
// your code here

// console.log(passFail(72));
// TEST 1:  passFail(72)  ->  "Pass"
// TEST 2:  passFail(60)  ->  "Pass"
// TEST 3:  passFail(40)  ->  "Fail"

// ----- 2. Sign of a number -----
// Write `signOf(n)` that RETURNS "positive", "negative", or "zero".
// your code here

// console.log(signOf(-4));
// TEST 1:  signOf(-4)  ->  "negative"
// TEST 2:  signOf(0)   ->  "zero"
// TEST 3:  signOf(9)   ->  "positive"

// ----- 3. Letter grade -----
// Write `grade(score)`: 90+ "A", 80-89 "B", 70-79 "C", below 70 "F".
// your code here

// console.log(grade(85));
// TEST 1:  grade(95)  ->  "A"
// TEST 2:  grade(85)  ->  "B"
// TEST 3:  grade(50)  ->  "F"

// ----- 4. Bigger of two -----
// Write `bigger(a, b)` that RETURNS the larger, or "equal" when they match.
// your code here

// console.log(bigger(14, 9));
// TEST 1:  bigger(14, 9)  ->  14
// TEST 2:  bigger(3, 8)   ->  8
// TEST 3:  bigger(5, 5)   ->  "equal"

// ----- 5. Ticket price -----
// Write `ticketPrice(age)`: under 12 -> 5, 12 to 64 -> 12, 65+ -> 8.
// your code here

// console.log(ticketPrice(70));
// TEST 1:  ticketPrice(8)   ->  5
// TEST 2:  ticketPrice(30)  ->  12
// TEST 3:  ticketPrice(70)  ->  8

// ----- 6. Traffic light -----
// Write `light(color)`: "green" -> "Go", "yellow" -> "Slow", "red" -> "Stop",
// anything else -> "Invalid".
// your code here

// console.log(light("red"));
// TEST 1:  light("green")   ->  "Go"
// TEST 2:  light("red")     ->  "Stop"
// TEST 3:  light("purple")  ->  "Invalid"

// ----- 7. FizzBuzz of one number -----
// Write `fizzbuzz(n)`: divisible by 3 and 5 -> "FizzBuzz", by 3 -> "Fizz",
// by 5 -> "Buzz", else the number n itself.
// your code here

// console.log(fizzbuzz(15));
// TEST 1:  fizzbuzz(15)  ->  "FizzBuzz"
// TEST 2:  fizzbuzz(9)   ->  "Fizz"
// TEST 3:  fizzbuzz(7)   ->  7

// ----- 8. Temperature advice -----
// Write `clothes(temp)`: above 28 -> "Shorts", 15 to 28 -> "Jacket",
// below 15 -> "Coat".
// your code here

// console.log(clothes(30));
// TEST 1:  clothes(30)  ->  "Shorts"
// TEST 2:  clothes(20)  ->  "Jacket"
// TEST 3:  clothes(5)   ->  "Coat"

// ----- 9. Login result -----
// Write `login(user, pass)` that RETURNS "Welcome" when user is "admin"
// AND pass is "1234", otherwise "Denied".
// your code here

// console.log(login("admin", "1234"));
// TEST 1:  login("admin", "1234")  ->  "Welcome"
// TEST 2:  login("admin", "0000")  ->  "Denied"
// TEST 3:  login("guest", "1234")  ->  "Denied"

// ----- 10. Absolute value -----
// Write `absValue(n)` that RETURNS n when n >= 0, otherwise -n.
// your code here

// console.log(absValue(-7));
// TEST 1:  absValue(-7)  ->  7
// TEST 2:  absValue(7)   ->  7
// TEST 3:  absValue(0)   ->  0
