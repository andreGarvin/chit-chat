
var selectLang = 'ar';
function translate( obj, targetInput ) {
    
    if ( obj.text.length !== 0 ) {
        
        var API_KEY = 'AIzaSyCAg5StLQ3UHyaCdIdihjV8Od5sd8hGsDc';
    
        var url = 'https://www.googleapis.com/language/translate/v2?q='+ obj.text.split(' ').join('+') +'&target='+ obj.lang +'&key=' + API_KEY;

    
        $.getJSON(url, function( resp ) {
        
            resp = resp.data.translations[0];
        
        
            obj.resp_text = resp.translatedText;
            obj.detectLang = resp.detectedSourceLanguage;
    
            targetInput = targetInput === 'input_1' ? '#input_2' : '#input_1';
        
            $(targetInput).val( obj.resp_text );
        
            $('#gif').html("<p>" + obj.resp_txt + "</p>");
        });
    }
    
}


function bindInput( targetInput, value ) {
    
    
    if ( value.length !== 0 ) {
        
        switch ( targetInput ) {
            case 'input_1':
                
                translate({ text: value, lang: selectLang }, targetInput);
                break;
            case 'input_2':
                
                translate({ text: value, lang: selectLang }, targetInput);
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
            
            $('.dropdown-menu').append('<li class="lang" id='+ resp[i].language +'><a href="#">' + resp[i].name + '</a></li>');
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
    
    function changeText( lang_id ) {
        
        $('.Language').click(function() {
        
            var lang_btn = $(this).attr('id');
            var trg_txt = $('#'+lang_id).text();
        
            $('#' + lang_btn).text(trg_txt);
        });
    }
    
    $('.dropdown-menu').delegate('.lang', 'click', function() {
        
        selectLang = $(this).attr('id');
        
        changeText( selectLang );
        translate({ text: $('#input_1').val().length !== 0 ? $('#input_1').val() : $('#input_2').val(), lang: selectLang }, $('#input_1').val().length !== 0 ? 'input_1' : 'input_2');
    });
    
    $("#design").click(function(){
        
        $("#gif").show();
    });

});