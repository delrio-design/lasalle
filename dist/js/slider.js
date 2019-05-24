jQuery(document).ready(function () {
    const slider = jQuery('#home-slider').slippry({
        controls: true,
        pager: false,
        auto: true,
        autoHover: true,
        captions: false
    });

    jQuery('#slider-stop').click(function() {
        slider.stopAuto();
    });

    jQuery('#slider-start').click(function() {
        slider.startAuto();
    });

});
