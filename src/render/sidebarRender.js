const sidebar = () => {
  const sidebar = document.createElement("div");
  const all = document.createElement("div");
  const today = document.createElement("div");
  const week = document.createElement("div");
  const notes = document.createElement("div");
  const projects = document.createElement("div");
  const pastProjects = document.createElement("div");

  all.textContent = "All";
  today.textContent = "Today";
  week.textContent = "Week";
  notes.textContent = "Notes";
  projects.textContent = "Projects";
  pastProjects.textContent = "Past Projects";
  sidebar.classList.add("sidebar");
  today.classList.add("today");
  week.classList.add("week");
  notes.classList.add("notes");
  projects.classList.add("projects");
  pastProjects.classList.add("pastProject");

  sidebar.appendChild(all);
  sidebar.appendChild(today);
  sidebar.appendChild(week);
  sidebar.appendChild(projects);

  sidebar.appendChild(pastProjects);
  sidebar.appendChild(notes);

  document.querySelector(".container-main").appendChild(sidebar);
};

export default sidebar;
