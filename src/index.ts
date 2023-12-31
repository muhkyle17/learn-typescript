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

// Union types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2
  } else {
    return parseInt(weight) * 2.2
  }
}

kgToLbs(10)
kgToLbs('10kg')

// Intersection types
type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
}

// Literal types (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'

// Nullable types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase())
  } else {
    console.log('Hola')
  }
}

greet(null)

// Optional chaining
type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday)
// }

/// Optional property access operation
console.log(customer?.birthday)
console.log(customer?.birthday?.getFullYear())

/// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null
log?.('a')
