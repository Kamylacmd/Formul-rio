document.getElementById('create-account-button').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error-message');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        errorMessage.style.display = 'none';
        localStorage.setItem('currentUser', username);
        window.location.href = '/Sist_Login.html';
    } else {
        errorMessage.textContent = 'Nome de usuário ou senha incorretos.';
        errorMessage.style.display = 'block';
    }
});
