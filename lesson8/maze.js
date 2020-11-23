$(document).ready(function () {
  $(".boundary").mouseover(function () {
    $(".boundary").addClass("youlose");
    $(".boundary").attr("disabled", true);
    setTimeout(function () {
      alert("You lose!");
    }, 1000);
  });

  $("#start").click(function () {
    $(".boundary").removeClass("youlose");
    $(".boundary").attr("disabled", false);
  });

  $("#end").mouseenter(function () {
    alert("You win!");
  });
});
