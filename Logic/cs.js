document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const eventType = document.getElementById('eventtype').value;
        const message = document.getElementById('message').value.trim();

        // Validate name required and > 3 chars
        if (name.length === 0) {
            alert("Name is required.");
            return;
        }
        if (name.length <= 3) {
            alert("Name must contain more than 3 characters.");
            return;
        }

        // Validate email required and ends with @gmail.com
        if (email.length === 0) {
            alert("Email is required.");
            return;
        }
        const gmailPattern = /^[^\s@]+@gmail\.com$/i;
        if (!gmailPattern.test(email)) {
            alert("Email must end with '@gmail.com'.");
            return;
        }

        // Validate phone required and numbers only
        if (phone.length === 0) {
            alert("Phone number is required.");
            return;
        }
        const phonePattern = /^\d+$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must contain only digits.");
            return;
        }

        // Validate event type selected
        if (eventType.length === 0) {
            alert("Please select an event type.");
            return;
        }

        // Validate message required and > 5 words
        if (message.length === 0) {
            alert("Message is required.");
            return;
        }
        const wordCount = message.split(/\s+/).filter(word => word.length > 0).length;
        if (wordCount <= 5) {
            alert("Message must contain more than 5 words.");
            return;
        }

        // All validations passed
        console.log('Form submitted with data:', { name, email, phone, eventType, message });

        // Submit the form if desired
        // form.submit();
    });
});
