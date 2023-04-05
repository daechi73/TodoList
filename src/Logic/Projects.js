export default class Projects {
  static projects = [];
  static pastProjects = [];

  constructor() {
    this.projects;
    this.pastProjects;
  }

  static getProjects() {
    return this.projects;
  }
  static addProjects(project) {
    this.projects.push(project);
  }
  static getPastProjects() {
    return this.pastProjects;
  }
  static addPastProjects(pastProject) {
    this.pastProjects.push(pastProject);
  }
  static deleteProject(projectName) {
    for (const p in this.projects) {
      if (this.projects[p].getName() === projectName) {
        if (this.projects[p].getCheckmark() == true) {
          this.pastProjects.push(this.projects[p]);
          this.projects.splice(p, 1);
          console.log("project transferred then deleted");
        } else {
          console.log(this.projects[p].getCheckmark());
          this.projects.splice(p, 1);
          console.log("project only deleted");
        }
      }
    }
  }
}
