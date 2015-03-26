$(document).ready(function () {
  var setupRandomImage = function (element) {
    var $element, width, height, src;
    $element = $(element);
    width = $element.width();
    height = $element.outerHeight();
    image = '304';
    src = 'https://unsplash.it/g/' + width + '/' + height + '?blur&image=' + image + '&element=' + $element.prop('tagName');

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

// <![CDATA[
cc.initialise({
	cookies: {
		analytics: {},
		social: {}
	},
	settings: {
		consenttype: "implicit"
	}
});
// ]]>

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
