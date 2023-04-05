import { getWeek } from "date-fns";
import Projects from "../../Logic/Projects";

const weekRender = () => {
  const mainSection = document.querySelector(".mainSection");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectList");
  mainSection.textContent = "";

  Projects.getProjects().forEach((p) => {
    if (getWeek(new Date(p.getDueDate())) === getWeek(new Date())) {
      console.log("fu");
      const projectDiv = document.createElement("div");
      const pNameDiv = document.createElement("div");
      const pDueDateDiv = document.createElement("div");
      const pCheckbox = document.createElement("input");

      pCheckbox.type = "checkbox";
      pCheckbox.classList.add("pCheckbox");

      projectDiv.classList.add("project");
      pNameDiv.classList.add("projectName");
      pNameDiv.textContent = p.getName();

      pDueDateDiv.classList.add("pDueDateDiv");
      pDueDateDiv.textContent = `Due Date: ${p.getDueDate()}`;

      projectDiv.appendChild(pCheckbox);
      projectDiv.appendChild(pNameDiv);
      projectDiv.appendChild(pDueDateDiv);
      projectContainer.appendChild(projectDiv);
    }
  });

  mainSection.appendChild(projectContainer);
};

export { weekRender };
