$(function() {

  enquire.register("screen and (min-width: 960px)", {
    match: function() {
      $.scrollSpeed(100,800);
    }
  });

});
