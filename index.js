const modal = document.getElementById("modal");
const dropdownCPU = document.getElementById("dropdownCPU");
const dropdownList = document.getElementById("dropdownList");
const saveButton = document.getElementById("save");

const listContainer = document.getElementById("listContainer");
const cpuContainer = document.getElementById("cpuContainer");

// --- handel modal ---

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  const buttonDropdownCPU = dropdownCPU.parentElement.querySelector("button");
  const valueDropdownCPU = buttonDropdownCPU.querySelector("span");
  const buttonDropdownList = dropdownList.parentElement.querySelector("button");
  const valueDropdownList = buttonDropdownList.querySelector("span");

  valueDropdownCPU.innerHTML = "Chose CPU";
  valueDropdownList.innerHTML = "List";
}

// --- handel dropdown ---

document.addEventListener("click", (e) => {
  if (
    !dropdownCPU.classList.contains("hidden") &&
    !cpuContainer.contains(e.target)
  ) {
    closeDropdown(
      dropdownCPU,
      dropdownCPU.parentElement.querySelector("button")
    );
  }

  if (
    !dropdownList.classList.contains("hidden") &&
    !listContainer.contains(e.target)
  ) {
    closeDropdown(
      dropdownList,
      dropdownList.parentElement.querySelector("button")
    );
  }
});

function closeDropdown(dropdown, button) {
  if (!dropdown.classList.contains("hidden")) {
    dropdown.classList.add("hidden");
    button.querySelector("i").classList.remove("bx-chevron-up");
    button.querySelector("i").classList.add("bx-chevron-down");
  }
}

function toggleDropdownCPU(element) {
  dropdownCPU.classList.toggle("hidden");
  element.querySelector("i").classList.toggle("bx-chevron-down");
  element.querySelector("i").classList.toggle("bx-chevron-up");
}

function toggleDropdownList(element) {
  dropdownList.classList.toggle("hidden");
  element.querySelector("i").classList.toggle("bx-chevron-down");
  element.querySelector("i").classList.toggle("bx-chevron-up");
}

function clickDropdown(dropdown, element, toggleDisplay) {
  const buttonDropdown = dropdown.parentElement.querySelector("button");
  const valueDropdown = buttonDropdown.querySelector("span");
  valueDropdown.innerHTML = element.innerHTML;
  toggleDisplay(buttonDropdown);

  if (saveButton.classList.contains("hidden"))
    saveButton.classList.remove("hidden");
}

dropdownCPU.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    clickDropdown(dropdownCPU, element, toggleDropdownCPU);
  });
});

dropdownList.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    clickDropdown(dropdownList, element, toggleDropdownList);
  });
});

// --- handel save button ---

function save() {
  closeModal();
}
