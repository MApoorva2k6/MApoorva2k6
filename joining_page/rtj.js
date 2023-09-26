document.addEventListener("DOMContentLoaded", function () {
    const imageCaptureButton = document.getElementById("image-capture");
    const cameraFeed = document.getElementById("camera-feed");
    const imagePreview = document.getElementById("image-preview");
    const submitButton = document.getElementById("submit-button");
    const loadingAnimationContainer = document.querySelector(".loading-animation");


    const animation = lottie.loadAnimation({
        container: loadingAnimationContainer,
        renderer: "svg",
        loop: true,
        autoplay: false, // Autoplay set to false
        path: "animation.json", // Replace with the path to your Lottie animation file
    });

    function simulateSavingAndAuthentication() {
        // Simulate data saving and authentication delay
        animation.play();
        setTimeout(function () {
            // Hide the loading animation
            loadingAnimationContainer.style.display = "none";

            // Redirect to the challenges page
            window.location.href = "challenge.html";
        }, 3000); // 3 seconds delay
    }
    
    // Add an event listener to the image capture button
    imageCaptureButton.addEventListener("click", function () {
        // Access the user's camera
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then(function (stream) {
                // Display camera feed in a video element
                cameraFeed.srcObject = stream;
                cameraFeed.play();

                // Capture a frame from the camera feed
                setTimeout(function () {
                    const context = imagePreview.getContext("2d");
                    imagePreview.width = cameraFeed.videoWidth;
                    imagePreview.height = cameraFeed.videoHeight;
                    context.drawImage(cameraFeed, 0, 0, cameraFeed.videoWidth, cameraFeed.videoHeight);
                    cameraFeed.srcObject.getTracks().forEach((track) => track.stop());

                    // Show the captured image and hide the camera feed
                    cameraFeed.style.display = "none";
                    imagePreview.style.display = "block";
                }, 1000); // Adjust the delay as needed
            })
            .catch(function (error) {
                console.error("Error accessing camera:", error);
            });
    });

    submitButton.addEventListener("click", function () {
        // Perform any form validation or submission actions here
        // For now, simulate saving data and authentication
        loadingAnimationContainer.style.display = "block";

        // Simulate saving data and authentication
        simulateSavingAndAuthentication();
    });
});


