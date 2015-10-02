window.onload = function(){
    (function($){

        $('.order_btn').click(function(){
            $('.tab').css('display', 'none');
            $('#row1').css('display', 'block');
            $('#row3').css('display', 'block');
            $('#'+$(this).data('target')).slideDown(500);

            $('html, body').animate({scrollTop: $('#row1').offset().top-100}, '500');
            return false;
        });
    })(jQuery);
}
