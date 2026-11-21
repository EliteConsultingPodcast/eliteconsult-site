/* Mobile menu only. Language choice is a set of links and needs no script. */
(function () {
  var root = document.documentElement;
  root.classList.add("js");

  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!btn || !nav) return;

  var label = btn.querySelector(".sr-only");
  var openLabel = btn.getAttribute("data-label-open") || "Menu";
  var closeLabel = btn.getAttribute("data-label-close") || "Close menu";

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (label) label.textContent = open ? closeLabel : openLabel;
  }

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      btn.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 900px)").matches) setOpen(false);
  });
})();
