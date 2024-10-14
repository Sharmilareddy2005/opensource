document.getElementById('login-button').addEventListener('click', function() {
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate login (this is a simple example, replace with actual validation)
    if (role === 'admin') {
        window.location.href = 'admin-dashboard.html';
    } else if (role === 'coadmin') {
        window.location.href = 'coadmin-dashboard.html';
    } else if (role === 'student') {
        window.location.href = 'student-dashboard.html';
    }
});

// Example function to send a request
function sendRequest() {
    const subject = document.getElementById('subject').value;
    const details = document.getElementById('permission-details').value;

    // Show success pop-up (this is a placeholder, implement actual logic)
    alert('Request sent successfully');
}

// Implement other functions like addCoAdmin, addStudent, etc.
