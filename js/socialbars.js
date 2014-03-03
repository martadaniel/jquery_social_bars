$(document).ready(function() {
	
	// ["Label" , "website link" , "bar color" , "bar image"]
	var social = [
	 ["aim", 		"http://www.aim.com/", 		"#ffd900", "images/aim.png"],
	 ["behance", 	"http://www.behance.net/", 	"#1769ff", "images/behance.png"],
	 ["digg", 		"http://digg.com/", 		"#2e9fff", "images/digg.png"],
	 ["dribbble", 	"http://dribbble.com/", 	"#8aba56", "images/dribbble.png"],
	 ["ember", 		"#", 						"#3fc380", "images/ember.png"],
	 ["evernote", 	"https://evernote.com/", 	"#5ba525", "images/evernote.png"],
	 ["facebook", 	"http://fb.com", 			"#3B5998", "images/facebook.png"],
	 ["flickr", 	"https://www.flickr.com/", 	"#0063dc", "images/flickr.png"],
	 ["forrst", 	"http://forrst.com/", 		"#5b9a68", "images/forrst.png"],
	 ["google+", 	"http://google.com", 		"#dd4b39", "images/google_plus.png"],
	 ["github", 	"http://github.com", 		"#171515", "images/github.png"],
	 ["last-fm", 	"http://www.last.fm/",  	"#c3000d", "images/last-fm.png"],
	 ["linkedin", 	"https://www.linkedin.com/","#0e76a8", "images/linkedin.png"],
	 ["paypal", 	"https://www.paypal.com", 	"#1e477a", "images/paypal.png"],
	 ["rss", 		"http://postrss.com/", 		"#ee802f", "images/rss.png"],
	 ["sharethis", 	"http://www.sharethis.com/","#96bf48", "images/sharethis.png"],
	 ["skype", 		"http://www.skype.com", 	"#00aff0", "images/skype.png"],
	 ["tumblr", 	"https://www.tumblr.com/", 	"#34526f", "images/tumblr.png"],
	 ["twitter", 	"https://twitter.com/", 	"#55acee", "images/twitter.png"],
	 ["vimeo", 		"https://vimeo.com/", 		"#44bbff", "images/vimeo.png"],
	 ["wordpress", 	"http://wordpress.com#", 	"#d54e21", "images/wordpress.png"],
	 ["yahoo", 		"https://www.yahoo.com/", 	"#720e9e", "images/yahoo.png"],
	 ["youtube", 	"http://youtube.com", 		"#c4302b", "images/youtube.png"],
	 ["zerply", 	"http://zerply.com/", 		"#9dcc7a", "images/zerply.png"]
	 ];

////////////////////////////////////////////////	
//// DO NOT EDIT ANYTHING BELOW THIS LINE! /////
////////////////////////////////////////////////
		
	$("#socialside").append('<ul class="mainul"></ul>');
	
	/// generating bars
	for(var i=0;i<social.length;i++){
	$(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
						'<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
	 				}
	
	/// bar click event
	$(".scli").click(function(){
		var link = $(this).text();		
		for(var i=0;i<social.length;i++){
			if(social[i][0] == link){
				window.open(social[i][1]);
			}
		}		
	});
	
	/// mouse hover event
	$(".scli").mouseenter(function() {	
		$(this).stop(true);	
		$(this).clearQueue();
			$(this).animate({
				left : "140px"
			}, 300);
				
	});

	/// mouse out event
	$(".scli").mouseleave(function(){
		$(this).animate({
			left:"0px"
		},700,'easeOutBounce');
	});

});
