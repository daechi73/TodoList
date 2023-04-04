import Projects from "../../Logic/Projects";

const projectsRender = () => {
  const mainSection = document.querySelector(".mainSection");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectList");
  mainSection.textContent = "";
  Projects.getProjects().forEach((p) => {
    const projectDiv = document.createElement("div");
    const pNameDiv = document.createElement("div");
    const pDueDateDiv = document.createElement("div");

    projectDiv.classList.add("project");
    pNameDiv.classList.add("projectName");
    pNameDiv.textContent = p.getName();

    pDueDateDiv.classList.add("pDueDateDiv");
    pDueDateDiv.textContent = `Due Date: ${p.getDueDate()}`;

    projectDiv.appendChild(pNameDiv);
    projectDiv.appendChild(pDueDateDiv);
    projectContainer.appendChild(projectDiv);
  });

  mainSection.appendChild(projectContainer);
};

export { projectsRender };
