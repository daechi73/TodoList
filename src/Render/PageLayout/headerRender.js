const header = () => {
  const header = document.createElement("div");
  const title = document.createElement("div");
  const addBtn = document.createElement("button");
  addBtn.classList.add("addBtn");
  addBtn.type = "button";
  header.classList.add("header");
  title.textContent = "Todo List";
  addBtn.textContent = "+";
  header.appendChild(title);
  header.appendChild(addBtn);
  document.querySelector(".container-main").appendChild(header);
};

export default header;
