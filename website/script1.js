document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
});

document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('homeSection').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    alert('Logged in as ' + username);
});