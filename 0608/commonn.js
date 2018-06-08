const button_  = document.querySelectorAll('.button');
const button = $('.button');
console.log(button);

button.on('click', function(){
    const ele = $(this)
    ele.css({backgroundColor: 'red'})
})
$('.addTag').on('click', function(){
  console.log('test');
  $('body').append('<p>Waaaaaai</p>')
})

const contents = $('.contents');
const content_button = $('.contents > .content_button');

console.log(content_button, contents);

content_button.on('click', function(){
  contents.toggleClass('on');
})
