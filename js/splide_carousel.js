// Doesn't load using npm: import Splide from '@splidejs/splide';
// Doesn't wait on loading the document either :(
// document.addEventListener( 'DOMContentLoaded', function() {

document.addEventListener('DOMContentLoaded', function () {
    const Splide = window.Splide;

    var slider_proj_1 = new Splide( 
        '#slider_proj_1', 
        {
            type        : 'loop',
            focus       : 'center',
            autoWidth   : true,
            breakpoints: {
                640: {
                    autoWidth : false,
                },
            }
        }
    );

    var slider_proj_2 = new Splide( 
        '#slider_proj_2', 
        {
            type        : 'loop',
            focus       : 'center',
            autoWidth   : true,
            breakpoints: {
                640: {
                    autoWidth : false,
                },
            }
        }
    );

    var slider_proj_3 = new Splide( 
        '#slider_proj_3', 
        {
            type        : 'loop',
            focus       : 'center',
            autoWidth   : true,
            breakpoints: {
                640: {
                    autoWidth : false,
                },
            }
        }
    );

    var slider_proj_4 = new Splide( 
        '#slider_proj_4', 
        {
            type        : 'loop',
            focus       : 'center',
            autoWidth   : true,
            breakpoints: {
                640: {
                    autoWidth : false,
                },
            }
        }
    );

    var slider_proj_5 = new Splide( 
        '#slider_proj_5', 
        {
            type        : 'loop',
            focus       : 'center',
            autoWidth   : true,
            breakpoints: {
                640: {
                    autoWidth : false,
                },
            }
        }
    );

    var slider_proj_6 = new Splide( 
        '#slider_proj_6', 
        {
            type        : 'loop',
            focus       : 'center',
            autoWidth   : true,
            breakpoints: {
                640: {
                    autoWidth : false,
                },
            }
        }
    );

    slider_proj_1.mount();
    slider_proj_2.mount();
    slider_proj_3.mount();
    slider_proj_4.mount();
    slider_proj_5.mount();
    slider_proj_6.mount();
});
