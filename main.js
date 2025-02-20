const habitInput = document.getElementById("habit-input");
const addHabitBtn = document.getElementById("add-habit-btn");
const displayList = document.getElementById("habit-output");

addHabitBtn.addEventListener("click", function () {
  const habitText = habitInput.value.trim();
  if (habitText === "") return;

  const listItem = document.createElement("li");
  listItem.textContent = habitText;

  displayList.appendChild(listItem);
  habitInput.value = "";
});
