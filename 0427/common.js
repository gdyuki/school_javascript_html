var num = 10
if(num === 10){
  console.log(true);
}

if(num > 10){
  console.log(' over 10 ');
}else if(num ===10){
  console.log('num is 10');
}

if(num > 10){
  console.log('over 10');
}else if(num < 10){
  console.log('under 10');
}else{
  console.log('Whats?');
}

var color = 'red'
switch(color){
  case 'red':
    console.log('red!');
    break;
  case 'blue':
    console.log('blue!');
    break;
  case 'yellow':
    console.log('yellow!');
    break;
  default:
    console.log('ather');
}

var color = 'red';

if(color === 'red'){
  console.log('red');
}else if(color ==='blue'){
  console.log('blue');
}else if(color ==='yellow'){
  console.log('yellow');
}else{
  console.log('other');
}

for(var i = 0; i < 10; i++){
  console.log(i);
}

for(var i = 0; i <= 10; i += 2){
  console.log(i);
}

for(var i = 1, j = 0; i <= 10; i *= 2, j++){
  console.log(i, j);
}

for(var i = 1; i <= 100; i++){
  if(i%2 === 0){
    console.log(i);
  }
}

for(var i = 1; i <= 100; i++){
  if(i >= 10 && i <= 30){
    console.log(i);
  }else if(i >= 70 && i <= 90){
    console.log(i);
  }
}
for(var i = 1; i <= 100; i++){
  var o = i/3;
  if(i%3 === 0){
    console.log(i, o);
  }
}
/*for(var i = 1900; i<= 2100; i +=4){
  if(i%100 === 0){
    if(i%400 === 0){
      console.log(i);
    }
  }else{
    console.log(i);
  }
}*/
for(var i = 1900; i <= 2100; i += 4){
  if(i%100 !== 0 || i%400 === 0){
    console.log(i);
  }
}
