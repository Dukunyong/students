

$(function() {
  function sizeIn() {
    var sizeCont = parseInt($(".font").css("fontSize")); // 获取原设定的font-size的值
      console.log(sizeCont);
    if(sizeCont == 30) { // 判断font-size增大到30像素时停止
      $(".font").css({fontSize:sizeCont});
    }else {
      $(".font").css({fontSize:sizeCont + 1});
    }
  }

  function sizeOut(){
    var sizeCont = parseInt($(".font").css("fontSize"));
    if(sizeCont == 12){ // 判断font-size减小到10像素时停止
      $(".font").css({fontSize:sizeCont});
    }else {
      $(".font").css({fontSize:sizeCont - 1});
    }
  }

  function sizeDefault() {
    $(".font").css({fontSize: "" });

  }

  var getRandomColor = function() {    
  return  '#' +    
    (function(color){    
    return (color +=  '123456789abcdef'[Math.floor(Math.random()*15)])    
      && (color.length == 6) ?  color : arguments.callee(color);    
  })('');    
  } 

  $(".ctrl a").click(function() {
    if($(this).index() ==0) {
      sizeIn();
    }else if($(this).index() == 1) {
      sizeOut();
    }else {
      sizeDefault();
    }
  })
  $(".ctrl .changeClolor").click(function(){
    $(".font").css({background:getRandomColor});
  })
});