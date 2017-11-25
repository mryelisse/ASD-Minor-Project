

//Smooth Scroll
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 1000);
				
});


//Sliders
$("#swimmingContainer > div:gt(0)").hide();

setInterval(function() { 
  $('#swimmingContainer > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#swimmingContainer');
},  3000);


$("#massageContainer > div:gt(0)").hide();

setInterval(function() { 
  $('#massageContainer > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#massageContainer');
},  3000);


$("#nightContainer > div:gt(0)").hide();

setInterval(function() { 
  $('#nightContainer > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#nightContainer');
},  3000);



//enlarge when hover
// $(document).ready(function(){
//     $('#nightContainer > div').hover(function() {
//         $(this).css("cursor", "pointer");
//         $(this).toggle({
//           effect: "scale",
//           percent: "90%"
//         },200);
//     }, function() {
//          $(this).toggle({
//            effect: "scale",
//            percent: "80%"
//          },200);

//     });
// });  

// $(document).ready(function(){
//     $('#nightContainer > div').hover(function() {
//         $("#nightContainer > div").addClass('transition');

//     }, function() {
//         $("#nightContainer > div").removeClass('transition');
//     });
// });
$('#nightContainer > img').live("mouseover", function(){
          var $this=$(this);

          $this.attr('width','25%');
          $this.attr('height','25%');


       })

