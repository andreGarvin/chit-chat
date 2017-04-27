function translate( obj ) {
    
    var API_key = 'AIzaSyCAg5StLQ3UHyaCdIdihjV8Od5sd8hGsDc';
    var url = 'https://www.googleapis.com/language/translate/v2?q='+ obj.text +'&target='+ obj.language +'&key=' + API_key;

    $.getJSON(url, function( resp ) {
        
        resp = resp.data.translations[0];
        
        obj.resp_text = resp.translatedText;
        obj.detectLang = resp.detectedSourceLanguage;
        
        console.log( obj );
    })
}

$(document).ready(function() {
    $.getJSON('https://www.googleapis.com/language/translate/v2/languages?target=en&key=AIzaSyCAg5StLQ3UHyaCdIdihjV8Od5sd8hGsDc', function( resp ) {
        resp = resp.data.languages;
        
        for ( var i in resp ) {
            $('.dropdown-menu').append('<li><a href="#">' + resp[i].name + '</a></li>');
        }
    });
    
    $('#input_1').keydown(function(e) {
        
        if ( $('#input_1').val().length === 0 ) {
            $('#input_2').val('');
            return;
        }
        
        $('#input_2').val( $('#input_1').val() );
    });
    
    
});

// function detect( obj ) {
    
//     var url = 'https://www.googleapis.com/language/translate/v2/detect?q='+ obj.text +'&key=' + API_key;
    
//     $.getJSON(url, function( resp ) {
        
//         resp = resp.data.detections[0][0];
        
//         if ( resp.language !== 'und' ) {
//             obj.language = resp.language;
            
//             translate( obj );
//             return;
//         }
//         console.log('Not a language');
//     });
// }
