import Project from "./Project";
import Task from "./Task";
import Projects from "./Projects";
import { todayRender } from "../Render/Navbar/Today";
import { projectsRender } from "../Render/Navbar/ProjectsRender";
import {
  informationBox,
  addContentsToInfoBox,
} from "../Render/PageLayout/Information";

const startUpProjects = () => {
  const project = new Project("Odin Project");
  project.addTask(new Task("TodoList", "urgent", false));
  project.addTask(new Task("RestaurantSite", "Urgent", false));
  Projects.addProjects(project);
  const project2 = new Project("Car Fix");
  project2.addTask(new Task("Blinker Fluid", "urgent", false));
  project2.addTask(new Task("front Axle tighten", "Urgent", false));
  Projects.addProjects(project2);
  const project3 = new Project("BEcome a Millionaire");
  Projects.addProjects(project3);
};

const mainSectionEventHandlers = () => {
  const projects = document.querySelectorAll(".project");
  informationBox();
  projects.forEach((p) => {
    p.addEventListener("click", () => {
      if (p.classList.contains("selected")) {
        p.classList.remove("selected");
      } else {
        p.classList.add("selected");
        const informationBoxDiv = document.querySelector(".informationBox");
        //informationBoxDiv.classList.remove("hidden");
        addContentsToInfoBox(p.textContent);
        addTaskBtnHandler();
      }
    });
  });
};
const deHighlightNavbar = () => {
  const sideNavs = document.querySelectorAll(".sideNav");
  sideNavs.forEach((s) => {
    s.classList.remove("selected");
  });
};
const sidebarEventHandlers = () => {
  const today = document.querySelector(".today");
  const week = document.querySelector(".week");
  const projects = document.querySelector(".projects");
  const pastProject = document.querySelector(".pastProject");
  const notes = document.querySelector(".notes");
  const mainSection = document.querySelector(".mainSection");

  today.addEventListener("click", () => {
    todayRender();
    deHighlightNavbar();
    today.classList.add("selected");
  });
  week.addEventListener("click", () => {
    mainSection.textContent = "week";
    deHighlightNavbar();
    week.classList.add("selected");
  });
  projects.addEventListener("click", () => {
    projectsRender();
    mainSectionEventHandlers();
    deHighlightNavbar();
    projects.classList.add("selected");
  });
  pastProject.addEventListener("click", () => {
    mainSection.textContent = "pastProject";
    deHighlightNavbar();
    pastProject.classList.add("selected");
  });
  notes.addEventListener("click", () => {
    mainSection.textContent = "notes";
    deHighlightNavbar();
    notes.classList.add("selected");
  });
};
const addBtnEventHandler = () => {
  const addBtn = document.querySelector(".addBtn");
  const addProjectBox = document.querySelector(".addProjectBox");
  addBtn.addEventListener("click", () => {
    if (addProjectBox.classList.contains("hidden")) {
      addProjectBox.classList.remove("hidden");
    } else {
      addProjectBox.classList.add("hidden");
    }
  });
};

const closeProject = () => {
  const addProjectBox = document.querySelector(".addProjectBox");
  const pErrorMsg = document.querySelector(".pErrorMsg");
  const inputPName = document.querySelector(".inputPName");
  inputPName.value = "";
  pErrorMsg.textContent = "";
  addProjectBox.classList.add("hidden");
};
const closeProjectBtnHandler = () => {
  const closeProjectBtn = document.querySelector(".closeProjectBtn");
  closeProjectBtn.addEventListener("click", () => {
    closeProject();
  });
};

const closeTaskBtnHandler = () => {
  const closeTaskBtn = document.querySelector(".tbCloseBtn");
  closeTaskBtn.addEventListener("click", () => {
    const taskBox = document.querySelector(".taskBox");
    taskBox.classList.add("hidden");
  });
};

//inside InformationBox
const addTaskBtnHandler = () => {
  const addTaskBtn = document.querySelector(".addTaskBtn");
  const taskBox = document.querySelector(".taskBox");
  addTaskBtn.addEventListener("click", () => {
    taskBox.classList.remove("hidden");
    taskBoxAddBtnHandler();
  });
};
//inside TaskBox itself
const taskBoxAddBtnHandler = () => {
  const tbAddBtn = document.querySelector(".taskAddBtn");
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskPriorityInput = document.querySelector("#taskPriorityInput");
  const infoProjectName = document.querySelector(".projectName");
  tbAddBtn.addEventListener("click", () => {
    const task = new Task(taskTitleInput.value, taskPriorityInput.value);
    Projects.getProjects().forEach((p) => {
      if (p.getName() === infoProjectName.textContent) {
        p.addTask(task);
        p.getTasks().forEach((t) => {
          console.log(t);
        });
      }
    });
  });
};

const projectSubmitBtnHandler = () => {
  const psbtn = document.querySelector(".projectSubmitBtn");
  const errorMsg = document.querySelector(".pErrorMsg");
  psbtn.addEventListener("click", () => {
    const inputPName = document.querySelector(".inputPName");
    if (inputPName.value === "" || inputPName.value == null) {
      errorMsg.textContent = "Please Enter a project name";
    } else {
      const project = new Project(inputPName.value);
      Projects.addProjects(project);
      projectsRender();
      mainSectionEventHandlers();
      closeProject();
      deHighlightNavbar();
      document.querySelector(".projects").classList.add("selected");
    }
  });
};
export {
  startUpProjects,
  sidebarEventHandlers,
  addBtnEventHandler,
  closeProjectBtnHandler,
  closeTaskBtnHandler,
  projectSubmitBtnHandler,
  addTaskBtnHandler,
};
