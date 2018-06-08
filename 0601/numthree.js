
////////// 3 num and , ////////////////
function cutthree(num1){
  var num = num1.toString()
  numlen = num.length
  var marknum = ''
  for(var i = numlen  - 1, j = 1; i >= 0; i-- , j++){
    marknum = num[i] + marknum
    if(j%3 === 0 && j !== 0){
      marknum = ',' + marknum;
    }
  }
  return marknum
}
console.log(cutthree(1234567890));
