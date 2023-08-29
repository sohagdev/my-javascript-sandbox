let x

const name = 'John'
const age = 30
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`

// Properties and Methods
const s = new String('hello world')

x = typeof s
// x = s.length

x = s.__proto__

x = s.toUpperCase()
x = s.toLowerCase()
x = s.charAt(0)
x = s.indexOf('a')
x = s.substring(2, 5)
x = s.substring(7)

x = s.trim()

x = s.replace('world', 'John')
x = s.includes('world')

x = s.valueOf()

x = s.split('')

console.log(x)
