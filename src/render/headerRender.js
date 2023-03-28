const header = () => {
  const header = document.createElement("div");
  const title = document.createElement("div");
  header.classList.add("header");
  title.textContent = "Todo List";

  header.appendChild(title);
  document.querySelector(".container-main").appendChild(header);
};

export default header;
