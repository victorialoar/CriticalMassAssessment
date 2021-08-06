import $ from 'jquery';

function formSubmission(){
    $('form input[required]').each(function() {
        var $this = $(this);

        $this.blur(function() {
            // after the user enters and leaves the input, show the error message if it is left blank
            if($this.val() === '') {
                $this.siblings('.invalid-message').hide();
                $this.siblings('.error-message').show();
            }

            // if input type is email and the field has text in it, run the code to validate it
            if($this.val() != '' && $this.attr('type') === 'email') {
                var email = $this.val();
                
                // show the invalid message if the email is invalid
                if(!validateEmail(email)) {
                    $this.siblings('.invalid-message').show();
                };
            }
        });

        // once user starts to type in field, remove error message if present
        $this.on('keypress change', function() {
            $this.siblings('.error-message').hide();

            // if input type is email, run this code
            if($this.attr('type') === 'email') {
                var email = $this.val();
                
                // hide invalid message if the email address is valid
                if(!validateEmail(email)) {
                    $this.siblings('.invalid-message').hide();
                };
            }
        });
    });

    // run submit logic
    $('form').submit(function(event) {
        event.preventDefault();
        var $this = $(this);
        
        // show all error messages for required fields that are left empty
        $('form input[required]').each(function() {
            var $this = $(this);
            
            if($this.val() === '') {
                $this.siblings('.error-message').show();
            }
        });

        // if there are no error messages showing, sumbit form or fall into else
        if($('.error-message:visible, .invalid-message:visible').length == 0) {
            var result = $this.serializeArray();
            // logging to console as part of the assessment
            console.log(result);

            $.ajax({
                type: 'POST',
                data: $this.serialize(),
                success: function() {
                    // hide form and show thank you page
                    $( '.form-wrapper' ).fadeOut( 'slow', function() {
                        $( '.thankyou-wrapper' ).fadeIn('slow');

                        // log each of the form inputs into associated <span>
                        $.each(result, function(i, field) {
                            var fieldName = $('.data-wrapper').find('.' + field.name);
                            fieldName.append(field.value);
                        });
                    });
                }
            });            
        } else {
            // show all error messages and focus on the first invalid field
            var firstIssue = $('.error-message:visible, .invalid-message:visible').first();
            firstIssue.siblings('input').focus();
        }
    });
}

// validate email entry
function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( email );
}

// run function when docuemnt is ready
$(document).ready(function() {
    formSubmission();
});