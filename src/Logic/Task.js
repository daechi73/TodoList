export default class Task {
  constructor(title, priority, checkmark = false) {
    this.title = title;
    //this.dueDate = dueDate;
    this.priority = priority;
    this.checkmark = checkmark;
  }
  getTitle() {
    return this.title;
  }
  //   getDueDate() {
  //     return this.dueDate;
  //   }
  getPriority() {
    return this.priority;
  }
  getCheckmark() {
    return this.checkmark;
  }

  setTitle(title) {
    this.title = title;
  }
  // setDueDate(dueDate) {
  //   this.dueDate = dueDate;
  // }
  setPriority(p) {
    this.priority = p;
  }
  setCheckmark(checkmark) {
    this.checkmark = checkmark;
  }
}
