function makeAdder() {
    return function(n) {
        return n + 1
    }
}

const addOne = makeAdder()
//console.log(addOne(54));

function createtaxaCalculator(rate) {
  return function(value) {
    return value + (value + rate) / 100  
  }
}

const withImportTax = createtaxaCalculator(10)
//console.log(withImportTax(5))
  

function createCounter() {
    let counter = 3

    return function() {
        counter = counter + 3
        return counter
    } 
}

const clicks = createCounter()
console.log(clicks(), clicks())



