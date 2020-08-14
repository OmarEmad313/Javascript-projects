const sections = document.querySelectorAll("section");
var headerBubble = document.querySelector(".header__bubble");

sectionsOptions = {
  threshold: 0.7
};
const navCheck = function (enteries, observer) {
  if (enteries === null) return;
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const className = entry.target.classList;
    const activeAnchor = document.querySelector(
      `[data-target-section="${className}"]`
    );
    const coords = activeAnchor.getBoundingClientRect();
    headerBubble.style.setProperty("left", `${coords.left}px`);
    headerBubble.style.setProperty("width", `${coords.width}px`);
  });
};
var observer = new IntersectionObserver(navCheck, sectionsOptions);

sections.forEach((section) => {
  observer.observe(section);
});
