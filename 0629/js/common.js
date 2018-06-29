$.parallax({
  debugMode:true
})
$('.box2').parallaxTiming({
  start: function(e){
    console.log('start', e);
    e.target.addClass('on')
  },
  end: function(e){
    console.log('end', e);
    e.target.removeClass('on')
  }
})

$('.box3').each(function(){
  console.log($(this));
  $(this).parallaxSpeed({
    style: 'top',
    speed: Math.random() * 3-1,
    fixScrollPosition:300
    })
})
for(var i = 0; i < 100; i++){
  $('.boxes').append('<div class="box3"></div>')
  $('.box3').eq(i).css({
    top: Math.random() * 1000 + 'px',
    left: Math.random() * 1000 + 'px',
    backgroundColor: `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()})`
  })
  $('.box3').eq(i).parallaxSpeed({
    style: 'top',
    speed: [Math.random() * 3 - 1, Math.random() * 3 - 1],
    fixScrollPosition: 0
})
}


$('.box').parallaxFit({
  start: 0,
  end: 500,
  fromStyle:{
    top: '100px',
    left: '10px'
  },
  toStyle:{
    top: '200px',
    left: '200px'
  },
  easing: 'linear',

  motion1Start: 600,
  motion1End: 1000,
  motion1FromStyle: {
    top: '200px',
    left: '200px',
    backgroundColor: 'rgba(0,0,0,20)',
    transform: 'scara(1)'
  },
  motion1ToStyle:{
    top:'300px',
    left:'300px',
    backgroundColor: 'rgba(256,0,0,20)',
    transform:'scara(2)'
  },
  motion1Easing:'easeInOutBack'
})
