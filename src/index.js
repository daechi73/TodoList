import initialRender from "./Render/initialRender";
import {
  startUp,
  sidebarEventHandlers,
  addBtnEventHandler,
  closeProjectBtnHandler,
  projectSubmitBtnHandler,
} from "./Logic/Setup";

initialRender();
startUp();
sidebarEventHandlers();
addBtnEventHandler();
closeProjectBtnHandler();
projectSubmitBtnHandler();
