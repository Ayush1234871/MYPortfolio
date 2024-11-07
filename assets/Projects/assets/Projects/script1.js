// Function to show the selected project and hide the others
function showProject(projectId) {
    // Get all project sections
    const projects = document.querySelectorAll('.project-details');

    // Hide all projects
    projects.forEach(project => {
        project.classList.remove('active');
    });

    // Show the selected project
    document.getElementById(projectId).classList.add('active');
}
