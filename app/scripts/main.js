$(
  function(){
    var attr_class=$(".navbar").attr("class");
    var splitted = attr_class.split("-");
    var color_class = splitted[1];
    $(".navbar").find("a").addClass("color-"+color_class);
  }
);
