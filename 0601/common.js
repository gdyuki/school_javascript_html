
/////////Math //////////////////////////////////
console.log(Math.random());
console.log(Math.floor(2.8));

var random1 = Math.floor(Math.random() * 10)
console.log(random1);

var random2 = Math.floor(Math.random() * 8 + 3 )
console.log(random2);

function randomNum(num1, num2){
  num2 = num2 - num1 + 1
  console.log(Math.floor(Math.random() * num2 + num1 ));
}
randomNum(3, 12)

console.log(Math.ceil(1.8));
console.log(Math.round(1.8));
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));
//ary max
Math.max.apply(null, [ 5, 7, 4, 9, 1])
console.log(Math.max(0, -1));
console.log(Math.min(10, 100));




function startJanken(){
  var janken = ['Gu-','Tyoki','Pa-']
  var user1 = Math.floor(Math.random() * 3)
  var user2 = Math.floor(Math.random() * 3)
  console.log('User1 is '+janken[user1]);
  console.log('User2 is '+janken[user2]);
  var judge1 = user2 - user1
  /*if(user1 == janken[0] && user2 == janken[1] ||
     user1 == janken[1] && user2 == janken[2] ||
     user1 == janken[2] && user2 == janken[0]){
    return 'User1 is Win!!!'
  }else if( user2 == janken[0] && user1 == janken[1] ||
     user2 == janken[1] && user1 == janken[2] ||
     user2 == janken[2] && user1 == janken[0]){
    return 'User2 is Win!!!'
  }else if( user1 === user2){
    console.log('It Drow...');
  }
  user1 == 0 && user2 == 1 ||
     user1 == 1 && user2 == 2 ||
     user1 == 2 && user2 == 0*/
  if(judge1 == 1 || judge1 == -2){
    return 'User1 is Win!!!'
  }else if( user1 === user2){
    console.log('It Drow...');
  }else{
    return 'User2 is Win!!!'
  }
}
console.log(startJanken());
