$(document).ready(function (){
  let bigger = $("#bigger");
  let smaller = $("#smaller");
  let image = $("#image");
  image.attr("width", 200);

  bigger.click(function() {
    let current = image.attr('width');
    image.attr('width', Number(Number(current)+50));
  });

  smaller.click(function() {
    let current = image.attr('width');
    image.attr('width', Number(Number(current)-50));
  });

})
