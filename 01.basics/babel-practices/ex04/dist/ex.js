"use strict";

// 블록 스코프 변수(ES6)
var users = [{
  no: 1,
  name: '피카츄',
  email: 'pikachu@gmail.com'
}, {
  no: 2,
  name: '이브이',
  email: 'eevee@gmail.com'
}]; // 객체분해

function print(_ref) {
  var no = _ref.no,
      name = _ref.name,
      email = _ref.email;
  // 템플릿 문자열
  console.log("".concat(no, ", ").concat(name, ", ").concat(email));
} // for..of(es6)


for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
