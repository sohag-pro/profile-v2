(function($){
  $(function(){

    $('.collapsible').collapsible();

    setTimeout(function() {
      //your code to be executed after 1 second
      M.toast({html: 'Click on title for more info.'})
    }, 5000);

  }); // end of document ready
})(jQuery); // end of jQuery name space
