import Projects from "../../Logic/Projects";

const informationBox = () => {
  const informationBox = document.createElement("div");
  informationBox.classList.add("informationBox");
  informationBox.classList.add("hidden");
  informationBox.textContent = "informationBox";
  document.querySelector(".mainSection").appendChild(informationBox);
};

const addPContentsToInfoBox = (projectName) => {
  const informationBox = document.querySelector(".informationBox");
  const addTaskBtnDiv = document.createElement("div");
  const pBtnContainer = document.createElement("div");
  const addTaskBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  pBtnContainer.classList.add("sBtnContainer");
  pBtnContainer.appendChild(editBtn);
  pBtnContainer.appendChild(delBtn);
  editBtn.classList.add("pEditBtn");
  editBtn.innerHTML = `<i class='far fa-edit'></i>`;
  delBtn.classList.add("pDelBtn");
  delBtn.innerHTML = `<i class='far fa-trash-alt'></i>`;
  addTaskBtnDiv.classList.add("addTaskBtnDiv");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskBtn.textContent = "+";
  addTaskBtn.type = "button";

  addTaskBtnDiv.appendChild(addTaskBtn);

  informationBox.textContent = "";
  //const p = Projects.getProjects().find((x) => x.getName() === projectName);
  Projects.getProjects().forEach((p) => {
    if (p.getName() === projectName) {
      const pName = document.createElement("div");
      const tasksDiv = document.createElement("div");
      tasksDiv.classList.add("tasksDiv");
      pName.classList.add("projectNameInfo");
      pName.textContent = `${p.getName()}`;
      informationBox.appendChild(pName);
      informationBox.appendChild(pBtnContainer);
      const tasks = p.getTasks();
      if (tasks.length === 0) {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("taskContainer");
        taskContainer.textContent = "No Current Tasks to present..";
        tasksDiv.appendChild(taskContainer);
        informationBox.appendChild(tasksDiv);
      } else {
        tasks.forEach((t) => {
          const taskContainer = document.createElement("div");
          taskContainer.classList.add("taskContainer");

          const tTitle = document.createElement("div");
          tTitle.classList.add("taskTitle");
          const tPriority = document.createElement("div");
          tPriority.classList.add("tPriority");
          const tCheckmark = document.createElement("div");
          tCheckmark.classList.add("tCheckmark");

          tPriority.textContent = `Priority: ${t.getPriority()}`;
          tCheckmark.textContent = `Status: ${
            !t.getCheckmark() ? "Not done" : "finished"
          }`;
          tTitle.textContent = `Task: ${t.getTitle()}`;
          taskContainer.appendChild(tTitle);
          taskContainer.appendChild(tPriority);
          taskContainer.appendChild(tCheckmark);
          tasksDiv.appendChild(taskContainer);
          informationBox.appendChild(tasksDiv);
        });
      }
    }
  });

  informationBox.appendChild(addTaskBtnDiv);
};

const addPpContentsToInfoBox = (projectName) => {
  const informationBox = document.querySelector(".informationBox");

  const pBtnContainer = document.createElement("div");
  console.log("workingstill");
  informationBox.textContent = "";
  //const p = Projects.getProjects().find((x) => x.getName() === projectName);
  Projects.getPastProjects().forEach((p) => {
    if (p.getName() === projectName) {
      console.log("workingstill");
      const pName = document.createElement("div");
      const tasksDiv = document.createElement("div");
      tasksDiv.classList.add("tasksDiv");
      pName.classList.add("projectNameInfo");
      pName.textContent = `${p.getName()}`;
      informationBox.appendChild(pName);
      informationBox.appendChild(pBtnContainer);
      const tasks = p.getTasks();
      if (tasks.length === 0) {
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("taskContainer");
        taskContainer.textContent = "No Current Tasks to present..";
        tasksDiv.appendChild(taskContainer);
        informationBox.appendChild(tasksDiv);
      } else {
        tasks.forEach((t) => {
          const taskContainer = document.createElement("div");
          taskContainer.classList.add("taskContainer");

          const tTitle = document.createElement("div");
          tTitle.classList.add("taskTitle");
          const tPriority = document.createElement("div");
          tPriority.classList.add("tPriority");
          const tCheckmark = document.createElement("div");
          tCheckmark.classList.add("tCheckmark");

          tPriority.textContent = `Priority: ${t.getPriority()}`;
          tCheckmark.textContent = `Status: ${
            !t.getCheckmark() ? "Not done" : "finished"
          }`;
          tTitle.textContent = `Task: ${t.getTitle()}`;
          taskContainer.appendChild(tTitle);
          taskContainer.appendChild(tPriority);
          taskContainer.appendChild(tCheckmark);
          tasksDiv.appendChild(taskContainer);
          informationBox.appendChild(tasksDiv);
        });
      }
    }
  });
};

export { informationBox, addPContentsToInfoBox, addPpContentsToInfoBox };
