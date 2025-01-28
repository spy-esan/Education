<<<<<<< HEAD

    // Initialize EmailJS with your Public Key (User ID)
    emailjs.init("xJkTY5Az1xLCKvc58"); // Replace with your actual Public Key (User ID)

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Send email using EmailJS
        emailjs.sendForm('service_evtyxra', 'template_3ktfjhl', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent  successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again later.');
            });
=======

    // Initialize EmailJS with your Public Key (User ID)
    emailjs.init("xJkTY5Az1xLCKvc58"); // Replace with your actual Public Key (User ID)

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Send email using EmailJS
        emailjs.sendForm('service_evtyxra', 'template_3ktfjhl', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent  successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send the message. Please try again later.');
            });
>>>>>>> 1bc245083f43ef6401393bb81f51de95982a4f12
    });