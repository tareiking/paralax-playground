// init controller
var controller = new ScrollMagic();

// assign handler "scene" and add it to controller
var scene = new ScrollScene({duration: 300})
                .setPin("img.left-image") // pins the element for a scroll distance of 100px
                .addTo(controller); // add scene to controller