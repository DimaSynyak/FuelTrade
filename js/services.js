window.onload = function(){
    (function($){
            $('.order_btn').click(function(){
                $('.tab').css('display', 'none');
                $('#'+$(this).data('target')).slideDown(500);
                return false;
            });
    })(jQuery);
}
