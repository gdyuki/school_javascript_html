var name = 'Yamada'

console.log(name.length);

console.log(name.charAt(0));
console.log(name.charAt(1));
console.log(name.charAt(2));
console.log(name.charAt(3));
console.log(name.charAt(4));
console.log(name.charAt(5));

console.log(name.slice(1,6));
console.log(name.slice(-3,name.length));

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
