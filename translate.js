function translate( obj, inputTarget ) {
    
    var API_KEY = 'AIzaSyCAg5StLQ3UHyaCdIdihjV8Od5sd8hGsDc';
    
    var url = 'https://www.googleapis.com/language/translate/v2?q='+ obj.text.split(' ').join('+') +'&target='+ obj.lang +'&key=' + API_KEY;

    $.getJSON(url, function( resp ) {
        
        resp = resp.data.translations[0];
        
        obj.resp_text = resp.translatedText;
        obj.detectLang = resp.detectedSourceLanguage;
    
        inputTarget = inputTarget === 'input_1' ? '#input_2' : '#input_1';
        console.log( inputTarget );
        $(inputTarget).val( obj.resp_text );
    });
}


function bindInput( targetInput, value ) {
    
    
    if ( value.length !== 0 ) {
        
        switch ( targetInput ) {
            case 'input_1':
                
                translate({ text: value, lang: 'ar'}, targetInput);
                break;
            case 'input_2':
                
                translate({ text: value, lang: 'ar'}, targetInput);
                break;
            default:
                break;
        }
        
    }
    else {
        
        // if the user deletes all the text at once
        switch ( targetInput ) {
            case 'input_1':
                
                $('#input_2').val( value );
                break;
            case 'input_2':
            
                $('#input_1').val( value );
                break;
            default:
                break;
        }
    }
    
}


$(document).ready(function() {
    
    $.getJSON('https://www.googleapis.com/language/translate/v2/languages?target=en&key=AIzaSyCAg5StLQ3UHyaCdIdihjV8Od5sd8hGsDc', function( resp ) {
        resp = resp.data.languages;
        
        for ( var i in resp ) {
            
            $('.dropdown-menu').append('<li id='+ resp[i].language +'><a class="lang" href="#">' + resp[i].name + '</a></li>');
        }
    });
    
    $('.Txt').keyup(function( e ) {
        
        if ( e.target.id === 'input_1' || 
            e.target.id === 'input_2' ) {
            
            var input = e.target.id;
            
            $('.Txt').keydown(function( e ) {
        
                if ( e.which === 8 && $('#'+input).val().length === 1 ) {
            
                    bindInput( input, '' );
                }
            });
            
            bindInput( input, $('#'+input).val() );
        }
    });
    
    $('.lang').click(function() {
        
        $(this).attr('id');
    });
    
<<<<<<< HEAD
});
$("#design").click(function(){
    $("#gif").show()
})
=======
});
>>>>>>> b63237ea834262891e53ad8fffac2202e664d579
