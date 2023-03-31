"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["main"],{

/***/ "./src/Logic/Project.js":
/*!******************************!*\
  !*** ./src/Logic/Project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Logic/Task.js\");\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  getName() {\n    return this.name;\n  }\n  getTasks() {\n    return this.tasks;\n  }\n  addTask(task) {\n    this.tasks.push(task);\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/Logic/Project.js?");

/***/ }),

/***/ "./src/Logic/Projects.js":
/*!*******************************!*\
  !*** ./src/Logic/Projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projects)\n/* harmony export */ });\nclass Projects {\n  static projects = [];\n  static pastProjects = [];\n\n  constructor() {\n    this.projects;\n    this.pastProjects;\n  }\n\n  static getProjects() {\n    return this.projects;\n  }\n  static addProjects(project) {\n    this.projects.push(project);\n  }\n  static getPastProject() {\n    return this.pastProjects;\n  }\n  static addPastProject(pastProject) {\n    this.pastProjects.push(pastProject);\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/Logic/Projects.js?");

/***/ }),

/***/ "./src/Logic/Setup.js":
/*!****************************!*\
  !*** ./src/Logic/Setup.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sidebarEventHandlers\": () => (/* binding */ sidebarEventHandlers),\n/* harmony export */   \"startUp\": () => (/* binding */ startUp)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Logic/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Logic/Task.js\");\n/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects */ \"./src/Logic/Projects.js\");\n/* harmony import */ var _Render_Navbar_Today__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Render/Navbar/Today */ \"./src/Render/Navbar/Today.js\");\n/* harmony import */ var _Render_Navbar_ProjectsRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Render/Navbar/ProjectsRender */ \"./src/Render/Navbar/ProjectsRender.js\");\n\n\n\n\n\n\nconst startUp = () => {\n  const project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Odin Project\");\n  project.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"TodoList\", \"urgent\", false));\n  project.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"RestaurantSite\", \"Urgent\", false));\n  _Projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProjects(project);\n  const project2 = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Car Fix\");\n  project2.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Blinker Fluid\", \"urgent\", false));\n  project2.addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"front Axle tighten\", \"Urgent\", false));\n  _Projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addProjects(project2);\n};\n\nconst sidebarEventHandlers = () => {\n  const today = document.querySelector(\".today\");\n  const week = document.querySelector(\".week\");\n  const projects = document.querySelector(\".projects\");\n  const pastProject = document.querySelector(\".pastProject\");\n  const notes = document.querySelector(\".notes\");\n  const mainSection = document.querySelector(\".mainSection\");\n\n  const deHighlightSelected = () => {\n    const sideNavs = document.querySelectorAll(\".sideNav\");\n    sideNavs.forEach((s) => {\n      s.classList.remove(\"selected\");\n    });\n  };\n\n  today.addEventListener(\"click\", () => {\n    (0,_Render_Navbar_Today__WEBPACK_IMPORTED_MODULE_3__.todayRender)();\n    deHighlightSelected();\n    today.classList.add(\"selected\");\n  });\n  week.addEventListener(\"click\", () => {\n    mainSection.textContent = \"week\";\n    deHighlightSelected();\n    week.classList.add(\"selected\");\n  });\n  projects.addEventListener(\"click\", () => {\n    (0,_Render_Navbar_ProjectsRender__WEBPACK_IMPORTED_MODULE_4__.projectsRender)();\n    deHighlightSelected();\n    projects.classList.add(\"selected\");\n  });\n  pastProject.addEventListener(\"click\", () => {\n    mainSection.textContent = \"pastProject\";\n    deHighlightSelected();\n    pastProject.classList.add(\"selected\");\n  });\n  notes.addEventListener(\"click\", () => {\n    mainSection.textContent = \"notes\";\n    deHighlightSelected();\n    notes.classList.add(\"selected\");\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todolist/./src/Logic/Setup.js?");

/***/ }),

/***/ "./src/Logic/Task.js":
/*!***************************!*\
  !*** ./src/Logic/Task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, priority, checkmark = false) {\n    this.title = title;\n    //this.dueDate = dueDate;\n    this.priority = priority;\n    this.checkmark = checkmark;\n  }\n  getTitle() {\n    return this.title;\n  }\n  //   getDueDate() {\n  //     return this.dueDate;\n  //   }\n  getPriority() {\n    return this.priority;\n  }\n  getCheckmark() {\n    return this.checkmark;\n  }\n\n  setTitle(title) {\n    this.title = title;\n  }\n  //   setDueDate(dueDate) {\n  //     this.dueDate = dueDate;\n  //   }\n  setPriority(p) {\n    this.priority = p;\n  }\n  setCheckmark(checkmark) {\n    this.checkmark = checkmark;\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/Logic/Task.js?");

/***/ }),

/***/ "./src/Logic/initialRender.js":
/*!************************************!*\
  !*** ./src/Logic/initialRender.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Render_PageLayout_headerRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/PageLayout/headerRender */ \"./src/Render/PageLayout/headerRender.js\");\n/* harmony import */ var _Render_PageLayout_sidebarRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Render/PageLayout/sidebarRender */ \"./src/Render/PageLayout/sidebarRender.js\");\n/* harmony import */ var _Render_PageLayout_mainSectionRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Render/PageLayout/mainSectionRender */ \"./src/Render/PageLayout/mainSectionRender.js\");\n/* harmony import */ var _Render_PageLayout_footerRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Render/PageLayout/footerRender */ \"./src/Render/PageLayout/footerRender.js\");\n\n\n\n\n\nconst initialRender = () => {\n  (0,_Render_PageLayout_headerRender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_Render_PageLayout_sidebarRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_Render_PageLayout_mainSectionRender__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_Render_PageLayout_footerRender__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialRender);\n\n\n//# sourceURL=webpack://todolist/./src/Logic/initialRender.js?");

/***/ }),

/***/ "./src/Render/Navbar/ProjectsRender.js":
/*!*********************************************!*\
  !*** ./src/Render/Navbar/ProjectsRender.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsRender\": () => (/* binding */ projectsRender)\n/* harmony export */ });\n/* harmony import */ var _Logic_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Logic/Projects */ \"./src/Logic/Projects.js\");\n\n\nconst projectsRender = () => {\n  const mainSection = document.querySelector(\".mainSection\");\n  const todayContainer = document.createElement(\"div\");\n  todayContainer.classList.add(\"projectList\");\n\n  mainSection.textContent = \"\";\n  _Logic_Projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().forEach((p) => {\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.classList.add(\"project\");\n    projectDiv.textContent = p.name;\n    todayContainer.appendChild(projectDiv);\n  });\n\n  mainSection.appendChild(todayContainer);\n};\n\n\n\n\n//# sourceURL=webpack://todolist/./src/Render/Navbar/ProjectsRender.js?");

/***/ }),

/***/ "./src/Render/Navbar/Today.js":
/*!************************************!*\
  !*** ./src/Render/Navbar/Today.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todayRender\": () => (/* binding */ todayRender)\n/* harmony export */ });\n/* harmony import */ var _Logic_Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Logic/Projects */ \"./src/Logic/Projects.js\");\n\nconst todayRender = () => {\n  const mainSection = document.querySelector(\".mainSection\");\n  const todayContainer = document.createElement(\"div\");\n  todayContainer.classList.add(\"projectList\");\n\n  mainSection.textContent = \"\";\n  _Logic_Projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().forEach((p) => {\n    const projectDiv = document.createElement(\"div\");\n    projectDiv.classList.add(\"project\");\n    projectDiv.textContent = p.name;\n    todayContainer.appendChild(projectDiv);\n  });\n\n  mainSection.appendChild(todayContainer);\n};\n\n\n\n\n//# sourceURL=webpack://todolist/./src/Render/Navbar/Today.js?");

/***/ }),

/***/ "./src/Render/PageLayout/footerRender.js":
/*!***********************************************!*\
  !*** ./src/Render/PageLayout/footerRender.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\n  const footer = document.createElement(\"div\");\n  footer.classList.add(\"footer\");\n  footer.textContent = \"JTech copyright 2023\";\n  document.querySelector(\".container-main\").appendChild(footer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n\n//# sourceURL=webpack://todolist/./src/Render/PageLayout/footerRender.js?");

/***/ }),

/***/ "./src/Render/PageLayout/headerRender.js":
/*!***********************************************!*\
  !*** ./src/Render/PageLayout/headerRender.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\n  const header = document.createElement(\"div\");\n  const title = document.createElement(\"div\");\n  header.classList.add(\"header\");\n  title.textContent = \"Todo List\";\n\n  header.appendChild(title);\n  document.querySelector(\".container-main\").appendChild(header);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n\n//# sourceURL=webpack://todolist/./src/Render/PageLayout/headerRender.js?");

/***/ }),

/***/ "./src/Render/PageLayout/mainSectionRender.js":
/*!****************************************************!*\
  !*** ./src/Render/PageLayout/mainSectionRender.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mainSection = () => {\n  const mainSection = document.createElement(\"div\");\n  mainSection.classList.add(\"mainSection\");\n\n  document.querySelector(\".container-main\").appendChild(mainSection);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSection);\n\n\n//# sourceURL=webpack://todolist/./src/Render/PageLayout/mainSectionRender.js?");

/***/ }),

/***/ "./src/Render/PageLayout/sidebarRender.js":
/*!************************************************!*\
  !*** ./src/Render/PageLayout/sidebarRender.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sidebar = () => {\n  const sidebar = document.createElement(\"div\");\n  const today = document.createElement(\"div\");\n  const week = document.createElement(\"div\");\n  const notes = document.createElement(\"div\");\n  const projects = document.createElement(\"div\");\n  const pastProjects = document.createElement(\"div\");\n\n  today.textContent = \"Today\";\n  week.textContent = \"Week\";\n  notes.textContent = \"Notes\";\n  projects.textContent = \"Projects\";\n  pastProjects.textContent = \"Past Projects\";\n  today.classList.add(\"today\");\n  today.classList.add(\"sideNav\");\n  week.classList.add(\"week\");\n  week.classList.add(\"sideNav\");\n  notes.classList.add(\"notes\");\n  notes.classList.add(\"sideNav\");\n  projects.classList.add(\"projects\");\n  projects.classList.add(\"sideNav\");\n  pastProjects.classList.add(\"pastProject\");\n  pastProjects.classList.add(\"sideNav\");\n  sidebar.classList.add(\"sidebar\");\n\n  sidebar.appendChild(today);\n  sidebar.appendChild(week);\n  sidebar.appendChild(projects);\n\n  sidebar.appendChild(pastProjects);\n  sidebar.appendChild(notes);\n\n  document.querySelector(\".container-main\").appendChild(sidebar);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\n\n\n//# sourceURL=webpack://todolist/./src/Render/PageLayout/sidebarRender.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logic_initialRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic/initialRender */ \"./src/Logic/initialRender.js\");\n/* harmony import */ var _Logic_Setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logic/Setup */ \"./src/Logic/Setup.js\");\n\n\n\n(0,_Logic_initialRender__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_Logic_Setup__WEBPACK_IMPORTED_MODULE_1__.startUp)();\n(0,_Logic_Setup__WEBPACK_IMPORTED_MODULE_1__.sidebarEventHandlers)();\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);