document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here you can add your login logic (e.g., API call)
    console.log('Username:', username);
    console.log('Password:', password);

    // For demonstration, you can alert the user
    alert('Login submitted!'); // Replace with actual login logic
});