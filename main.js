$(function() {
  
    // menu button
    $('.toggle_btn').on('click', function() {
        if ($('#header').hasClass('open')) {
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });

    // Mask
    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    })

})