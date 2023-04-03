import initialRender from "./Render/initialRender";
import {
  startUpProjects,
  sidebarEventHandlers,
  addBtnEventHandler,
  closeProjectBtnHandler,
  closeTaskBtnHandler,
  projectSubmitBtnHandler,
  addTaskBtnHandler,
  taskBoxAddBtnHandler,
} from "./Logic/Setup";

initialRender();
startUpProjects();
sidebarEventHandlers();
addBtnEventHandler();
closeProjectBtnHandler();
projectSubmitBtnHandler();
