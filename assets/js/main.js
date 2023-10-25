(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {







        // Script for OffCanvas Menu Activation
        $(document).ready(function () {
            $('.header__bar').on('click', function () {
                $('.offcanva, .overlay').addClass('active');
            })

            $('.cross').on('click', function () {
                $('.offcanva, .overlay').removeClass('active');
            })

            $('.overlay').on('click', function () {
                $('.offcanva, .overlay').removeClass('active');
            })
        })





    });


    jQuery(window).load(function () {


    });


}(jQuery));
