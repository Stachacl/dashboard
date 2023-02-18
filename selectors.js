//Query course

$("document").ready(function () {

  $("body").append('<div class="px-3"> <h4> Contact us now! </h4> </div>');

  $("p:first").css("border","1px solid grey")
//   $("p:last").css("border","1px solid blue")


    var newText = $("<p>");
    newText.append("<h5> Please note that this is <i> a mockup version <i> of the dashboard and the information provided is not real. We hope you find this helpful in visualizing the potential functionality of our product. </h5>");
    $("#textBox").html(newText);

});
