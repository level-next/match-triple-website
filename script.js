document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // EmailJS parameters
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS Service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS Template ID
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for your message. We will get back to you soon.');
            // Reset form fields
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send the message. Please try again later.');
        });
});
