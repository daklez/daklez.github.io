let vW =  document.body.clientWidth;
const menuBars = document.getElementsByClassName("bars")[0];
const navBar = document.getElementById("navbar");
const projectShowcase = document.getElementById('projects-showcase');
const nextArrow = document.getElementsByClassName("greater-than")[0];
const prevArrow = document.getElementsByClassName("less-than")[0];
const projects = document.getElementsByClassName("project-link");
const showAllBtn = document.getElementById("show-all-btn");
const presentationBtn = document.getElementById("presentation-btn");

const showNav = () => {
  navBar.style.display = "block";
};
const hideNav = () => {
  navBar.style.display = "none";
};
const menuBarHover = () => {
  menuBars.style.backgroundColor = "black";
};
const menuBarOut = () => {
  menuBars.style.backgroundColor = "";
};

menuBars.addEventListener("mouseover", showNav);
menuBars.addEventListener("mouseover", menuBarHover);
menuBars.addEventListener("mouseout", hideNav);
menuBars.addEventListener("mouseout", menuBarOut);

navBar.addEventListener("mouseover", showNav);
navBar.addEventListener("mouseover", menuBarHover);
navBar.addEventListener("mouseout", hideNav);
navBar.addEventListener("mouseout", menuBarOut);

let projectIndex = 0;
const nextProject = () => {
  projects[projectIndex].style.display = "none";
  projectIndex++;
  if (projectIndex === projects.length) {
    projectIndex = 0;
  }
  projects[projectIndex].style.display = "block";
};
const prevProject = () => {
  projects[projectIndex].style.display = "none";
  projectIndex--;
  if (projectIndex < 0) {
    projectIndex = projects.length - 1;
  }
  projects[projectIndex].style.display = "block";
};

let presentationInterval = setInterval(nextProject, 5000);
nextArrow.onclick = nextProject;
prevArrow.onclick = prevProject;

const showAll = () => {
  prevArrow.remove();
  nextArrow.remove();
  clearInterval(presentationInterval);
  for(let i=0; i<projects.length; i++){
    projects[i].style.display = 'block'
  }
}

const presentation = () => {
  prevArrow.remove();
  nextArrow.remove();
  if (vW > 760) {
    projectShowcase.insertBefore(prevArrow, projects[0]);
    projectShowcase.appendChild(nextArrow);
  }
  projects[0].style.display = 'block';
  for(let i=1; i<projects.length; i++){
    projects[i].style.display = "none";
  }
  projectIndex = 0;
  clearInterval(presentationInterval)
  presentationInterval = setInterval(nextProject, 5000);
}

showAllBtn.onclick = showAll;
presentationBtn.onclick = presentation;

