document.addEventListener("DOMContentLoaded", function () {
  var delay = 250;
  document.getElementById("text-area").value =
    "check the console to see the result of the sum, multiply, reverse and filterLongWords functions!";
  document.getElementById("start").onclick = function () {
    let anim = `${document.getElementById("animation").value}`;
    console.log(`anim: ${anim}`);
    //console.log(ANIMATIONS[anim]);
    if (anim === "Blank") return;
    textValue = document.getElementById("text-area").value;
    document.getElementById("text-area").value = ANIMATIONS[anim];
    runAnimation(ANIMATIONS[anim]);
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
  };

  document.getElementById("stop").onclick = function () {
    clearInterval(runAnim);
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("text-area").value = textValue;
  };

  document.getElementById("turbo").addEventListener("change", (event) => {
    if (event.target.checked) {
      delay = 50;
    } else {
      delay = 250;
    }
    let anim = `${document.getElementById("animation").value}`;
    clearInterval(runAnim);
    runAnimation(ANIMATIONS[anim]);
  });
  document
    .getElementById("fontsize")
    .addEventListener("change", handleFontSizeChange);

  function runAnimation(animText) {
    let anims = animText.split("=====\n");
    let index = 0;
    runAnim = setInterval(function () {
      document.getElementById("text-area").value = anims[index];
      index++;
      if (index === anims.length) {
        index = 0;
      }
    }, delay);
  }
  function handleFontSizeChange() {
    let fs = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = fs;
  }
});
