import header from "./PageLayout/headerRender";
import sidebar from "./PageLayout/sidebarRender";
import { mainSection } from "./PageLayout/mainSectionRender";
import footer from "./PageLayout/footerRender";
import { addProjectBox } from "./PageLayout/AddProjectsBox";
import { addTaskBox } from "./PageLayout/AddTaskBox";

const initialRender = () => {
  header();
  sidebar();
  mainSection();
  footer();
  addProjectBox();
  //addTaskBox();
};

export default initialRender;
