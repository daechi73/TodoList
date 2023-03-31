const addTaskBox = () => {
  const taskBox = document.createElement("div");
  const tbHeader = document.createElement("div");
  const tbTitle = document.createElement("div");
  const tbForm = document.createElement("div");
  const tbCloseBtn = document.createElement("button");

  taskBox.classList.add("taskBox");
  tbHeader.classList.add("tbHeader");
  tbCloseBtn.classList.add("tbCloseBtn");
  tbTitle.classList.add("tbTitle");
  tbForm.classList.add("tbForm");

  taskBox.classList.add("hidden");

  tbTitle.textContent = "Add Tasks";
  tbCloseBtn.textContent = "X";

  tbForm.innerHTML = `
  <div class="taskTitleDiv">
  <label for="taskTitleInput" class="taskTitleLb">
    Task Name:
  </label>
  <input type="text" id="taskTitleInput" class="taskTitleInput" />
</div>

<div class="taskPriorityDiv">
  <label for="taskPriorityInput" class="taskPriorityLb">
  Priority:
  </label>
  <select id="taskPriorityInput">
  <option value="minor">Minor</option>
  <option value="medium">medium</option>
  <option value="major">major</option>
  <option value="extreme">extreme</option>
</select>
</div>

<div class="taskAddBtnDiv">
  <button class="taskAddBtn" type="button">+</button>
</div>
  `;
  tbHeader.appendChild(tbTitle);
  tbHeader.appendChild(tbCloseBtn);

  taskBox.appendChild(tbHeader);
  taskBox.appendChild(tbForm);
  document.querySelector(".container-main").appendChild(taskBox);
};

export { addTaskBox };
