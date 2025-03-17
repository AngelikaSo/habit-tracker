const habitInput = document.getElementById("habit-input");
const addHabitBtn = document.getElementById("add-habit-btn");
const displayList = document.getElementById("habit-output");
let habitCount = 0;

addHabitBtn.addEventListener("click", function () {
  const habitText = habitInput.value.trim();
  if (habitText === "") return;

  habitCount++;

  const uniqueId = "habit-" + habitCount;

  const listItem = document.createElement("li");
  listItem.classList.add("habit-output-list");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = uniqueId;

  const label = document.createElement("label");
  label.htmlFor = uniqueId;
  label.textContent = habitText;

  displayList.appendChild(listItem);
  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  habitInput.value = "";
});
