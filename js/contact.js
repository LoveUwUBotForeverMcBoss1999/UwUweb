document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('form');
    const submitButton = document.getElementById('button');
    const goBackButton = document.getElementById('goBack');

    if (goBackButton) {
        goBackButton.addEventListener('click', () => {
            window.history.back();
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateForm()) {
                submitButton.value = 'Sending...';

                const serviceID = 'default_service';
                const templateID = 'template_bw4onh6';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        submitButton.value = 'Send Message';
                        showPopup('Thank you for your message! We will get back to you soon.', 'success');
                        contactForm.reset();
                    }, (err) => {
                        submitButton.value = 'Send Message';
                        showPopup(`Error sending email: ${JSON.stringify(err)}`, 'error');
                    });
            }
        });
    }

    function validateForm() {
        const name = document.getElementById('from_name');
        const email = document.getElementById('reply_to');
        const message = document.getElementById('message');
        let isValid = true;

        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            removeError(name);
        }

        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        } else {
            removeError(email);
        }

        if (message.value.trim() === '') {
            showError(message, 'Message is required');
            isValid = false;
        } else {
            removeError(message);
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message') || document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(error);
        }
    }

    function removeError(input) {
        const formGroup = input.parentElement;
        const error = formGroup.querySelector('.error-message');
        if (error) {
            formGroup.removeChild(error);
        }
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function showPopup(message, type) {
        const popup = document.createElement('div');
        popup.className = `popup ${type}-popup`;
        popup.innerHTML = `
            <div class="popup-content">
                <p>${message}</p>
                <button class="close-popup">Close</button>
            </div>
        `;
        document.body.appendChild(popup);

        setTimeout(() => popup.classList.add('show'), 10);

        popup.querySelector('.close-popup').addEventListener('click', () => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        });

        setTimeout(() => {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 300);
        }, 5000);
    }
});