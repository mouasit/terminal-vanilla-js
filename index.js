const modal = document.getElementById("modal");
const dropdownCPU = document.getElementById("dropdownCPU");
const dropdownList = document.getElementById("dropdownList");
const saveButton = document.getElementById("save");
const frontButton = document.getElementById("frontButton");
const separator = document.getElementById("separator");
const selectContainer = document.getElementById("selectContainer");
const modalBody = document.getElementById("modalBody");
const initialValueOfDropdownCPU = dropdownCPU.parentElement
  .querySelector("button")
  .querySelector("span").innerHTML;

const initialValueOfDropdownList = dropdownList.parentElement
  .querySelector("button")
  .querySelector("span").innerHTML;

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

  valueDropdownCPU.innerHTML = initialValueOfDropdownCPU;
  valueDropdownList.innerHTML = initialValueOfDropdownList;
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

function clickDropdownButtonElement(dropdown, element, toggleDisplay) {
  const buttonDropdown = dropdown.parentElement.querySelector("button");
  const valueDropdown = buttonDropdown.querySelector("span");
  valueDropdown.innerHTML = element.innerHTML;
  toggleDisplay(buttonDropdown);

  if (!frontButton.classList.contains("hidden")) {
    frontButton.classList.add("hidden");
  }

  addUiToModal();

  if (saveButton.classList.contains("hidden")) {
    saveButton.classList.remove("hidden");
  }
}

function addUiToModal() {
  if (modal.querySelector("div").classList.contains("h-[21.5rem]")) {
    modal.querySelector("div").classList.remove("h-[21.5rem]");
    modal.querySelector("div").classList.add("h-[18rem]");
    modalBody.classList.add("mt-[3rem]");
    separator.classList.add("hidden");
  }
}

function deleteUiFromModal() {
  modal.querySelector("div").classList.remove("h-[18rem]");
  modal.querySelector("div").classList.add("h-[21.5rem]");
  modalBody.classList.remove("mt-[3rem]");
  separator.classList.remove("hidden");
}

dropdownCPU.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    clickDropdownButtonElement(dropdownCPU, element, toggleDropdownCPU);
  });
});

dropdownList.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", () => {
    clickDropdownButtonElement(dropdownList, element, toggleDropdownList);
  });
});

// --- handel front button ---

function handelFront() {
  if (!selectContainer.classList.contains("hidden")) {
    selectContainer.classList.add("hidden");
  }
  addUiToModal();

  if (saveButton.classList.contains("hidden")) {
    saveButton.classList.remove("hidden");
  }
}

// --- handel save button ---

function save() {
  closeModal();
}
