window.onload = function () {
  // handle the color scheme switch; currently a toggle
  document.getElementById("theme-button").onclick = function () {
    display = document.getElementById("theme-display");

    if (display.getAttribute("data-theme") == "medieval") {
      display.setAttribute("data-theme", "modern");
    } else {
      display.setAttribute("data-theme", "medieval");
    }
  };
}