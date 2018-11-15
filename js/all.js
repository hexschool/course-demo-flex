$('.flexbox').append('<div class="container"><div class="grid-con"></div></div>');
for (let i = 0; i < 36; i++) {
  $('.grid-con').append('<div class="grid"></div>')
}


let aimsFd = $('.aims').css('flex-direction');
if( aimsFd == 'row' || aimsFd == 'row-reverse' ){
  $('.grid-con').append('<div class="main"></div>').append('<div class="vice"></div>')
  $('.flexbox').append('<h3 class="main">主軸線</h3>').append('<h3 class="vice">副軸線</h3>')
}else if( aimsFd == 'column' || aimsFd == 'column-reverse' ){
  $('.grid-con').append('<div class="main column"></div>').append('<div class="vice column"></div>')
  $('.flexbox').append('<h3 class="vice column">主軸線</h3>').append('<h3 class="main column">副軸線</h3>')
}
