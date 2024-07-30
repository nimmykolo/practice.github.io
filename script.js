document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

function showDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
        projectDetails.style.display = 'block';
    } else {
        projectDetails.style.display = 'none';
    }
}
