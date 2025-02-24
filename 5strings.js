day = 'tuesday'
console.log(day.length) 

console.log(day.slice(0, 3)) // tue
console.log(day.slice(3, 6)) // sda

let splitDay = day.split('s')
console.log(splitDay) // [ 'tue', 'day' ]

// Convert string to integer
let date = '20'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff) // 7
diff.toString()

let sentense = "tuesday is funday"
sentense = sentense.replace('funday', 'awesoomeday')
console.log(sentense) // tuesday is awesoomeday

let value = sentense.indexOf('day', 10) // we are searching for 'day' starting from index 10
console.log(value) // 16

// count the number of 'day' in the sentense
let count = 0
let index = sentense.indexOf('day')
while(index !== -1) {
    count++
    index = sentense.indexOf('day', index + 1)
}
console.log(count) // 2