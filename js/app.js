
// Capture the click event on a link to ann 

<img src= "images/europe1">
var $overlay= $('<div id="overlay"></div>');

var $image = $("<img>");
var $caption=$("<p></p>")
$overlay.append($image);
$overlay.append($caption);
console.log($overlay)
$("section").append($overlay);
$("#gallery a").click(function(event){
	event.preventDefault();
var imageLocation = $(this).attr("href");
var imageCaption= $(this).children("img").attr("alt");
$image.attr("src",imageLocation);
$caption.text(imageCaption);
$overlay.show();
$("ul").hide();
$("h3").hide();
$("footer").hide();
$("p").hide();

});
	//show the overaly
	//update the overlay with the image linked in the link
	//get child's alt attribute and set caption

//add overlay
 	//an image
 	// a caption
// when overlay is clicked 
$overlay.click(function(){
$(this).hide();
$("ul").show();
$("h3").show();
$("footer").show();
$("p").show();
})
 	//hide the overaly