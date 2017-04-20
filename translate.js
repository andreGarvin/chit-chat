// $(document).ready(function() {
    
//     $('#translate').click(function() {
//         detect({
//             type: 'transalte',
//             text: 12321,
//         });
//     });
// });


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
