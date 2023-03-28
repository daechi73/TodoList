const footer = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "JTech copyright 2023";
  document.querySelector(".container-main").appendChild(footer);
};

export default footer;
