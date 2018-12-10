header('Content-Type: application/javascript');
$(document).ready(function(){
$("#loaderDiv").hide();
    
    $("#submit-button").click(function(){
        console.log('The button was clicked');
        $("#loaderDiv").show();
        
    });
    
    $("#hide").click(function(){
        $("#loaderDiv").hide();
    });
    
});
