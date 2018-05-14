function goTo(element, speed){
  var href= element.attr('href');
  var top = $(href0). offset().top;

  $("html,body").animate({scroolTop : top}, speed);
}

$(function(){
  $("#top a").click(function(e){
      e.preventDefault();
      goTo($(this),500);
  });
});