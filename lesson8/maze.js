$(document).ready(function () {
  $(".boundary").mouseenter(function () {
    $(".boundary").addClass("youlose");
    setTimeout(function () {
      alert("You lose!");
    }, 2000);
  });

  $("#start").click(function () {
    $(".boundary").removeClass("youlose");
  });

  $("#end").mouseenter(function () {
    alert("You win!");
  });
});
