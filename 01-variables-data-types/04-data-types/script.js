// string
const firstName = 'sara'

// number
const age = 30
const temp = 30.4

// Boolean

const hasKids = true

// Null
const aptNumber = null

//  Undefined
let score = undefined

// symbol
const id = Symbol('id')

// Bigint
const n = 13211345455n

// Reference types
const numbers = [1, 2, 4, 5, 5]

const person = {
  name: 'sohag',
  age: 23
}
function sayHello() {
  console.log('hello')
}

const output = sayHello

console.log(output, typeof output)
