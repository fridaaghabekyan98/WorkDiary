$(document).ready(function () {
    $('body').on("click", ".dropdown-menu", function (e) {
        $(this).parent().is(".open") && e.stopPropagation();
    });


    $("input[type='checkbox'].justone").change(function () {
        var a = $("input[type='checkbox'].justone");
        if (a.length == a.filter(":checked").length) {
            $(".select-text").html(' Deselect');
        } else {
            $(".select-text").html(' Select');
        }
        var total = $('input[name="options[]"]:checked').length;
        $(".dropdown-text").html('(' + total + ') Selected');
    });
});
