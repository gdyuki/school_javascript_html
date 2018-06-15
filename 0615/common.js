
const tabMenuItem = $('.tabmenuItem')
const tabItem = $('.tabItem')
const prev = $('.prev');
const next = $('.next')

var currentNum = 0;

tabMenuItem.on('click', function(){
  move($(this).index())
})

prev.on('click', function(){
  console.log('prev');
  currentNum--;
  move(currentNum)
})
next.on('click', function(){
  console.log('next');
  currentNum++;
  move(currentNum)
})

function move(num){
  num = Math.min(tabMenuItem.length - 1, num);
  num = Math.max(0, num);
  tabMenuItem.removeClass('on')
  tabItem.removeClass('on')
  tabMenuItem.eq(num).addClass('on')
  tabItem.eq(num).addClass('on')
  currentNum = num;
  console.log(currentNum);
}
