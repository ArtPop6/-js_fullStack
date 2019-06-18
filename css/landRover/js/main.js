(function() {
    /**
     * navbar
     * <i class="material-icons">
                        search
                    </i>
     */
    $('.ui.navbar .search-icon i')
    .click(function() {
        // console.log(this)
        const icon = $(this);
        if (icon.text() === 'search') {
            icon
                .text('close')
                .parents('.content')
                .addClass('searching')
        } else {
            icon 
                .text('search')
                .parents('.content')
                .removeClass('searching')
        }
        
    })
    // carousel
    $('.ui.hero.carousel')
    .slick({
        prevArrow: '<button class="ui prev button bottom"><i class="material-icons">chevron_left</i></button>',
        nextArrow: '<button class="ui next button bottom"><i class="material-icons">chevron_right</i></button>'
    })
})()