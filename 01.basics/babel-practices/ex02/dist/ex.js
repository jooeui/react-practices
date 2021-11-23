// 블록 스코프 변수(ES6)
const users = [{
  no: 1,
  name: '피카츄',
  email: 'pikachu@gmail.com'
}, {
  no: 2,
  name: '이브이',
  email: 'eevee@gmail.com'
}]; // 객체분해

function print({
  no,
  name,
  email
}) {
  // 템플릿 문자열
  console.log(`${no}, ${name}, ${email}`);
} // for..of(es6)


for (let user of users) {
  print(user);
}