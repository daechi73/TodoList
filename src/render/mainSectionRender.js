const mainSection = () => {
  const mainSection = document.createElement("div");
  mainSection.textContent = "stuff goes here...";
  mainSection.classList.add("mainSection");

  document.querySelector(".container-main").appendChild(mainSection);
};

export default mainSection;
