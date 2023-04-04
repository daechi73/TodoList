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
import editProjectBox from "../Render/PageLayout/EditProjectxBox";

import { format } from "date-fns";

const CurrentPage = (() => {
  let pageCurrent = "";

  const getPageCurrent = () => {
    return pageCurrent;
  };
  const setPageCurrent = (pc) => {
    pageCurrent = pc;
  };
  return { getPageCurrent, setPageCurrent };
})();
const startUp = () => {
  const project = new Project("Odin Project", "2023-04-04");
  project.addTask(new Task("TodoList", "urgent", false));
  project.addTask(new Task("RestaurantSite", "Urgent", false));
  Projects.addProjects(project);
  const project2 = new Project("Car Fix", "2023-04-04");
  project2.addTask(new Task("Blinker Fluid", "urgent", false));
  project2.addTask(new Task("front Axle tighten", "Urgent", false));
  Projects.addProjects(project2);
  const project3 = new Project("BEcome a Millionaire", "2025-01-01");
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
        addContentsToInfoBox(p.firstChild.textContent);
        addTaskBtnHandler();
        pDelBtnHandler();
        pEditBtnHandler();
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

const todayRenderCombo = () => {
  const today = document.querySelector(".today");
  todayRender();
  mainSectionEventHandlers();
  deHighLight("sideNav");
  today.classList.add("selected");
  CurrentPage.setPageCurrent("today");
};

const weekRenderCombo = () => {
  const week = document.querySelector(".week");
  const mainSection = document.querySelector(".mainSection");
  mainSection.textContent = "week";
  deHighLight("sideNav");
  week.classList.add("selected");
  CurrentPage.setPageCurrent("week");
};
const pastProjectRenderCombo = () => {
  const mainSection = document.querySelector(".mainSection");
  const pastProject = document.querySelector(".pastProject");
  mainSection.textContent = "pastProject";
  deHighLight("sideNav");
  pastProject.classList.add("selected");
  CurrentPage.setPageCurrent("pastProject");
};

const projectsRenderCombo = () => {
  const projects = document.querySelector(".projects");
  projectsRender();
  mainSectionEventHandlers();
  deHighLight("sideNav");
  projects.classList.add("selected");
  CurrentPage.setPageCurrent("projects");
};

const sidebarEventHandlers = () => {
  const today = document.querySelector(".today");
  const week = document.querySelector(".week");
  const projects = document.querySelector(".projects");
  const pastProject = document.querySelector(".pastProject");
  const notes = document.querySelector(".notes");
  const mainSection = document.querySelector(".mainSection");

  today.addEventListener("click", () => {
    todayRenderCombo();
  });
  week.addEventListener("click", () => {
    weekRenderCombo();
  });
  projects.addEventListener("click", () => {
    projectsRenderCombo();
  });
  pastProject.addEventListener("click", () => {
    pastProjectRenderCombo();
  });
  notes.addEventListener("click", () => {
    mainSection.textContent = "notes";
    deHighLight("sideNav");
    notes.classList.add("selected");
    CurrentPage.setPageCurrent("notes");
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
  addTaskBtn.addEventListener("click", () => {
    if (!document.querySelector(".taskBox")) {
      addTaskBox();
      taskBoxAddBtnHandler();
      closeTaskBtnHandler();
    }
  });
};
//inside TaskBox itself
const taskBoxAddBtnHandler = () => {
  const tbAddBtn = document.querySelector(".taskAddBtn");
  const taskTitleInput = document.querySelector(".taskTitleInput");
  const taskPriorityInput = document.querySelector("#taskPriorityInput");
  const infoProjectName = document.querySelector(".projectNameInfo");
  const tbErrorMsg = document.querySelector(".tbErrorMsg");
  const tbAddBtnEventListener = tbAddBtn.addEventListener("click", () => {
    if (taskTitleInput.value === "" || taskTitleInput.value == null)
      tbErrorMsg.textContent = "Please Enter a Task Name";
    else {
      const task = new Task(taskTitleInput.value, taskPriorityInput.value);
      Projects.getProjects().forEach((p) => {
        if (p.getName() === infoProjectName.textContent) {
          p.addTask(task);
          addContentsToInfoBox(infoProjectName.textContent);
          addTaskBtnHandler();
          closeTaskBox();
        }
      });
    }
  });
  tbAddBtnEventListener;
};

const projectSubmitBtnHandler = () => {
  const psbtn = document.querySelector(".projectSubmitBtn");
  const errorMsg = document.querySelector(".pErrorMsg");
  psbtn.addEventListener("click", () => {
    const inputPName = document.querySelector(".inputPName");
    const inputDate = document.querySelector(".inputDate");
    if (inputPName.value === "" || inputPName.value == null) {
      errorMsg.textContent = "Please Enter a project name";
    } else {
      const project = new Project(inputPName.value, inputDate.value);
      Projects.addProjects(project);
      projectsRender();
      mainSectionEventHandlers();
      closeProjectBox();
      deHighlightNavbar();
      document.querySelector(".projects").classList.add("selected");
    }
    console.log(Projects.getProjects());
  });
};

const pDelBtnHandler = () => {
  const pDelBtn = document.querySelector(".pDelBtn");
  const pNameInfo = document.querySelector(".projectNameInfo");

  pDelBtn.addEventListener("click", () => {
    Projects.deleteProject(pNameInfo.textContent);
    console.log("Project deleted");
    if (CurrentPage.getPageCurrent() === "projects") {
      projectsRenderCombo();
    }
    if (CurrentPage.getPageCurrent() === "today") {
      todayRenderCombo();
    }
  });
};

const closeEditProjectBox = () => {
  document.querySelector(".editProjectBox").remove();
};
const closeEpbHandler = () => {
  const closeEpbBtn = document.querySelector(".closeEpbBtn");
  closeEpbBtn.addEventListener("click", () => {
    closeEditProjectBox();
    console.log("working");
  });
};
//inside info
const pEditBtnHandler = () => {
  const pEditBtn = document.querySelector(".pEditBtn");
  pEditBtn.addEventListener("click", () => {
    if (!document.querySelector(".editProjectBox")) {
      editProjectBox();
      closeEpbHandler();
      epbEditBtnHandler();
    }
  });
};

//inside editbox
const epbEditBtnHandler = () => {
  const epbEditBtn = document.querySelector(".epbEditBtn");
  epbEditBtn.addEventListener("click", () => {
    //console.log("working");
    const pNameInfo = document.querySelector(".projectNameInfo");
    const dueDate = document.querySelector(".eInputDate");
    Projects.getProjects().forEach((p) => {
      console.log(pNameInfo.textContent);
      if (p.getName() === pNameInfo.textContent) {
        p.setDueDate(dueDate.value);
        closeEditProjectBox();
        if (CurrentPage.getPageCurrent() === "projects") {
          projectsRenderCombo();
        }
        if (CurrentPage.getPageCurrent() === "today") {
          todayRenderCombo();
        }
        console.log("working");
        console.log(format(new Date(), "yyyy-MM-dd"));
      }
    });
  });
};

export { startUp };
