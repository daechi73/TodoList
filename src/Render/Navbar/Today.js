import Projects from "../../Logic/Projects";
const todayRender = () => {
  const mainSection = document.querySelector(".mainSection");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectList");
  mainSection.textContent = "";
  Projects.getProjects().forEach((p) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.textContent = p.name;
    projectContainer.appendChild(projectDiv);
  });

  mainSection.appendChild(projectContainer);
};

export { todayRender };
