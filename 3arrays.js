let scores = [10, 20, 30, 40, 50];

scores[1] = 25
//console.log(scores[2])
scores.push(60)
scores.push(70) // add element to the end
//console.log(scores)
//console.log(`Scores length: ${scores.length}`)

scores.pop() // remove last element
//console.log(scores)

scores.unshift(5) // add element to the beginning
console.log(scores)

console.log(scores.indexOf(30)) // find index of element
console.log(scores.indexOf(35)) // -1 if not found

console.log(scores.includes(30)) // true if element is in array
console.log(scores.includes(35)) // false if not found

scores = scores.concat([75, 80, 85]) // add elements to the end
console.log(scores)

subscores = scores.slice(2, 5) // get elements from 2 to 4
console.log(subscores)

// remove the first element
scores.shift()
console.log(scores)

// remove elements from 2 to 4
scores.splice(2, 3)
console.log(scores)

// sum all the scores
let total = scores.reduce((acumulator, score) => {
    //console.log(`acc: ${acumulator}, score: ${score}`)
    return acumulator + score
}, 0)

console.log(total)

// return even numbers from the array that match the condition (Use Condition)
let evenScores = scores.filter(score => score % 2 == 0)
console.log(evenScores)

// map the array to a new array with the double of the scores (Use Operation)
let doubleScores = scores.map(score => score * 2)
console.log(doubleScores)

// chain the operations
let result = scores.filter(score => score % 2 == 0).map(score => score * 2).reduce((acc, score) => acc + score, 0)
console.log(result)


let numbers  =  [52, 65, 78, 98, 45, 32, 10, 5, 7, 9, 12, 15, 18, 20, 25, 30, 35, 40, 45, 50]
numbers.sort((a, b) => a - b) // sort in ascending order
console.log(numbers)
numbers.sort((a, b) => b - a) // sort in descending order
console.log(numbers)


let fruits = ['cherry', 'banana', 'apple', 'date', 'elderberry', 'mango', 'kiwi', 'orange', 'pear', 'plum', 'strawberry', 'watermelon']
let fruit = fruits.find(fruit => fruit.startsWith('c'))
let fruitIndex = fruits.findIndex(fruit => fruit.startsWith('c'))
console.log(fruit + ' ' + fruitIndex)
fruits.sort()
console.log(fruits)
fruits.reverse()
console.log(fruits)

