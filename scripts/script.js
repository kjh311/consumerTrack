

function validateNameForm() {

	var nameFormWrapper = document.getElementById("name-form-wrapper");
	var emailWrapper = document.getElementById("email-wrapper");

	nameFormWrapper.className -= "visible";
    // x.className += " fadeOut ";
    nameFormWrapper.className += " hidden ";

    emailWrapper.className -= "hidden";
    emailWrapper.className += "visible";



}




function validateEmailForm(){

	
	var emailInput = document.getElementById('email-input');
	var emailAddress = document.getElementById('email-input').value;
	var acountExistsWarning = document.getElementById("account-exists-wrapper");

	if(emailAddress === "testemail@test.com"){
		acountExistsWarning.className -= "hidden"
		// acountExistsWarning.className += "visible"
		// emailInput.className += "invalid-form"
		emailInput.style.borderColor = "red";
		return false;
	}



}

function checkInvalid(){

	var emailInput = document.getElementById('email-input');
	var acountExistsWarning = document.getElementById("account-exists-wrapper");

	emailInput.style.borderColor = "#a7a7a7"

	if(!acountExistsWarning.classList.contains("hidden")){
		acountExistsWarning.className += " hidden "
		// alert(acountExistsWarning.classList.contains("hidden"))
	}
	// 
}



