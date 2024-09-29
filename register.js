document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    const errorMessage = document.getElementById('register-error-message');

    //Checagem
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usernameExists = users.some(user => user.username === username);

    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else if (!usernameExists) {
        
        //Salvamento de dados
        const user = {username, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        errorMessage.style.display = 'none';
        document.getElementById('password-match-error-message').style.display = 'none';

    }
});
