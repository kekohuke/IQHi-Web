
var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "template_I0uPlCfB";
  myform.find("button").text("Sending...");
  emailjs.send(service_id, template_id, params)
  	.then(function(){ 
       alert("Sent!");
       myform.find("button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });

  return false;
});


(function ($) {
    'use strict';
    var $window = $(window);
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header_area').addClass('sticky');
            $('.nav-link').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
            $('.nav-link').removeClass('sticky');
        }
    });

})(jQuery);

