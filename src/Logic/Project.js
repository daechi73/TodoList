import Task from "./Task";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  getName() {
    return this.name;
  }
  getTasks() {
    return this.tasks;
  }
  addTask(task) {
    this.tasks.push(task);
  }
}
