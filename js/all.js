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

// var style = $('style').html()
//                 .replace(/\r\n|\n/g,"")
//                 .replace(/\s+/g, "")
//                 .split(';}').join('')                  //把一些有的沒的和{}去除
// var stylestr = style.substr(6,style.length-1)
// var result = {},                                       //新增一個結果會放的物件
//     attributes = stylestr.split(';');                  //把他們變成陣列並用;分開->["display:flex"]
// for (var i = 0; i < attributes.length; i++) {
//     var entry = attributes[i].split(':');              //"display:flex"->["display","flex"]
//     result[entry.splice(0,1)[0]] = entry.join(':');    //result["display"] = 
// }



