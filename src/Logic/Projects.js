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
  static getPastProject() {
    return this.pastProjects;
  }
  static addPastProject(pastProject) {
    this.pastProjects.push(pastProject);
  }
}
