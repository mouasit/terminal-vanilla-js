const modal = document.getElementById("modal");
const dropDownCPU = document.getElementById("dropDownCPU");
const dropDownList = document.getElementById("dropDownList");

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function toggleDropDownCPU(element) {
  dropDownCPU.classList.toggle("hidden");
  element.querySelector("i").classList.toggle("bx-chevron-down");
  element.querySelector("i").classList.toggle("bx-chevron-up");
}

function toggleDropDownList(element) {
  dropDownList.classList.toggle("hidden");
  element.querySelector("i").classList.toggle("bx-chevron-down");
  element.querySelector("i").classList.toggle("bx-chevron-up");
}

dropDownCPU.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    const buttonDropdown = dropDownCPU.parentElement.querySelector("button");
    const valueDropDown = buttonDropdown.querySelector("span");
    valueDropDown.innerHTML = element.innerHTML;

    toggleDropDownCPU(buttonDropdown);
  });
});

dropDownList.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    const buttonDropdown = dropDownList.parentElement.querySelector("button");
    const valueDropDown = buttonDropdown.querySelector("span");
    valueDropDown.innerHTML = element.innerHTML;

    toggleDropDownList(buttonDropdown);
  });
});
