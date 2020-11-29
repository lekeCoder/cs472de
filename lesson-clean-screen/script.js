$(document).ready(function () {
  $("#start").click(function () {
    var numOfCircles = parseInt($("#nrc").val());
    width = $("#width").val();
    growth = $("#gwamt").val();
    growth_rate = $("#gwrate").val();
    console.log(
      `onStart Click => numOfCircles: ${numOfCircles}  width: ${width}  growth: ${growth}  growth_rate: ${growth_rate}`
    );

    while (numOfCircles > 0) {
      $("<div></div>").addClass("rcircle").appendTo("#drawarea");

      numOfCircles = numOfCircles - 1;
      console.log(`num of circles: ${numOfCircles}`);
    }
    $(".rcircle").height(width);
    $(".rcircle").width(width);
    $(".rcircle").css("border-radius", width);
    $(".rcircle").click(function () {
      $(this).remove();
    });

    setupTimer();
  });

  function setupTimer() {
    var timer = setInterval(function () {
      if ($(".rcircle").length) {
        console.log(
          `setupTimer => width: ${width}  growth: ${growth}  growth_rate: ${growth_rate}`
        );
        let hgt = parseInt($(".rcircle").height()) + parseInt(growth);
        console.log(`height: ${hgt}`);
        $(".rcircle").height(hgt);
        $(".rcircle").width(hgt);
        $(".rcircle").css("border-radius", hgt);
      } else {
        clearInterval(timer);
      }
    }, growth_rate);
  }
});
