const sidebar = () => {
  const sidebar = document.createElement("div");
  const today = document.createElement("div");
  const week = document.createElement("div");
  const notes = document.createElement("div");
  const projects = document.createElement("div");
  const pastProjects = document.createElement("div");

  today.textContent = "Today";
  week.textContent = "Week";
  notes.textContent = "Notes";
  projects.textContent = "Projects";
  pastProjects.textContent = "Past Projects";
  today.classList.add("today");
  today.classList.add("sideNav");
  week.classList.add("week");
  week.classList.add("sideNav");
  notes.classList.add("notes");
  notes.classList.add("sideNav");
  projects.classList.add("projects");
  projects.classList.add("sideNav");
  pastProjects.classList.add("pastProject");
  pastProjects.classList.add("sideNav");
  sidebar.classList.add("sidebar");

  sidebar.appendChild(today);
  sidebar.appendChild(week);
  sidebar.appendChild(projects);

  sidebar.appendChild(pastProjects);
  sidebar.appendChild(notes);

  document.querySelector(".container-main").appendChild(sidebar);
};

export default sidebar;
