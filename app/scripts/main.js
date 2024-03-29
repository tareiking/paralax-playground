// init controller
var controller = new ScrollMagic();

// assign handler "scene" and add it to controller
var scene = new ScrollScene({duration: 300})
                .setPin(".left-image") // pins the element for a scroll distance of 100px
                .addTo(controller); // add scene to controller


	$(document).ready(function($) {
		// build tween
		var leftTween = TweenMax.staggerFromTo("img.left-image", 0.5, {opacity: 0, left: -150}, { opacity: 1.0, left: 0}, 0.15);
		var rightTween = TweenMax.staggerFromTo("img.right-image", 0.5, {opacity: 0, right: -150}, { opacity: 1.0, right: 0}, 0.15);

		// build scene
		var scene = new ScrollScene({triggerElement: ".left-fade-in"})
						.setTween(leftTween)
						.addTo(controller);

		var scene2 = new ScrollScene({triggerElement: ".right-fade-in"})
						.setTween(rightTween)
						.addTo(controller);
	});