import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder1 = state.order;
updateOrder1.receive = '부산시 해운대구 우동 ...';      // 불변성 위배, 사용 x

console.log(state.order, updateOrder1, state.order === updateOrder1);   // 불변성 위배

console.log("============================");
    
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder2 = Object.assign({}, state.order, {receive: '부산시 해운대구 우동 ...'});   // Object.assign은 deep copy x
console.log(state.order, updateOrder2, state.order === updateOrder2);