// Handle Login Form Submission
document.getElementById("login-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    // Simulated login logic
    console.log(`Logging in with Email: ${email}, Password: ${password}`);
    alert("Login successful!");
  });
  
  // Handle Signup Form Submission
  document.getElementById("signup-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
  
    // Simulated signup logic
    console.log(`Signing up with Email: ${email}, Username: ${username}, Password: ${password}`);
    alert("Signup successful!");
  });
  