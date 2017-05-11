function translate( obj ) {
    
    var _0xeca7 = ["\x41\x49\x7A\x61\x53\x79\x44\x51\x33\x2D\x5F\x74\x50\x68\x52\x41\x75\x36\x62\x63\x6D\x39\x75\x5A\x73\x66\x49\x2D\x4F\x67\x59\x63\x61\x67\x76\x48\x55\x6D\x41"];
    var API_KEY= _0xeca7[0];
    
    
    var url = 'https://www.googleapis.com/language/translate/v2?q='+ obj.text.split(' ').join('+') +'&target='+ obj.lang +'&key=' + API_KEY;

    $.getJSON(url, function( resp ) {
        
        resp = resp.data.translations[0];
        
        obj.resp_text = resp.translatedText;
        obj.detectLang = resp.detectedSourceLanguage;
        
        console.log( obj );
    })
}


function bindInput( targetInput, value ) {
    
    
    if ( value.length !== 0 ) {
        
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
    else {
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
            
            $('.dropdown-menu').append('<li id='+ resp[i].language +' class="lang"><a href="#">' + resp[i].name + '</a></li>');
        }
    });
    
    $('.Txt').keyup(function( e ) {
        
        if ( $('textarea').attr('id') === 'input_1' || 
            $('textarea').attr('id') === 'input_2' ) {
            
            var input = $('textarea').attr('id');
            
            $('.Txt').keydown(function( e ) {
        
                if ( e.which === 8 && $('#'+input).val().length === 1 ) {
            
                    bindInput( input, '' );
                }
            });
            
            bindInput( input, $('#'+$('textarea').attr('id')).val() );
        }
    });
    
    $('.lang').click(function() {
        
        console.log('bdbsja');
    });
    
});
