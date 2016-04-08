$("#contactForm").submit(function(event) {
	if(event.isDefaultPrevented()) {
		// handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");

	} else {
    //cancels the form submission
    event.preventDefault();
    submitForm();
   }
});

function submitForm() {
	//Initiate Variable with form content
	var name = $("#name").val();
	var email = $("#email").val();
	var message = $("#message").val();

	$.ajax({
		type: "POST",
		url: "process.php",
		data: "name=" + name + "&email=" + email + "&message=" + message,
		success: function(text) {
			if(text == "success"){
				formSuccess();
			} else {
				formErrror();
				submitMSG(false,text);
			}
			
		}
	});
}

function formSuccess() {
$("#contactForm")[0].reset();
submitMSG(true, "Message Submitted!") 
}
