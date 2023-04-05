import Projects from "../../Logic/Projects";

const pastProjectsRender = () => {
  const mainSection = document.querySelector(".mainSection");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectList");
  mainSection.textContent = "";
  Projects.getPastProjects().forEach((p) => {
    const projectDiv = document.createElement("div");
    const pNameDiv = document.createElement("div");
    const pDueDateDiv = document.createElement("div");
    const pCheckbox = document.createElement("input");

    pCheckbox.type = "checkbox";
    pCheckbox.classList.add("pCheckbox");
    pCheckbox.checked = true;
    pCheckbox.disabled = true;

    projectDiv.classList.add("project");
    projectDiv.classList.add("checked");
    pNameDiv.classList.add("projectName");
    pNameDiv.textContent = p.getName();

    pDueDateDiv.classList.add("pDueDateDiv");
    pDueDateDiv.textContent = `Due Date: ${p.getDueDate()}`;

    projectDiv.appendChild(pCheckbox);
    projectDiv.appendChild(pNameDiv);
    projectDiv.appendChild(pDueDateDiv);
    projectContainer.appendChild(projectDiv);
  });

  mainSection.appendChild(projectContainer);
};

export { pastProjectsRender };
