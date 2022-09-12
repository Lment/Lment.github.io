// var test = "Hell World <br/> HELL";
// console.log(test);

// var func_test = function(w, h)
// {
//     console.log("why this works?");
// }

// function func_test2()
// {
//     console.log("There are two types of function");
// }

// func_test();
// func_test2();

// var test2 = "Is git works?";

// console.log(test2.split(''))
// test3 = test2.split('')
// console.log(test3.shift()) // equal to pop(0)
// console.log(test3.length)
// console.log(test3.unshift('I')) // returning new length
// console.log(test3)
// console.log(test2.charAt(1)) // charAt only applies to string

// var test4 = "Array test is in progress".split(' ') // split must have delimeter defined
// console.log(test4)
// console.log(test4.pop())
// console.log(test4)
// console.log(test4.push("PROGRESS")) // push and pop is equal to normal stack operation
// console.log(test4)

console.log(Math.floor(1.5))
console.log(Math.ceil(1.5))
console.log(Math.abs(-100))
console.log(Math.random()) // Not seedable, but not truly random - it is not secure in today's crypto

console.log(parseInt(1000.5, 2) == 8)
console.log(parseFloat(10))

console.log(10 == '10')
console.log(10 != '10') // test only value, type conversion automatic
console.log(10 === '10')
console.log(10 !== '10') // test value and type

num = 3
console.log(1+2, 1-2, 1*2, 1/2, 1%2, 2**3, 
"There is "+"Exponential", ++num, num++);
// inc and dec only applies to variable, not possible for int
// Also, newline in instance follows relatively easier rule

console.log(0xFFFF & true) // true considered as 1, like in C
console.log(0xFFFF && true) 

if (0)
    console.log(1111)
else
    console.log(2222)     // Like C, one line is accepted without accompanied parenthesis

for (i = 1; i< 10; i++)
    console.log(`7 x ${i} = ${7*i}`) 
    // Template string, similar to fstring in python, 
    // use backtick ` instead of single quote ', 
    // parenthesis surrounded by {} with $ mark at front

console.log(typeof(i), typeof('a'), typeof("aa"), typeof([])) 
// typeof returns 'number', 'string' or 'object'. there is no int, nor char.

answer = new Set()
answer.add(1)
answer.add(2)
answer.add(3)
console.log(answer)

var array1 = ['1', '2', '3', '1', '1']
array2 = array1.map(input_ => {return Number(input_, 10);}).reduce((a, b) => a+b, 0);
console.log(array1, array2)

console.log(Math.min(10.1, 10.9))
console.log(Math.max(10.1, 10.9))

console.log('**'.repeat(2), '*'.repeat(4))
console.log(array1.filter(x => x === '1'))

var str1 = "test test test"
console.log(str1.substring(0, str1.length))
console.log([1, String(1)])

array3 = [...array1]
array4 = array1
array1[0] += '11'
console.log(array1,'\n',array3)
console.log(array4)


