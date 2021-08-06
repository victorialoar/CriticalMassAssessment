/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
function formSubmission(){
    $('.form input').on('keyup', function(e) {
        $(this).addClass('edited');
    });

    $('.form [type="submit"]').on('click.formValidation', function(e) {
        e.preventDefault();

        shouldPrevent = false;
        errorList = [];

        $form = $(this).parents('form');
        $inputs = $form.find('input[required]');

        $inputs.each(function(index, input) {
            errorMessageSelector = 'label[for="' + $(input).attr('id') + '"] .error-message';
            $form.find(errorMessageSelector).removeAttr('aria-live');
            error = $form.find(errorMessageSelector);
            error.css('display', 'none');

            if(!input.validity.valid) {
                error.css('display', 'inline-block');
                shouldPrevent = true;
                errorList.push(error);

            } else {
                error.css('display', 'none');
            }
        });

        if(!$form[0].checkValidity()) {
            e.preventDefault();
            errorList[0].attr('aria-live', 'assertive');
        }

        if(errorList.length === 0) {
            window.location.replace("/thankyou.html");
        }
    });
}

$(document).ready(function() {
    formSubmission();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZm9ybVN1Ym1pc3Npb24oKXtcbiAgICAkKCcuZm9ybSBpbnB1dCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZWRpdGVkJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuZm9ybSBbdHlwZT1cInN1Ym1pdFwiXScpLm9uKCdjbGljay5mb3JtVmFsaWRhdGlvbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNob3VsZFByZXZlbnQgPSBmYWxzZTtcbiAgICAgICAgZXJyb3JMaXN0ID0gW107XG5cbiAgICAgICAgJGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgJGlucHV0cyA9ICRmb3JtLmZpbmQoJ2lucHV0W3JlcXVpcmVkXScpO1xuXG4gICAgICAgICRpbnB1dHMuZWFjaChmdW5jdGlvbihpbmRleCwgaW5wdXQpIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZVNlbGVjdG9yID0gJ2xhYmVsW2Zvcj1cIicgKyAkKGlucHV0KS5hdHRyKCdpZCcpICsgJ1wiXSAuZXJyb3ItbWVzc2FnZSc7XG4gICAgICAgICAgICAkZm9ybS5maW5kKGVycm9yTWVzc2FnZVNlbGVjdG9yKS5yZW1vdmVBdHRyKCdhcmlhLWxpdmUnKTtcbiAgICAgICAgICAgIGVycm9yID0gJGZvcm0uZmluZChlcnJvck1lc3NhZ2VTZWxlY3Rvcik7XG4gICAgICAgICAgICBlcnJvci5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG4gICAgICAgICAgICBpZighaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvci5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgICAgICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXJyb3JMaXN0LnB1c2goZXJyb3IpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCEkZm9ybVswXS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGVycm9yTGlzdFswXS5hdHRyKCdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihlcnJvckxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi90aGFua3lvdS5odG1sXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGZvcm1TdWJtaXNzaW9uKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=