
const tabMenuItem = $('.tabmenuItem')
const tabItem = $('.tabItem')
const prev = $('.prev');
const next = $('.next')

var currentNum = 0;
move(currentNum);

tabMenuItem.on('click', function(){
  move($(this).index())
})

prev.on('click', function(){
  console.log('prev');
  move(currentNum-1)
})
next.on('click', function(){
  console.log('next');
  move(currentNum+1)
})

function move(num){
  //num = Math.min(tabMenuItem.length - 1, num);
  //num = Math.max(0, num);
  var AllItemNum = tabMenuItem.length - 1
  num = num > AllItemNum ? 0 : num ;
  num = num < 0 ? AllItemNum : num ;
  tabMenuItem.removeClass('on')
  tabItem.removeClass('on')
  tabMenuItem.eq(num).addClass('on')
  tabItem.eq(num).addClass('on')

  currentNum = num;
  console.log(currentNum);
}
