//#region Function declarations
// Toggles hiding and showing list adjacent to headers.
function toggle() {
	// toggle the minus class, which determines whether the image before the book header is a + or a -.
	$(this).toggleClass("minus");
	
	// show the adjacent element list if the minus class is on the header element.
	if ($(this).attr("class") === "minus") {
		$(this).next().show();
	}
	// ...and hide it otherwise.
	else {
		$(this).next().hide();
	}
}

function showLinkPicture() {
	//assign the current element's href attribute value to the #image element's src attribute
	var imageUrl = $(this).attr("href");
	$("#image").attr("src", imageUrl);
	// prevent the default action, navigation to a new page on clicking an anchor element.
	event.preventDefault();
}

// preload images.
function preloadImages() {
	let bookImage = new Image();
	bookImage.src = $(this).attr("href");
}

//#endregion


//#region document ready function calls
$(function() {
	$("#categories a").each(preloadImages);
	$("#categories h2").click(toggle);	
	$("#categories a").click(showLinkPicture);
}
);
//#endregion

