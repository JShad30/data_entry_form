
$(document).ready(function() {
    $("#details-next-button").on("click", function() {
    		$("#data-form-details-content").slideUp("fast");
    		$("#data-form-comments-content").slideDown("fast");
	  });
	  $("#comments-next-button").on("click", function() {
    		$("#data-form-comments-content").slideUp("fast");
    		$("#data-form-final-comments-content").slideDown("fast");
    });
    $("#data-form-details-header").on("click", function() {
        $("#data-form-details-content").slideDown("fast");
        $("#data-form-comments-content").slideUp("fast");
        $("#data-form-final-comments-content").slideUp("fast");
    });
    $("#data-form-comments-header").on("click", function() {
        $("#data-form-details-content").slideUp("fast");
        $("#data-form-comments-content").slideDown("fast");
        $("#data-form-final-comments-content").slideUp("fast");
    });
    $("#data-form-final-comments-header").on("click", function() {
        $("#data-form-details-content").slideUp("fast");
        $("#data-form-comments-content").slideUp("fast");
        $("#data-form-final-comments-content").slideDown("fast");
    });
});
