jQuery(function($){
    $(".phone__input").mask("+7 (999) 999 9999", {placeholder:"*"}, {autoclear: false});


    var  textInputs = document.querySelectorAll('.text__input')    
    for(var i=0; i<textInputs.length; i++) {
        var textInput = textInputs[i]
        textInput.onkeypress = function(e) {
            if ("1234567890".indexOf(e.key) != -1)
                e.preventDefault();
        }
    }
 });