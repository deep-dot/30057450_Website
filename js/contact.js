document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const subscribeCheckbox = document.getElementById('subscribe');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // This is crucial to prevent the form from submitting

        if (validateForm()) {
            displayMessage("Form submitted successfully!", 'success');
        } else {
            displayMessage("Please fill in all fields correctly.", 'error');
        }
    });

    function validateForm() {
        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            return false;
        }
        if (!validateEmail(emailInput.value)) {
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }

    function displayMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.className = type === 'success' ? 'success' : 'error'; // Apply styling based on type
        document.body.appendChild(messageElement);

        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 5000); // Remove the message after 5 seconds
    }
});
