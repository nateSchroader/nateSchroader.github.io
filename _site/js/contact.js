$( function(){
    var form = $( '#contact-form' );
    var button = form.find( 'button' );

    form.submit( function( event ){
        event.preventDefault();
    } );

    form.validate( {
        errorElement: 'span',
        errorClass: 'help-block',
        highlight: function( element, errorClass, validClass ){
            var element = $( element );
            element.addClass( errorClass ).removeClass( validClass );
            element.parent( '.has-feedback' ).addClass( 'has-error' );
        },
        unhighlight: function( element, errorClass, validClass ){
            var element = $( element );
            element.removeClass( errorClass );
            element.parent( '.has-feedback' ).removeClass( 'has-error' );
        },
        submitHandler: function(){
            //$( 'contact-iframe' )
            //$.ajax( {
            //    type: 'POST',
            //    url: form.attr( 'action' ),
            //    data: form.serialize(),
            //    dataType: "xml",
            //    success: function( response ){
            //        form.html( '<h2 class="text-center">Thank You</h2><h4 class="text-center">I will respond as soon as possible</h4>' );
            //    },
            //    error: function( err ){
            //        console.log( err );
            //    }
            //} );
        }
    } );

    button.attr( 'type', 'submit' );
} );

