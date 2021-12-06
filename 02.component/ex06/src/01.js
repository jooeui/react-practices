import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}


// 이렇게 하면 안 됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const updateProducts1 = state.order.products;
updateProducts1.push ({
    "no": "s002-002",
    "name": "파란 양말",
    "price": 2000,
    "amount": 1
})

// === > true가 나오면 불변성을 깨버리는 것 ..
console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);

console.log("==========================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts2 = state.order.products.concat({
    "no": "s002-002",
    "name": "파란 양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);

console.log("==========================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

const updateProducts3 = ([...state.order.products, {
    "no": "s002-002",
    "name": "파란 양말",
    "price": 2000,
    "amount": 1
}]);

console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);

console.log("==========================================");