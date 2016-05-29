// projects

const projectList = document.querySelector('.project_details_list');
const projectNav = document.querySelector('.project-nav ul');

window.addEventListener('hashchange', function (e) {
  const project = getProject();

  if (project) {
    e.preventDefault();
    openProject(project);
  }
});

function getProject() {
  if (!document.location.hash) {
    return null;
  }

  const hash = document.location.hash.substring(1);
  if (!hash || !/^project_/.test(hash)) {
    return null;
  }

  return hash;
}

function openProject(projectId) {
  projectNav.querySelector('.active').classList.remove('active');
  projectNav.querySelector('a[href="#' + projectId + '"]').classList.add('active');

  const activeProject = projectList.querySelector('.active');
  if (activeProject) {
    activeProject.classList.remove('active');
  }

  document.getElementById(projectId).classList.add('active');
}

const project = getProject();
if (project) {
  openProject(project);
}
