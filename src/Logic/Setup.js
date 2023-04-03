import Project from "./Project";
import Task from "./Task";
import Projects from "./Projects";
import { todayRender } from "../Render/Navbar/Today";
import { projectsRender } from "../Render/Navbar/ProjectsRender";
import {
  informationBox,
  addContentsToInfoBox,
} from "../Render/PageLayout/Information";
import { addTaskBox } from "../Render/PageLayout/AddTaskBox";

const startUp = () => {
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

  sidebarEventHandlers();
  addBtnEventHandler();
  closeProjectBoxBtnHandler();
  projectSubmitBtnHandler();
};

const mainSectionEventHandlers = () => {
  const projects = document.querySelectorAll(".project");
  informationBox();
  projects.forEach((p) => {
    p.addEventListener("click", () => {
      if (p.classList.contains("selected")) {
        p.classList.remove("selected");
        const informationBoxDiv = document.querySelector(".informationBox");
        informationBoxDiv.classList.remove("hidden");
        addContentsToInfoBox("");
      } else {
        deHighLight("project");
        p.classList.add("selected");
        const informationBoxDiv = document.querySelector(".informationBox");
        informationBoxDiv.classList.remove("hidden");
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
const deHighLight = (className) => {
  const divList = document.querySelectorAll(`.${className}`);
  divList.forEach((d) => {
    d.classList.remove("selected");
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
    deHighLight("sideNav");
    today.classList.add("selected");
  });
  week.addEventListener("click", () => {
    mainSection.textContent = "week";
    deHighLight("sideNav");
    week.classList.add("selected");
  });
  projects.addEventListener("click", () => {
    projectsRender();
    mainSectionEventHandlers();
    deHighLight("sideNav");
    projects.classList.add("selected");
  });
  pastProject.addEventListener("click", () => {
    mainSection.textContent = "pastProject";
    deHighLight("sideNav");
    pastProject.classList.add("selected");
  });
  notes.addEventListener("click", () => {
    mainSection.textContent = "notes";
    deHighLight("sideNav");
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

const closeProjectBox = () => {
  const addProjectBox = document.querySelector(".addProjectBox");
  const pErrorMsg = document.querySelector(".pErrorMsg");
  const inputPName = document.querySelector(".inputPName");
  inputPName.value = "";
  pErrorMsg.textContent = "";
  addProjectBox.classList.add("hidden");
};
const closeProjectBoxBtnHandler = () => {
  const closeProjectBtn = document.querySelector(".closeProjectBtn");
  closeProjectBtn.addEventListener("click", () => {
    closeProjectBox();
  });
};
const closeTaskBox = () => {
  const taskBox = document.querySelector(".taskBox");
  document.querySelector(".taskBox").remove();
};
const closeTaskBtnHandler = () => {
  const closeTaskBtn = document.querySelector(".tbCloseBtn");
  closeTaskBtn.addEventListener("click", () => {
    closeTaskBox();
  });
};

//inside InformationBox
const addTaskBtnHandler = () => {
  const addTaskBtn = document.querySelector(".addTaskBtn");
  const taskBox = document.querySelector(".taskBox");
  addTaskBtn.addEventListener("click", () => {
    addTaskBox();
    taskBoxAddBtnHandler();
    closeTaskBtnHandler();
  });
};
//inside TaskBox itself
const taskBoxAddBtnHandler = () => {
  const tbAddBtn = document.querySelector(".taskAddBtn");
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskPriorityInput = document.querySelector("#taskPriorityInput");
  const infoProjectName = document.querySelector(".projectName");
  const tbAddBtnEventListener = tbAddBtn.addEventListener("click", () => {
    const task = new Task(taskTitleInput.value, taskPriorityInput.value);
    Projects.getProjects().forEach((p) => {
      if (p.getName() === infoProjectName.textContent) {
        p.addTask(task);
        addContentsToInfoBox(infoProjectName.textContent);
        addTaskBtnHandler();
        closeTaskBox();
      }
    });
  });
  tbAddBtnEventListener;
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
      closeProjectBox();
      deHighlightNavbar();
      document.querySelector(".projects").classList.add("selected");
    }
  });
};
export { startUp };
