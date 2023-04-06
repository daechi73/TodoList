import Notes from "../../Logic/Notes";
const idIncrement = (() => {
  let id = 1;
  return { id };
})();
const notesRender = () => {
  const mainSection = document.querySelector(".mainSection");
  mainSection.textContent = "";
  const notesContainer = document.createElement("div");
  notesContainer.classList.add("notesContainer");
  notesContainer.textContent = "";
  mainSection.appendChild(notesContainer);

  Notes.getNotes().forEach((notes) => {
    addNotes(`${notes.getTitle()}`, `${notes.getContent()}`);
  });
};

const addNotes = (noteTitle, noteContent) => {
  const notesContainer = document.querySelector(".notesContainer");
  const noteBox = document.createElement("div");
  const nbTitleInput = document.createElement("input");
  const nbTextArea = document.createElement("textarea");

  //console.log(idIncrement.id);
  noteBox.classList.add("noteBox");
  noteBox.id = idIncrement.id++;
  nbTitleInput.classList.add("nbTitleInput");
  nbTextArea.classList.add("nbTextArea");
  nbTitleInput.type = "text";
  nbTextArea.rows = "2";
  nbTextArea.cols = "30";
  if (noteTitle && noteContent) {
    nbTitleInput.value = `${noteTitle}`;
    nbTextArea.value = `${noteContent}`;
  } else {
    nbTitleInput.placeholder = "New Title";
    nbTextArea.placeholder = "Enter details";
    createNoteObject("New Note", "add Content");
  }

  noteBox.appendChild(nbTitleInput);
  noteBox.appendChild(nbTextArea);
  notesContainer.appendChild(noteBox);
  nbTextareaAutoSize(nbTextArea);
};

const nbTextareaAutoSize = (textarea) => {
  textarea.addEventListener("input", onInputAutosize, false);
};
function onInputAutosize() {
  this.style.height = "10px";
  this.style.height = this.scrollHeight + "px";
}
const createNoteObject = (title, content) => {
  const note = new Notes(title, content);
  Notes.addNotes(note);
};

export { notesRender, addNotes, createNoteObject };
