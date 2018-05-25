var name = 'Yamada'

console.log(name.length);

console.log(name.charAt(0));
console.log(name.charAt(1));
console.log(name.charAt(2));
console.log(name.charAt(3));
console.log(name.charAt(4));
console.log(name.charAt(5));

console.log(name.slice(1,6));
console.log(name.slice(-4,name.length));

console.log(name.indexOf('Y'));

console.log(name.replace('Ya', 'da'));

for(var i = 0; i <= name.length; i++){
  console.log(name.charAt(i))
}

name = 'Director YamadaYudai'

console.log(Boolean(1));

var fruits = ['apple', 'orange', 'grape','grapefruits', 'banana' ]
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

var fruits2 = [
  ['apple', 'strawberry','rasberry'],
  ['orange', 'mikan','persimmon'],
  ['remon','banana','pie'],
]
console.log(fruits2[0][1]);


var fruits3 = {
  red:['apple', 'strawberry','rasberry'],
  orange:['orange', 'mikan','persimmon'],
  yellow:['pie','remon','banana']
}
console.log(fruits3);
console.log(fruits3.red);
console.log(fruits3.yellow);
var color = 'yellow'
console.log(fruits3[color]);

console.log(fruits3[color][1]);
console.log(fruits3.yellow[1]);


for(var i = 0; i < fruits2.length; i++){
  for(var j = 0; j < fruits2[i].length; j++){
    console.log(fruits2[i][j]);
  }
}

console.log([fruits].concat(fruits2));
var date = [2018, 05, 18]
console.log(date.join('/'));

//input thing to array last
fruits.push('remmon')
console.log(fruits);

fruits.unshift('remmon')
console.log(fruits);

fruits.shift()
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.splice(1, 3, 'grape');
console.log(fruits);

console.log(fruits.slice( 1, 3));

console.log(fruits.reverse());

var dateString  = '2018/05/18'
console.log(dateString.split('/'));

console.log(fruits.indexOf('gold'));
console.log(fruits.indexOf('apple'));

for(var fruits in fruits3){
  console.log(fruits3[fruits]);
}

//0-100 for object
fruits3.blue = ['bluebarry']
console.log(fruits3);

var num = {
  odd:[],
  even:[],
}
for(var i = 0; i <= 100; i++){
  if(i%2 === 0){
    num.even.push(i)
  }else{
    num.odd.push(i)
  }
}
console.log(num);

var users = [
  {
    name: 'tanaka',
    age: 21,
    sex: 'male'
  },
  {
    name: 'suzuki',
    age: 18,
    sex: 'female'
  },
  {
    name: 'sato',
    age: 21,
    sex: 'female'
  },
  {
    name: 'kato',
    age: 21,
    sex: 'male'
  },
]

for(var i = 0; i < users.length; i++){
  var user = users[i]
  console.log('['+user.name+']' , ' age:'+user.age , ' sex:'+user.sex);
  //console.log(('['+'name'+']'+'age:'+age+', '+'sex:'+sex));
}
/////////filteredUsers old or young ///////////
var u ={
  old: [],
  young: []
}
for(var i = 0; i < users.length; i++){
  var user = users[i]
  var age = user.age
  if(age < 20){
    u.young.push(user)
  }else{
    u.old.push(user)
  }
}
console.log();
/////////filteredUsers female or male/////////
var filteredUsers = {
  male:[],
  female:[]
}

for(var i = 0; i < users.length; i++){
  var user = users[i];
  var sex = user.sex ==='male' ? 'male' : 'female'
  filteredUsers[sex].push(user)
}
console.log(filteredUsers);

////////////function /////////
function test(){
  console.log('test');
}
test()
function addNum(num1, num2){
  var addNum = num1 + num2
}
console.log(addNum(1, 20));

function getAddNum(num1, num2){
  var addNum = num1 + num2
  return addNum
}
console.log(addNum(10, 2));
console.log(getAddNum(10, 2));
console.log(typeof getAddNum(10, 2));
////////Plus all Ary number /////////////
var numAry = [1, 2, 3, 4, 5]
function getTotalNum(){
  var num1 = 0
  for(var i = 0; i < numAry.length; i++){
    num1 += numAry[i]
  }
  return num1
}
console.log('total : '+getTotalNum());
///////Over 4 is cut , and plus '...'//////////
function shortStr(string1){
  string2 = '...'
  if(string1.length >= 5){
    string1 = string1.slice(0, 4);
    string1 += string2
  }
  return string1
}
console.log(shortStr('aaaaaaaa'));
console.log(shortStr('aaa'));
////////// 3 num and , ////////////////
function cutthree(num1){
  num1 = num1.toString()
  numlen = num1.length

  num1.slice(-3, numlen)
  for(var i = -numlen; i < 0; i++){

  }
}
console.log();
