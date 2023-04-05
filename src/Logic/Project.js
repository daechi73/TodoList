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
    return `${
      this.dueDate.getUTCMonth() + 1
    }-${this.dueDate.getUTCDate()}-${this.dueDate.getFullYear()}`;
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
