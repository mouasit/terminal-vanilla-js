const modal = document.getElementById("modal");
const dropDownCPU = document.getElementById("dropDownCPU");
const dropDownList = document.getElementById("dropDownList");

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function openDropDownCPU(element) {
  dropDownCPU.classList.toggle("hidden");
  element.querySelector("i").classList.toggle("bx-chevron-down");
  element.querySelector("i").classList.toggle("bx-chevron-up");
}

function openDropDownList(element) {
  dropDownList.classList.toggle("hidden");
  element.querySelector("i").classList.toggle("bx-chevron-down");
  element.querySelector("i").classList.toggle("bx-chevron-up");
}

