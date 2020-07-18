"use strict";
let $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    let image1 = $("image1");           
    let image2 = $("image2");           
    
    // preload images 
    let links = $("image_list").getElementsByTagName("a");
    let i, link, image;

    // attach mouseover and mouseout events for each image
	// on mouseover, set image 1's source to images/release
    image1.onmouseover = function() {
		image1.src = "images/release.jpg";
    };
	// on mouseout, set image 1's source back to images/hero
    image1.onmouseout = function() {
        image1.src = "images/hero.jpg";
    };
	// on mouseover, set image 2's source to images/deer    
    image2.onmouseover = function() {
        image2.src = "images/deer.jpg";
    };
	// on mouseout, set image 1's source back to images/bison
    image2.onmouseout = function() {
        image2.src = "images/bison.jpg";
    };
};
