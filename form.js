$(window).load(function(){
    $('#loginModal').modal('show'); 
});

$(document).ready(function(){
    $('#loginButton').click(function(){
        var input = $('#passkeyInput').val();
        console.log(input);
        if (input === 'password') {
            $('#loginModal').modal('hide');
            $("#pageContent").removeClass('hide');  
        } else {
        	$("#wrongIcon").removeClass('hide');  	
        }        
    });
});