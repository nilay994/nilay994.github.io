// Doesn't load using npm: import Splide from '@splidejs/splide';
// Doesn't wait on loading the document either :(
// document.addEventListener( 'DOMContentLoaded', function() {


const Splide = window.Splide;

var splide_proj_6 = new Splide( 
    '#splide_proj_6', 
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

splide_proj_6.mount();


// creates styling problems
//var elms = document.getElementsByClassName( 'splide' );
// for ( var i = 0; i < elms.length; i++ ) {
    // new Splide( elms[ i ] ).mount();
//}