let faker = require('faker')

const getRandom = (arr) => arr[Math.floor(Math.random()*arr.length)]
const createCombos = (foodNames, foodTypes) => foodNames.map( (item, index) => `${getRandom(foodTypes)} ${item}`)
const foodNames = ['Samosa', 'Sandwich', 'Roll', 'Pattice']
const foodTypes = ['Non Veg', 'Veg', 'Jain']


function Combo(c,i) {
	// console.log()
  return {
  	id: i + 1,
    contents: createCombos(foodNames, foodTypes),
    price: faker.commerce.price(),
  }
}
//legacy
// const make = (num = 5) => (fn) => Array.from({length: num}, fn);

const make = (num = 5) => (fn) => Array.from({length: num}, fn, i => i);
// =========================================================
//testing
// console.log(Array.from({length: 2}, Combo, i => i))
// console.log(Array.from({length: 3}, (Combo, i) => {
// 	return ({
// 		i: i + 1,
// 		contents: createCombos(foodNames, foodTypes),
// 		price: faker.commerce.price(),})
// } ))
// console.log(Array.from({length: 2}, Combo ))
// =========================================================
let fakeComboFactory = make(2)
let combos = fakeComboFactory(Combo)

/**
 * TODO
 * let makeUser = fakeUser(10)
 * let makePost = fakePost(20)
 */

// console.clear()
console.log(combos)
// console.log(JSON.stringify({tela: combos}))