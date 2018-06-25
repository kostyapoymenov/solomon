$(document).ready(function() {

    function checked(event) {
        const   main    = $(event),
                row     = $('.main-table__row'),
                input   = $('.main-table__input'),
                inputMy = $('.main-table__input-my');

        console.log(main);
        inputMy.on('click', function(){
            $(this).siblings(input).attr('checked', 'checked');
            $(this).parents(row).siblings().children('.main-table__input').removeAttr('checked');
            $(this).parents(main).children(row).removeClass('main-table__row--active');
            $(this).parents(row).addClass('main-table__row--active');
        });
    }
    checked('.main-left');
    checked('.main-right');
});