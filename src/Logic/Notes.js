export default class Notes {
  static notes = [];
  static idNext = 1;
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.notes;
    this.id = Notes.idNext;
    Notes.idNext++;
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getContent() {
    return this.content;
  }
  setTitle(newTitle) {
    this.title = newTitle;
  }
  setContent(content) {
    this.content = content;
  }
  static addNotes(note) {
    this.notes.push(note);
  }
  static getNotes() {
    return this.notes;
  }
  static emptyNotes() {
    this.notes = [];
  }
  static getNotesFromLocalStorage(localStorageNotes) {
    if (localStorageNotes) {
      Notes.emptyNotes();
      localStorageNotes.forEach((copy) => {
        const newNote = new Notes(copy.title, copy.content);
        Notes.addNotes(newNote);
        console.log(Notes.getNotes());
      });
    }
  }
}
