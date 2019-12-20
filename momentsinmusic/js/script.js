/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


$(document).ready(function() {

	var winHeight = $(window).innerHeight(); // setting winHeight to be the variable for browser height

    $(".panel").height(winHeight);
    $("body").height(winHeight*$(".panel").length*0.5); // sets height of body based on number of divs on the page

    $(window).on('scroll',function(){
    	$(".left").css('bottom',$(window).scrollTop()*-1); // enables reverse scrolling of left side of the screen
	});


    var individualDivHeight = $(".panel").height(); // measures the height of each panel

    $(window).scroll(function(){
        var _cur_top = $(window).scrollTop(); // measures how much scrolling was done
        var totalHeight = $('.left').height(); // measures the height of entire page
        var posToScroll = Math.round(_cur_top / individualDivHeight) * individualDivHeight; // calculates how much scrolling needs to be done to snap to next or previous panel

        $('html, body').stop().animate({scrollTop: posToScroll}, 150); // automatically scrolls to next or previous panel based on the results of the previous line of code. "150" is the strength of the snap
    });


}); //end of doc


	
	
