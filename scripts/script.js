

function validateNameForm() {
//  var firstForm = document.getElementByClassName("name-form-wrapper");
var nameFormWrapper = document.getElementById("name-form-wrapper");
var emailWrapper = document.getElementById("email-wrapper");
// alert("asdf")
// var x = 10;
	
	// alert(x)
	nameFormWrapper.className -= "visible";
    // x.className += " fadeOut ";
    nameFormWrapper.className += " hidden ";

    emailWrapper.className -= "hidden";
    emailWrapper.className += "visible";


    // alert(x.classList.contains("hidden"))

}




function validateEmailForm(){



}



