// projects

const projectSection = document.getElementById('projects');

const projectList = projectSection.querySelectorAll('.project_list li');
Array.prototype.forEach.call(projectList, project => {
  project.addEventListener('click', function () {
    if (this.classList.contains('active')) return;

    var previouslyActive = document.querySelector('.project_list li.active');
    if (previouslyActive !== null) {
      previouslyActive.classList.remove('active');
      var previousTarget = document.getElementById(previouslyActive.getAttribute('data-target'));
      previousTarget.classList.remove('active');
    }

    var newTarget = document.getElementById(this.getAttribute('data-target'));
    if (newTarget !== null) {
      newTarget.classList.add('active');
      this.classList.add('active');
    }
  });
});
