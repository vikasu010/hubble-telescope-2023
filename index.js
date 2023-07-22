$(document).ready(() => {
  $("#nav-menu-toggler").click(() => {
    const isVisible = $("#nav-menu").css("display") !== "none";
    $("#nav-menu").css("display", isVisible ? "none" : "block");
  });
});
