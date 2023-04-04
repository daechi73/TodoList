import { format } from "date-fns";

export default class Project {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = new Date(dueDate);
    this.tasks = [];
  }

  getName() {
    return this.name;
  }
  getDueDate() {
    return `${
      this.dueDate.getUTCMonth() + 1
    }-${this.dueDate.getUTCDate()}-${this.dueDate.getFullYear()}`;
  }
  getTasks() {
    return this.tasks;
  }
  addTask(task) {
    this.tasks.push(task);
  }
}
