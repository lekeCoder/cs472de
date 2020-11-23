$(document).ready(function () {
  $(".boundary").mouseover(function () {
    $(".boundary").addClass("youlose");
    setTimeout(function () {
      alert("You lose!");
    }, 1000);
  });

  $("#start").click(function () {
    $(".boundary").removeClass("youlose");
  });

  $("#end").mouseenter(function () {
    alert("You win!");
  });
});
