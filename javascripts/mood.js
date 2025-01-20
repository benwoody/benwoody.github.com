(function() {
  let element = document.body;
  let theme = localStorage.getItem("theme");
  let onpageLoad = localStorage.getItem("theme");
  element.classList.toggle(theme);
  element.classList.add(onpageLoad);
})();

function themeToggle() {
  let element = document.body;
  element.classList.toggle("dark");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark");
  }
}
