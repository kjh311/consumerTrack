

function validateNameForm() {

	var nameFormWrapper = document.getElementById("name-form-wrapper");
	var emailWrapper = document.getElementById("email-wrapper");

	nameFormWrapper.className -= " visible ";
    nameFormWrapper.className += " hidden ";
    emailWrapper.className -= " hidden ";
    emailWrapper.className += " visible ";

}

function firstNameInvalid(){
	var firstNameForm = document.getElementById("first-name-form");
	firstNameForm.style.borderColor = "red";
}


function validateEmailForm(){

	
	var emailInput = document.getElementById('email-input');
	var emailAddress = document.getElementById('email-input').value;
	var acountExistsWarning = document.getElementById("account-exists-wrapper");

	if(emailAddress === "testemail@test.com"){
		acountExistsWarning.className -= " hidden "
		emailInput.style.borderColor = "red";
		return false;
	}
}

function checkDuplicateEmail(){

	var emailInput = document.getElementById('email-input');
	var acountExistsWarning = document.getElementById("account-exists-wrapper");

	emailInput.style.borderColor = "#a7a7a7"

	if(!acountExistsWarning.classList.contains("hidden")){
		acountExistsWarning.className += " hidden "
	}

}



