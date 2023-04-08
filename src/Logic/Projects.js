import Project from "./Project";
import Task from "./Task";
export default class Projects {
  static projects = [];
  static pastProjects = [];

  constructor() {
    this.projects;
    this.pastProjects;
  }
  static setProjects(newProjects) {
    this.projects = newProjects;
  }
  static getProjects() {
    return this.projects;
  }
  static addProjects(project) {
    this.projects.push(project);
  }
  static emptyProjects() {
    this.projects = [];
  }
  static setPastProjects(newPastProjects) {
    this.pastProjects = newPastProjects;
  }
  static getPastProjects() {
    return this.pastProjects;
  }
  static addPastProjects(pastProject) {
    this.pastProjects.push(pastProject);
  }
  static emptyPastProjects() {
    this.pastProjects = [];
  }
  static deleteProject(projectName) {
    for (const p in this.projects) {
      if (this.projects[p].getName() === projectName) {
        if (this.projects[p].getCheckmark() == true) {
          this.pastProjects.push(this.projects[p]);
          this.projects.splice(p, 1);
        } else {
          this.projects.splice(p, 1);
        }
      }
    }
  }
  static getProjectFromLocalStorage = (localStorageProjects) => {
    if (localStorageProjects) {
      Projects.emptyProjects();
      localStorageProjects.forEach((copy) => {
        const project = new Project(copy.name, copy.dueDate);
        copy.tasks.forEach((t) => {
          const newTask = new Task(t.title, t.priority, t.checkmark);
          project.addTask(newTask);
        });
        Projects.addProjects(project);
      });
    }
  };
  static getPastProjectFromLocalStorage = (localStoragePastProject) => {
    if (localStoragePastProject) {
      Projects.emptyPastProjects();
      localStoragePastProject.forEach((copy) => {
        const pastProject = new Project(copy.name, copy.dueDate);
        Projects.addPastProjects(pastProject);
      });
    }
  };
}
