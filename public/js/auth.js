// Modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeBtns = document.querySelectorAll('.close-btn');

// Form elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginMessage = document.getElementById('loginMessage');
const signupMessage = document.getElementById('signupMessage');

// Show modals
loginBtn.onclick = () => loginModal.style.display = 'block';
signupBtn.onclick = () => signupModal.style.display = 'block';

// Close modals
closeBtns.forEach(btn => {
    btn.onclick = function() {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    }
});

// Close when clicking outside
window.onclick = (event) => {
    if (event.target === loginModal) loginModal.style.display = 'none';
    if (event.target === signupModal) signupModal.style.display = 'none';
};

// Handle login form submission
loginForm.onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            showMessage(loginMessage, 'Login successful!', 'success');
            // Handle successful login (e.g., redirect or update UI)
            setTimeout(() => {
                loginModal.style.display = 'none';
                window.location.reload();
            }, 1500);
        } else {
            showMessage(loginMessage, data.message || 'Login failed', 'error');
        }
    } catch (error) {
        showMessage(loginMessage, 'An error occurred', 'error');
    }
};

// Handle signup form submission
signupForm.onsubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            showMessage(signupMessage, 'Sign up successful!', 'success');
            setTimeout(() => {
                signupModal.style.display = 'none';
                loginModal.style.display = 'block';
            }, 1500);
        } else {
            showMessage(signupMessage, data.message || 'Sign up failed', 'error');
        }
    } catch (error) {
        showMessage(signupMessage, 'An error occurred', 'error');
    }
};

// Helper function to show messages
function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 3000);
}