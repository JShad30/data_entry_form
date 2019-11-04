$(document).ready(function() {
    $("#details-next-button").on("click", function(e) {
        e.preventDefault();

        // First part of form variable data
        var firstname = $('#firstname').val();
        var surname = $('#surname').val();
        var email = $('#email').val();

        if (firstname.length === 0) {
            $("#firstname-message").show("active");
        }

        if (surname.length === 0) {
            $("#surname-message").show("active");
        }

        if (email.length === 0) {
            $("#email-message").show("active");
        }

        if (firstname.length > 0 && surname.length > 0 && email.length > 0) {
            $("#data-form-details-content").slideUp("fast");
            $("#data-form-comments-content").slideDown("fast");
        }
	  });

	  $("#comments-next-button").on("click", function(e) {
        e.preventDefault();

        // Second part of form variable data
        var telephone = $('#telephone').val();
        var gender = $('#gender').val();
        var dobday = $('#dob-day').val();
        var dobmonth = $('#dob-month').val();
        var dobyear = $('#dob-year').val();

        if (telephone.length === 0) {
            $("#telephone-message").show("active");
        }

        if (gender.value != "Male" || gender.value != "Female") {
            $("#gender-message").show("active");
        }

        if (dobday.length === 0) {
            $("#dob-message").show("active");
        }

        if (dobmonth.length === 0) {
            $("#dob-message").show("active");
        }

        if (dobyear.length === 0) {
            $("#dob-message").show("active");
        }

        if (telephone.length > 0) {
            $("#data-form-comments-content").slideUp("fast");
            $("#data-form-final-comments-content").slideDown("fast");
        }
    });

    $("#final-comments-next-button").on("click", function(e) {
        e.preventDefault();
        $("#data-form-final-comments-content").slideUp("fast");
        $("#form-complete-message").show("active");
    });
});
