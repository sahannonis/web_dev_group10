document.getElementById('date-input').min = new Date(Date.now() + 86400000).toISOString().split('T')[0];
//Ensuring that a previous date cannot be selected for the Event date
//86400000 is miliseconds per day , Spliting after T to exclude the time from the Date (YYYY-MM-DD | THH:mm:ss.sssZ)


document.getElementById('contact-form').addEventListener
    
('submit', function(clickingButton) 
    
    {
    clickingButton.preventDefault(); // Stops form submission before Writing data to a PDF File
    
    
    let firstName = document.getElementById('firstname-input').value;   
    let lastName = document.getElementById('lastname-input').value;
    let email = document.getElementById('email-input').value;
    let contact = document.getElementById('contact-input').value;
    let date = document.getElementById('date-input').value;
    let message = document.getElementById('message-input').value;

    // Format the Data to Before writing it to the PDF
    let formData = document.createElement('div');
    formData.innerHTML = '<h1>Quote Request Data</h1>' +
        '<p>First Name: ' + firstName + '</p>' +
        '<p>Last Name: ' + lastName + '</p>' +
        '<p>Email Address: ' + email + '</p>' +
        '<p>Contact Number: ' + contact + '</p>' +
        '<p>Event Date: ' + date + '</p>' +
        '<p>Message: ' + message + '</p>';

    // Create a new PDF using the data taken form Form
    // Html2pdf is a predefined function in the exported JS library
    html2pdf().from(formData).save();
    }   

);