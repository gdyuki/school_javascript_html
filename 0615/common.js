function tab(option){
    const tabMenuItem = option.el.find('.tabmenuItem')
    const tabItem = option.el.find('.tabItem')
    const prev = option.el.find('.prev');
    const next = option.el.find('.next')

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
      var AllItemNum = tabMenuItem.length - 1
      if(option.isRoop){
        num = num > AllItemNum ? 0 : num ;
        num = num < 0 ? AllItemNum : num ;
      }else {
        num = Math.min(tabMenuItem.length - 1, num);
        num = Math.max(0, num);
      }
      tabMenuItem.removeClass('on')
      tabItem.removeClass('on')
      tabMenuItem.eq(num).addClass('on')
      tabItem.eq(num).addClass('on')

      currentNum = num;
      console.log(currentNum);
    }
}
tab({
  el: $('.tab1'),
  isRoop: true
})
tab({
  el: $('.tab2'),
})
