
////////// 3 num and , ////////////////
function cutthree(num1){
  var num = num1.toString()
  numlen = num.length
  stringdot = ','
  for(var i = numlen , j = 0; i >= 0; i-- , j++){
    if(j%3 === 0){
      marknum = num[i-1]
      marknum += ','
      console.log(marknum);
    }
  }

}
console.log(cutthree(1234567890));
