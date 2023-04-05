export default class Project {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = new Date(dueDate);
    this.tasks = [];
    this.checkmark = false;
  }

  getName() {
    return this.name;
  }
  getDueDate() {
    return `${this.dueDate.toISOString().split("T")[0]}`;
  }
  setDueDate(newDate) {
    this.dueDate = new Date(newDate);
  }
  getTasks() {
    return this.tasks;
  }
  addTask(task) {
    this.tasks.push(task);
  }
  getCheckmark() {
    return this.checkmark;
  }
  setCheckmark() {
    this.checkmark = !this.checkmark;
  }
}
