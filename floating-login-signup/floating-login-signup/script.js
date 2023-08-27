document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
let email=document.getElementById("email");
email.onblur=function(){
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!(email.value.match(validRegex))){
		document.getElementById("error").innerHTML="Invalid email";
	}
	else{
		document.getElementById("error").innerHTML="";
	}
}
let password=document.getElementById("password");
password.onblur=function(){
	var validRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!(password.value.match(validRegex))){
		document.getElementById("perror").innerHTML="Invalid password";
	}
	else{
		document.getElementById("perror").innerHTML="";
	}
}
