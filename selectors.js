


//Query course

$("document").ready(function () {

//Click to see and hide intro: 

  $("#show").on("click", function(){
    $("intro").show();
  });
  $("#hide").on("click", function(){
    $("intro").hide();
  });

//Click on Contact Us div: 

  $("#clickBox").on("click", whenMouseIsClicked);
  $("#clickBox").on("mouseleave", whenMouseLeaves);

  function whenMouseIsClicked(){
    $("#clickBox").html("<h5> Thank you! </h5>");

  }

  function whenMouseLeaves(){
    $("#clickBox").html("<h5> See you soon! </h5>");
    
  }



  //   $("body").append('<div class="px-3"> <h4> Contact us now! </h4> </div>');

  //   $("p:first").css("border","1px solid grey")
  // //   $("p:last").css("border","1px solid blue")

  //     var newText = $("<p>");
  //     newText.append("<h5>  Our platform is designed to provide you with a comprehensive view of your financial health, all in one easy-to-use location. Whether you're a seasoned investor or just starting out, our dashboard is tailored to meet your unique needs. </h5>");
  //     $("#textBox").html(newText);
});
