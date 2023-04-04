import { format } from "date-fns";
const editProjectBox = () => {
  const pNameInfo = document.querySelector(".projectNameInfo");
  const editProjectBox = document.createElement("div");
  const title = document.createElement("div");
  const editProjectForm = document.createElement("div");
  const closeProjectBtn = document.createElement("button");
  const epbHeader = document.createElement("div");
  epbHeader.classList.add("epbHeader");
  closeProjectBtn.classList.add("closeEpbBtn");
  closeProjectBtn.textContent = "x";
  editProjectBox.classList.add("editProjectBox");
  editProjectForm.classList.add("editProjectForm");
  editProjectForm.innerHTML = `
      <div class="epbPName formDiv">${pNameInfo.textContent}</div>
      <div class="epbDateDiv" formDiv><label for="inputDate">Due Date: </label></div>
      <div class="eInputDateDiv formDiv"><input type="date" id="eInputDate" class="eInputDate"
          name="due-Date" value="${format(
            new Date(),
            "yyyy-MM-dd"
          )}""></input></div>
      <div class="epbBtnDiv formDiv"><button class="epbEditBtn" type="button">E</button></div>
      `;
  title.textContent = "Edit";
  title.classList.add("editProjectBoxTitle");

  epbHeader.appendChild(title);
  epbHeader.appendChild(closeProjectBtn);
  editProjectBox.appendChild(epbHeader);
  editProjectBox.appendChild(editProjectForm);

  document.querySelector(".container-main").appendChild(editProjectBox);
};

export default editProjectBox;
