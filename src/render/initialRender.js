import header from "./headerRender";
import sidebar from "./sidebarRender";
import mainSection from "./mainSectionRender";
import footer from "./footerRender";

const initialRender = () => {
  const containerMain = document.querySelector(".container-main");

  header();
  sidebar();
  mainSection();
  footer();
};

export default initialRender;
