const modal = document.getElementById("modal");

function addResource() {
  document.body.querySelector("main").innerHTML += modalView();
}
function closeModal() {
  document.getElementById("modal").remove();
}
function openDropdownCpu(element) {
  const cpuContainer = document.getElementById("cpuContainer");
  const cpuView = document.getElementById("cpuView");

  element.querySelector("i").classList.toggle("bx-chevron-down");
  element.querySelector("i").classList.toggle("bx-chevron-up");
  if (cpuView) cpuView.remove();
  else cpuContainer.innerHTML += dropdownCpuView();
}

function openDropdownList(element) {
  const listContainer = document.getElementById("listContainer");
  const listView = document.getElementById("listView");

  element.querySelector("i").classList.toggle("bx-chevron-down");
  element.querySelector("i").classList.toggle("bx-chevron-up");
  if (listView) listView.remove();
  else listContainer.innerHTML += dropdownListView();
}

function closeDropdown(dropdownView, dropdownButton) {
  dropdownView.remove();
  dropdownButton.querySelector("i").classList.toggle("bx-chevron-down");
  dropdownButton.querySelector("i").classList.toggle("bx-chevron-up");
}

function modalView() {
  return `<div id='modal' class='fixed left-0 top-0 flex justify-center items-center lg:items-start bg-black/30 w-full h-full backdrop-blur-sm z-[999]'>
    <div
      class='mt-0 lg:mt-8 rounded-lg flex flex-col p-4 bg-white w-[40rem] h-[21.5rem]'
    >
      <!-- Modal header -->
      <div
        class='flex items-center w-full justify-between border-secondaryText'
      >
        <h1 class='text-primaryText text-xl font-bold'>Add Resource</h1>
        <button class='w-4 h-4 rounded-full' onclick='closeModal()'>
          <svg x='0' y='0' viewBox='0 0 512 512'>
            <g>
              <g data-name='02 User'>
                <path
                  d='M25 512a25 25 0 0 1-17.68-42.68l462-462a25 25 0 0 1 35.36 35.36l-462 462A24.93 24.93 0 0 1 25 512z'
                  opacity='1'
                  data-original='#000000'
                ></path>
                <path
                  d='M487 512a24.93 24.93 0 0 1-17.68-7.32l-462-462A25 25 0 0 1 42.68 7.32l462 462A25 25 0 0 1 487 512z'
                  opacity='1'
                  data-original='#000000'
                ></path>
              </g>
            </g>
          </svg>
        </button>
      </div>
      <!-- Modal body -->
      <div class='flex h-full justify-center items-center'>
        <div class='flex flex-col gap-4 items-center w-full'>
          <div>
            <button
              class='flex w-48 bg-black text-white items-center justify-center items-center gap-2 shadow-sm border p-3 rounded-lg'
            >
              Front
            </button>
            <span
              class='hidden flex items-center justify-center gap-4 rounded-md bg-green-50 p-3 font-medium text-green-700 ring-1 ring-inset ring-green-600/20 w-48'
            >
              Front <i class='bx bx-check-circle mt-[2px]'></i>
            </span>
          </div>
          <span>- or -</span>
          <div class='flex items-center justify-around w-full'>
            <div class='relative' id="cpuContainer">
              <button
                class='shadow-sm border flex items-center justify-between font-medium w-48 p-3 rounded-lg' onclick="openDropdownCpu(this)"
              >
                <span>Chose CPU</span>
                <i class='bx bx-chevron-down'></i>
              </button>
            </div>

            <div class='relative' id="listContainer">
              <button
                class='shadow-sm border flex items-center justify-between font-medium w-48 p-3 rounded-lg' onclick="openDropdownList(this)"
              >
                <span>List</span>
                <i class='bx bx-chevron-down'></i>
              </button>
            </div>
          </div>

          <div class='mt-[3rem] w-full flex justify-end hidden gap-3'>
            <button
              class='flex w-32 bg-white text-black border-[1px] border-black items-center justify-center gap-2 shadow-sm border p-3 rounded-lg'
            >
              Back
            </button>
            <button
              class='flex w-32 bg-black text-white items-center justify-center gap-2 shadow-sm border p-3 rounded-lg'
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function dropdownCpuView() {
  return `
    <div
    id="cpuView"
      class='bg-white absolute w-full shadow-sm border rounded-lg gap-3 flex flex-col items-start py-3 top-14'
    >
      <button class='hover:bg-gray-100 w-full text-left py-2 px-3'>
        <span>CPU <span class='font-bold'>01</span></span>
      </button>
      <button class='hover:bg-gray-100 w-full text-left py-2 px-3'>
        <span>CPU <span class='font-bold'>02</span></span>
      </button>
      <button class='hover:bg-gray-100 w-full text-left py-2 px-3'>
        <span>CPU <span class='font-bold'>03</span></span>
      </button>
    </div>`;
}

function dropdownListView() {
  return `             
    <div
    id="listView"
      class='bg-white absolute w-full shadow-sm border rounded-lg gap-3 flex flex-col items-start py-3 top-14'
    >
      <button class='hover:bg-gray-100 w-full text-left py-2 px-3'>
        <span>List <span class='font-bold'>01</span></span>
      </button>
      <button class='hover:bg-gray-100 w-full text-left py-2 px-3'>
        <span>List <span class='font-bold'>02</span></span>
      </button>
      <button class='hover:bg-gray-100 w-full text-left py-2 px-3'>
        <span>List <span class='font-bold'>03</span></span>
      </button>
    </div>`;
}
