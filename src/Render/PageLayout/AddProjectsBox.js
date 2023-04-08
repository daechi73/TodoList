import { format } from "date-fns";
const addProjectBox = () => {
  const addProjectBox = document.createElement("div");
  const title = document.createElement("div");
  const addProjectForm = document.createElement("div");
  const closeProjectBtn = document.createElement("button");
  const apbHeader = document.createElement("div");
  //const pErrorMsg = document.createElement("div");
  //pErrorMsg.classList.add("pErrorMsg");
  apbHeader.classList.add("apbHeader");
  closeProjectBtn.classList.add("closeProjectBtn");
  closeProjectBtn.textContent = "x";
  addProjectBox.classList.add("addProjectBox");
  addProjectBox.classList.add("hidden");
  addProjectBox.tabIndex = "0";
  addProjectForm.classList.add("addProjectForm");

  addProjectForm.innerHTML = `
  <div class="apbNameDiv formDiv"><label for="inputPName">Project Name: </label></div>
  <div class="inputNameDiv formDiv"><input id="inputPName" class="inputPName" type="text"></input></div>
  <div class="apbDateDiv formDiv"><label for="inputDate">Due Date: </label></div>
  <div class="inputDateDiv formDiv"><input type="date" id="inputDate" class="inputDate"
      name="due-Date" value="${format(new Date(), "yyyy-MM-dd")}"></input></div>
  <div class="pErrorMsg"></div>
  <div class="apbBtnDiv formDiv"><button class="projectSubmitBtn" type="button">+</button></div>
  `;

  title.textContent = "Add a project";
  title.classList.add("addProjectBoxTitle");

  apbHeader.appendChild(title);
  apbHeader.appendChild(closeProjectBtn);
  addProjectBox.appendChild(apbHeader);
  //addProjectBox.appendChild(pErrorMsg);
  addProjectBox.appendChild(addProjectForm);

  document.querySelector(".container-main").appendChild(addProjectBox);
};

export { addProjectBox };
