$(".search-icon").click(function() {
    $(this).toggleClass("fa-times");
    $(".search-screen").toggleClass("active");
    $("#text-found").text("");
    $("#text-found").removeClass("text-found");
    $("#autocomplete").val("");
});

$(".search-text").keyup(function() {
    if ($(this).val() != "") {
        $(".search-btn").css("opacity", 1);
        $(".search-btn").css("transform", "rotate(0deg)");
    } else {
        $(".search-btn").css("opacity", 0);
        $(".search-btn").css("transform", "rotate(45deg)");
    }
});

$("#autocomplete").autocomplete({
    minChars: 3,
    lookup: data,
    onSelect: function(suggestion) {
        $("#text-found").addClass("text-found");
        $("#text-found").text(suggestion.category + " : " + suggestion.value + " is found.");
    }
});