// Doesn't load using npm: import Splide from '@splidejs/splide';
// Doesn't wait on loading the document either :(
// document.addEventListener( 'DOMContentLoaded', function() {


const Splide = window.Splide;


var slider_proj_1 = new Splide( 
    '#slider_proj_1', 
    {
        updateOnMove: true,
        type        : 'loop',
        perPage     : 3,
        perMove     : 1,
        focus       : 'center',
        width       : '90%',
        autoWidth   : true,
        lazyLoad    : true,
    }
);

var slider_proj_2 = new Splide( 
    '#slider_proj_2', 
    {
        updateOnMove: true,
        type        : 'loop',
        perPage     : 3,
        perMove     : 1,
        focus       : 'center',
        width       : '90%',
        autoWidth   : true,
        lazyLoad    : true,
    }
);

var slider_proj_3 = new Splide( 
    '#slider_proj_3', 
    {
        updateOnMove: true,
        type        : 'loop',
        perPage     : 3,
        perMove     : 1,
        focus       : 'center',
        width       : '90%',
        autoWidth   : true,
        lazyLoad    : true,
    }
);

var slider_proj_4 = new Splide( 
    '#slider_proj_4', 
    {
        updateOnMove: true,
        type        : 'loop',
        perPage     : 3,
        perMove     : 1,
        focus       : 'center',
        width       : '90%',
        autoWidth   : true,
        lazyLoad    : true,
    }
);

var slider_proj_5 = new Splide( 
    '#slider_proj_5', 
    {
        updateOnMove: true,
        type        : 'loop',
        perPage     : 3,
        perMove     : 1,
        focus       : 'center',
        width       : '90%',
        autoWidth   : true,
        lazyLoad    : true,
    }
);

var slider_proj_6 = new Splide( 
    '#slider_proj_6', 
    {
        updateOnMove: true,
        type        : 'loop',
        perPage     : 3,
        perMove     : 1,
        focus       : 'center',
        width       : '90%',
        autoWidth   : true,
        lazyLoad    : true,
    }
);


slider_proj_1.mount();
slider_proj_2.mount();
slider_proj_3.mount();
slider_proj_4.mount();
slider_proj_5.mount();
slider_proj_6.mount();


// creates styling problems
//var elms = document.getElementsByClassName( 'splide' );
// for ( var i = 0; i < elms.length; i++ ) {
    // new Splide( elms[ i ] ).mount();
//}