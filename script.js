
function showCustomAlert(message) {
    const alertModal = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertModal.style.display = 'block';

    // Close alert when OK is clicked
    document.getElementById('close-alert').onclick = function() {
        alertModal.style.display = 'none';
    };
}

// Form validation and custom alert logic
const form = document.querySelector('.contactform form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form input values
    const fullName = form.querySelector('input[type="text"]');
    const emailAddress = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    // Trim input values
    const fullNameValue = fullName.value.trim();
    const emailValue = emailAddress.value.trim();
    const messageValue = message.value.trim();

    // Form validation
    if (fullNameValue === '') {
        showCustomAlert('Please Enter Your Full Name.');
    } else if (emailValue === '') {
        showCustomAlert('Please Enter Your Email Address.');
    } else if (!validateEmail(emailValue)) {
        showCustomAlert('Please Enter a Valid Email Address.');
    } else if (messageValue === '') {
        showCustomAlert('Please Enter Your Message.');
    } else {
        showCustomAlert('Thank You For Your Message!');
        form.reset(); // Reset the form
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
