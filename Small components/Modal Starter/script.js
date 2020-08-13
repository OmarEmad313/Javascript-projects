const openModalButtons = Array.from(document.querySelectorAll(".open_button"));
const closeModalButtons = Array.from(document.querySelectorAll(".close_button"));
openModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    document.querySelector(".modal").classList.add("active");
    document.querySelector("#overlay").classList.add("active");
  });
});
closeModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    document.querySelector(".modal").classList.remove("active");
    document.querySelector("#overlay").classList.remove("active");
  });
});
