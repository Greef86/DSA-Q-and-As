
//PROBLEM 1 
//create an array with 5 names, create a function that takes an array and name,
//iterate through the array and return that specific name preceded by its index.

const names = ["Mooketsi", "Betes", "Mufasa", "Johannes", "Lesley"]

const returnName = (array, name) => {
	for(let i = 0; i < array.length; i++){
		if(array[i] === name){
			return `${i} ${name}`
		}
	}
}

console.log(returnName(names, "Johannes"))
console.log(returnName(names, "Mooketsi"))