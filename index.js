const modal = document.getElementById("modal");
const dropDownCPU = document.getElementById("dropDownCPU");
const dropDownList = document.getElementById("dropDownList");
const saveButton = document.getElementById("save");

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

function save() {
  modal.classList.add("hidden");
  const buttonDropdownCPU = dropDownCPU.parentElement.querySelector("button");
  const valueDropDownCPU = buttonDropdownCPU.querySelector("span");
  const buttonDropdownList = dropDownList.parentElement.querySelector("button");
  const valueDropDownList = buttonDropdownList.querySelector("span");

  valueDropDownCPU.innerHTML = "Chose CPU";
  valueDropDownList.innerHTML = "List";
  
  if (!dropDownCPU.classList.contains("hidden"))
    dropDownCPU.classList.add("hidden");
  if (!dropDownList.classList.contains("hidden"))
    dropDownList.classList.add("hidden");

  saveButton.classList.add("hidden");
}

dropDownCPU.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    const buttonDropdown = dropDownCPU.parentElement.querySelector("button");
    const valueDropDown = buttonDropdown.querySelector("span");
    valueDropDown.innerHTML = element.innerHTML;
    toggleDropDownCPU(buttonDropdown);

    if (saveButton.classList.contains("hidden"))
      saveButton.classList.remove("hidden");
  });
});

dropDownList.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    const buttonDropdown = dropDownList.parentElement.querySelector("button");
    const valueDropDown = buttonDropdown.querySelector("span");
    valueDropDown.innerHTML = element.innerHTML;
    toggleDropDownList(buttonDropdown);

    if (saveButton.classList.contains("hidden"))
      saveButton.classList.remove("hidden");
  });
});
