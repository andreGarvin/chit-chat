$(document).ready(function() {
    
    $('#translate').click(function() {
        translate();
    });
});

var API_key = 'AIzaSyCAg5StLQ3UHyaCdIdihjV8Od5sd8hGsDc';

function translate( obj ) {
    
    var url_source = 'https://www.googleapis.com/language/translate/v2?q='+ obj.text +'&target=zh&key=' + API_key;
    var url_translate = ' https://www.googleapis.com/language/translate/v2?q='+ obj.text +'&target=zh&source='
    // ;obj.sourceLang +'&key=' + API_key;
    
    if ( obj.type === 'sourceLang' ) {
        
        return;
    }
    
    
}

function detect( text ) {
    var url = 'https://www.googleapis.com/language/translate/v2/detect?q=this+is+text&key=' + API_key; 
}
