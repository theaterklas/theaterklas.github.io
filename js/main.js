$(document).ready(function () {
  var setupRandomImage = function (element) {
    var $element = $(element);
    var width = $element.width();
    var height = $element.outerHeight();
    var src = 'https://unsplash.it/' + width + '/' + height + '?random&element=' + $element.prop('tagName');

    $element.css('background-image', 'url(' + src + ')');
  };

  setupRandomImage('.header');
});