$( function(){
    var navBreakPoint = 120;
    var nav = $( 'nav#primary-nav' );
    var className = 'minimized';

    var updateNavBar = function(){
        if( window.pageYOffset > navBreakPoint ){
            nav.addClass( className );
        }
        else{
            nav.removeClass( className );
        }
    };

    updateNavBar();

    $( window ).on( 'scroll', function(){
        updateNavBar();
    } );
} );

