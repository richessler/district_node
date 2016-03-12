$(function(data){

  $('body').on('click', function() {
    console.log(data)
      // $.ajax({
      //     type: 'GET',
      //     url: 'http://localhost:1337/LEDon',
      //     dataType: "jsonp",
      //     jsonpCallback: "_testcb",
      //     cache: false,
      //     timeout: 5000,
      //     success: function(data) {
      //         $("#test").append(data);
      //     },
      //     error: function(jqXHR, textStatus, errorThrown) {
      //         alert('error ' + textStatus + " " + errorThrown);
      //     }
      // });
  });

  $( function() {
  // Cache the page container element
  // for maximum efficiency!
  var $pageBody = $('#container');

  // Helper function to grab new HTML
  // and replace the content
  var replacePage = function(url) {
    $.ajax({
      type: 'GET',
      url: url,
      cache: false,
      dataType: 'html'
    })
    .done( function(html) {
      $pageBody.html(html);
    });
  };

  // Intercept all link clicks
  $('body').delegate('a', 'click', function(e) {
    console.log('asdasda')

    // Grab the url from the anchor tag
    var url = $(this).attr('href');

    // Detect if internal link (no http://...)
    if (url && url.indexOf('/') === 0) {
      e.preventDefault();
      var newUrl = '/detail'+url;

      // Replace the page
      replacePage(newUrl);
    } else {
      // Don't intercept external links
    }
  });
});

})
