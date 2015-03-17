$(document).ready(function () {
  var setupRandomImage = function (element) {
    var $element, width, height, src;
    $element = $(element);
    width = $element.width();
    height = $element.outerHeight();
    src = 'https://unsplash.it/' + width + '/' + height + '?blur&random&element=' + $element.prop('tagName');

    $element.css('background-image', 'url(' + src + ')');
  };

  setupRandomImage('.header');
  
  var setupTwitter = function (d, s, id) {
    var js, fjs, p;
    fjs = d.getElementsByTagName(s)[0];
    p = /^http:/.test(d.location) ? 'http' : 'https';
    
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  };
  
  setupTwitter(document, "script", "twitter-wjs");
});

/*!function (d, s, id) {
  var js;
  var fjs = d.getElementsByTagName(s)[0];
  var p = /^http:/.test(d.location) ? 'http':'https';
  if(!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
}();*/