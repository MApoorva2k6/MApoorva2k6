// You can add JavaScript functionality as needed for form submission/validation.
document.addEventListener("DOMContentLoaded", function () {
    const hackathonForm = document.getElementById("hackathonForm");

    hackathonForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // You can add your form submission logic here
        // For example, collect form data and send it to a server
        
        // Clear the form fields after submission (you can modify this as needed)
        hackathonForm.reset();
    });
});
