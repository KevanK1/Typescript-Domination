export{}
// The types of datatypes in ts are
// Primitive =>  number, string, boolean, null, undefined, symbol
//              This are the types where the value are stored and called "by value" from memory.
//              They are stored in Stack memory, and while copying the copy of the value is created and shared, thus any  changes to the copy will not affect the original.

let a:number= 123
let b:string = "hello"
let c:boolean = true
let d:null = null              // Used when we want a empty value
let e:undefined = undefined    // Used as default value of variable when no value is assign
let f:symbol = Symbol("hello") // Used to create a unique identifier

// Here Unlike Js, we can define the type of the values the variable CAN(not neccesary but should do) hold. As shown above.


// Refrence types =>  object, array, function, class
// Here the value is stored in heap memory and the reference to the value is stored in stack memory. Thus any changes to the reference will affect the original.
// Arrays => Basic like in all other languages

let arr1 = [1,2,3,4,5]
let arr2 : number[] = [1,2,3,4,5]

// We can have value of multiple datatypes in an array
let arr3 : (number|string|boolean)[] = [1,"hello",true]

