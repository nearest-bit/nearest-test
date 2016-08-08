/* $('#myDropdown').addClass('show');
    $('.dropbtn').click(function() {
    	var dropdowns = $('.dropdown-content');
    	for (var i in dropdowns) {
    		if(dropdowns[i].hasClass('show')){
    			dropdowns[i].removeClass('show');
    		}
    	}
    }); */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nearest-dropbtn')) {

    var dropdowns = document.getElementsByClassName("nearest-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).on('click','#login-btn',function() {
	/* location.href = "./admin.html"; */
	$.ajax({
		url: 'http://localhost:8080/nearest/admin/login.do',
		dataType: 'json',
		data: {
			id: $('#login-form-username').val(),
			password: $('#login-form-password').val()
		},
		method: 'post',
		success: function(result) {
			alert(result.status);
		},
		error: function(result) {
			alert(result.status);
		}
	});
	
});