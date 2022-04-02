const Splide = window.Splide;

var main = new Splide( '#archived-projects-carousal', {updateOnMove: true,
                                                       type        : 'loop',
                                                       perPage     : 3,
                                                       perMove     : 1,
                                                       focus       : 'center',
                                                       width       : '90%',
                                                       autoWidth   : true,
                                                       lazyLoad    : true}
                    );
main.mount()