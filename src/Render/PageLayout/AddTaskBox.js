const addTaskBox = () => {
  const taskBox = document.createElement("div");
  const tbHeader = document.createElement("div");
  const tbTitle = document.createElement("div");
  const tbForm = document.createElement("div");
  const tbCloseBtn = document.createElement("button");
  const tbCloseBtnDiv = document.createElement("div");

  taskBox.classList.add("taskBox");
  tbHeader.classList.add("tbHeader");
  tbCloseBtn.classList.add("tbCloseBtn");
  tbCloseBtnDiv.classList.add("tbCloseBtnDiv");
  tbTitle.classList.add("tbTitle");
  tbForm.classList.add("tbForm");

  tbTitle.textContent = "Add Tasks";
  tbCloseBtn.textContent = "X";

  tbForm.innerHTML = `
  <tbTitleLb class="tbTitlelb">
    <label for="taskTitleInput" class="taskTitleLb">
      Task Name:
    </label>
  </tbTitleLb>
  <div class="taskTitleDiv">
    <input type="text" id="taskTitleInput" class="taskTitleInput" />
  </div>

  <div class="tbPriorityLb">
    <label for="taskPriorityInput" class="taskPriorityLb">
      Priority:
    </label>
  </div>
  <div class="taskPriorityDiv">  
  <select id="taskPriorityInput">
  <option value="minor">Minor</option>
  <option value="medium">medium</option>
  <option value="major">major</option>
  <option value="extreme">extreme</option>
</select>
</div>
<div class="tbErrorMsg"></div>
<div class="taskAddBtnDiv">
  <button class="taskAddBtn" type="button">+</button>
</div>
  `;

  tbCloseBtnDiv.appendChild(tbCloseBtn);
  tbHeader.appendChild(tbTitle);
  tbHeader.appendChild(tbCloseBtnDiv);

  taskBox.appendChild(tbHeader);
  taskBox.appendChild(tbForm);
  document.querySelector(".container-main").appendChild(taskBox);
};

export { addTaskBox };
