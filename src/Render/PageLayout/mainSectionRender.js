const mainSection = () => {
  const mainSection = document.createElement("div");
  mainSection.classList.add("mainSection");

  document.querySelector(".container-main").appendChild(mainSection);
};

export { mainSection };
