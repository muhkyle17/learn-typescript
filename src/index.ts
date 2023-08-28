console.log('hello world')
let thisAge: number = 20
if (thisAge < 50) thisAge += 10
console.log(thisAge)

let sales = 123_6345_234234
let level

function render(document: any) {
  console.log(document)
}

let numbers: number[] = []
numbers.forEach(n => n.toString)

// Tuple
/// A fixed length array where each element has a particular type
let user: [number, string] = [1, 'Mosh']
user[0].toFixed
user[1].charAt
user.push(1)

// Enums
/// A list of related constants similar to C# or Java
// const small = 1
// const medium = 2
// const large = 3

// PascalCase
enum SizeString {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

const enum Size {
  Small = 1,
  Medium, // Defaults to 2 if small = 1 else it will default to 0, 1, 2
  Large,
}
let mySize: Size = Size.Medium
console.log(mySize, 'mySize')

// Functions
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2
  return income * 1.3
}

calculateTax(10_000, 2023)

// Objects && Type aliases
type Employee = {
  readonly id: number
  name: string
  faxMachine?: string
  retire: (date: Date) => void
}

let employee: Employee = {
  id: 1,
  name: '',
  retire: (date: Date) => {
    console.log(date)
  },
}
employee.name = 'Mosh'
// employee.id = 0 // This will error
