$(document).ready(function () {
  'use strict';
  var setupRandomImage = function (element) {
    var $element, width, height, src, image;
    $element = $(element);
    width = $element.width();
    height = $element.outerHeight();
    image = '304';
    src = 'https://unsplash.it/g/' + width + '/' + height + '?blur&image=' + image + '&element=' + $element.prop('tagName');
    
    $element.css('background-image', 'url(' + src + ')');
  };
  
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
  
  setupRandomImage('header');
  setupTwitter(document, "script", "twitter-wjs");
});
