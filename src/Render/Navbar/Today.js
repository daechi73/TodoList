import Projects from "../../Logic/Projects";
const todayRender = () => {
  const mainSection = document.querySelector(".mainSection");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectList");
  mainSection.textContent = "";
  let todaysDate = new Date();
  todaysDate =
    todaysDate.getMonth() +
    1 +
    "-" +
    todaysDate.getDate() +
    "-" +
    todaysDate.getFullYear();
  Projects.getProjects().forEach((p) => {
    if (p.getDueDate() == todaysDate) {
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
    } else {
      console.log(p.getDueDate());
    }
  });

  mainSection.appendChild(projectContainer);
};

export { todayRender };
