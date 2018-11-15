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


/**
 * Created by jyothi on 30/5/17.
module.e */
// import JsonCSS from 'JsonCSS';
const JsonCSS = {
    toJSON: function (text) {
      if (typeof text !== 'string') {
        console.error("Need a CSS string but given ", typeof text, text);
        return "Not a valid CSS..!";
      }
      let output = {}, lastKey, term, style, _this = this;
      try {
        text.split("{").forEach(item => {
          term = item.trim();
          if (term) {
            if (term.indexOf("}") === -1) {
              output[term] = {}; //it's a selector
              lastKey = term;
            } else { //contains styles and next selector
              term.substring(0, term.indexOf("}")).split(";").forEach(keyValue => {
                style = keyValue.split(":");
                if (style && style.length === 2) {
                  output[lastKey][style[0].trim().replace(/^\"|\"$/g, '')] = this._trimSemiColon(style[1].trim().replace(/^\"|\"$/g, '')); //for new style
                }
              });
              try { //may be End of Styles
                lastKey = term.split("}")[1].trim();
                if (lastKey) {
                  output[lastKey] = {}; //for new selector
                }
              } catch (e) {
                //no more selectors for our life
              }
            }
          }
        });
      } catch (e) {
        return "Not a valid CSS..!";
      }
      return output;
    },
    toCSS: function (json) {
      if (typeof json !== 'object') {
        console.error("Need a JSON object but given ", typeof json, json);
        return "Not a valid JSON..!";
      }
      let output = "";
      try {
        for (let selector in json) {
          if (json.hasOwnProperty(selector)) {
            output += selector + ' {\n';
            for (let style in json[selector]) {
              if (json[selector].hasOwnProperty(style)) {
                output += style + ': ' + json[selector][style] + ';\n';
              }
            }
            output += '}\n';
          }
        }
      } catch (e) {
        return "Not a valid JSON..!";
      }
      return output;
    },
    _trimSemiColon: function (text) {
      return text.slice(-1) === ';' ? text.slice(0, this.length - 1) : text;
    }
  
  }
  
  /**
  *
  * @param json {Object}
  * @returns {string}
  */
  
  
  /**
  *
  * @param text {string}
  * @returns {ArrayBuffer|Blob|Array.<T>|string}
  * @private
  */
  
  
  
  console.log(JsonCSS.toJSON(`
  h1 {
      color: #F1F1F1;
  }
  `))
  
  console.log(JsonCSS.toCSS({ 'h1': {color: '#F1F1F1'}}))


// var mystyle = $('style').html()
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

console.log(JsonCSS.toJSON($('style').html()))