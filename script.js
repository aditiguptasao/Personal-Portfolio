// Subtle appear-on-scroll. Content stays visible if JS or IntersectionObserver is unavailable.
(function () {
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  items.forEach(function (el) { io.observe(el); });
})();

// Expand / collapse all stories.
(function () {
  var btn = document.getElementById("toggle-stories");
  if (!btn) return;
  var stories = document.querySelectorAll("details.story");
  btn.addEventListener("click", function () {
    var open = btn.getAttribute("aria-pressed") !== "true";
    stories.forEach(function (d) { d.open = open; });
    btn.setAttribute("aria-pressed", String(open));
    btn.textContent = open ? "Collapse all stories" : "Expand all stories";
  });
})();
