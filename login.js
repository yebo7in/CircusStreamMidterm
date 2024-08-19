document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Check if the credentials are stored in localStorage
    if (localStorage.getItem('rememberMe') === 'true') {
        usernameInput.value = localStorage.getItem('username');
        passwordInput.value = localStorage.getItem('password');
        rememberMeCheckbox.checked = true;
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;
        const errorMessage = document.getElementById('login-error-message');

        // Simulate a login process
        if (username === 'user' && password === 'pass') {
            alert('Login successful!');

            if (rememberMe) {
                // Save username and password to localStorage
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('rememberMe', true);
            } else {
                // Clear the stored credentials
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                localStorage.removeItem('rememberMe');
            }

            // Redirect or perform other actions
        } else {
            errorMessage.textContent = 'Invalid username or password!';
            errorMessage.style.display = 'block';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // Check if the credentials are stored in localStorage
    if (localStorage.getItem('rememberMe') === 'true') {
        usernameInput.value = localStorage.getItem('username');
        passwordInput.value = localStorage.getItem('password');
        rememberMeCheckbox.checked = true;
    }

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;
        const rememberMe = rememberMeCheckbox.checked;
        const errorMessage = document.getElementById('login-error-message');

        // Retrieve the registered credentials from localStorage
        const registeredUsername = localStorage.getItem('registeredUsername');
        const registeredPassword = localStorage.getItem('registeredPassword');

        // Validate the entered credentials against the registered credentials
        if (username === registeredUsername && password === registeredPassword) {
            alert('Login successful!');

            if (rememberMe) {
                // Save username and password to localStorage
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('rememberMe', true);
            } else {
                // Clear the stored credentials
                localStorage.removeItem('username');
                localStorage.removeItem('password');
                localStorage.removeItem('rememberMe');
            }

            // Redirect or perform other actions
        } else {
            errorMessage.textContent = 'Invalid username or password!';
            errorMessage.style.display = 'block';
        }
    });
});
