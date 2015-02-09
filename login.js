$(window).load(function(){
    $('#loginModal').modal('show'); 
});

$(document).ready(function(){
    var myFirebaseRef = new Firebase("https://nishadagrawal.firebaseio.com/"); 
    var password;   
    myFirebaseRef.child("password").on("value", function(snapshot) {
        password = snapshot.val();
    });
    var resumeLink;   
    myFirebaseRef.child("resumeLink").on("value", function(snapshot) {
        resumeLink = snapshot.val();
    });

    $('#loginButton').click(function(){
        var input = $('#passkeyInput').val();
        if (input === password) {
            $('#loginModal').modal('hide');
            $("#pageContent").removeClass('hide');  
        } else {
        	$("#wrongIcon").removeClass('hide');  	
        }        
    });
    $('#resumeLink').click(function(){
        window.resumeLink.href = resumeLink;                
    });    
});