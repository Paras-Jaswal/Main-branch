document.addEventListener('DOMContentLoaded', function () {
    // Alert message when the DOM is fully loaded
    alert('Message');

    // Form submission handler
    var myForm = document.getElementById('myForm');
    if (myForm) {
        myForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Use Fetch API to submit form data to process.php
            fetch('process.php', {
                method: 'POST',
                body: new FormData(myForm)
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    alert('Thank you for submission!');
                    // Optionally, reset the form
                    myForm.reset();
                } else {
                    alert('Submission failed: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Submission failed. Please try again later.');
            });
        });
    } else {
        console.error('Form with id "myForm" not found');
    }

    // Data fetching handler
    fetch('fetch_camsonline_data.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
        var investmentData = document.getElementById('investmentData');
        if (investmentData) {
            if (data.status === 'success') {
                // Process data here as needed
                // Example: Display data on the webpage
                investmentData.innerHTML = 'Data received: ' + JSON.stringify(data.data);
            } else {
                investmentData.innerHTML = 'Failed to load investment data: ' + data.message;
            }
        } else {
            console.error('Element with id "investmentData" not found');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        var investmentData = document.getElementById('investmentData');
        if (investmentData) {
            investmentData.innerHTML = 'Failed to load investment data.';
        }
    });
});
