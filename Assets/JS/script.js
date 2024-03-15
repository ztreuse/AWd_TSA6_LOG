$(document).ready(function() {
    // Show sign up form
    $("#btnradio1").click(function(e) {
        e.preventDefault();
        $("#login").show();
        $("#signup").hide();
        $("label[for='btnradio1']").addClass('btn-selected');
        $("label[for='btnradio2']").removeClass('btn-selected');
    });
    $("#btnradio2").click(function(e) {
        e.preventDefault();
        $("#signup").show();
        $("#login").hide();
        $("label[for='btnradio2']").addClass('btn-selected');
        $("label[for='btnradio1']").removeClass('btn-selected');
    });
});

$(document).ready(function() {
    $('.action').click(function(e) {
        e.preventDefault();

        var firstName = $('#floatingInput1').val();
        var lastName = $('#floatingInput2').val();
        var email = $('#floatingInput3').val();
        var password = $('#floatingPassword1').val();
        var confirmPassword = $('#floatingPassword2').val();

        $('#modalFirstName').text(firstName);
        $('#modalLastName').text(lastName);
        $('#modalEmail').text(email);
        $('#modalPassword').text(password);
        $('#modalConfirmPassword').text(confirmPassword);
    });
});