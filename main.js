//objects

// let a = 'turbo'

// let car = {
//     'model car': 'bmw',
//     color: 'black',
//     year: 2022,
//     turbo: true,
//     wheels: {
//         size: 245,
//         radius: 17,
//         type: 'winter'
//     }
// }
//
// Object.freeze(car)

// car.turbo = false
// car.price = 20000
// delete  car.color //удаляем обьект
//
// console.log(car[a])
// console.log(car)
// console.log(car.color)


// let car2 = Object.assign({name:'max'}, car)

// let car2 = {name: 'Max', ...car}

// car2.turbo = false
// car2.wheels.radius = 20

// console.log(car)
// console.log(car2)


// let car = {
//     'model car': 'bmw',
//     color: 'black',
//     year: 2022,
//     turbo: true,
//     wheels: {
//         size: 245,
//         radius: 17,
//         type: 'winter'
//     }
// }

// console.log(car.toString()) //неправильнй вариант
// console.log(JSON.stringify(car)) //
//правильные варианты с JCON
// console.log(typeof JSON.stringify(car)) //

// let a = `{"'model car': 'bmw',color: 'black',year: 2022,turbo: true,wheels: {size: 245, radius: 17,   type: 'winter'"}}`

// console.log(JSON.parse(a))


let arr = [1, 2, 3, 4, 5];

arr[0] = 5
delete arr[0]
arr[5] = 7
arr[100] = 7


console.log(arr)
console.log(arr.length)


