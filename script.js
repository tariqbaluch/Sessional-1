function Applicant(cnic, firstName, lastName) {
    this.cnic = cnic;
    this.firstName = firstName;
    this.lastName = lastName;
}

// Retrieve stored applicants from local storage if available
let storedApplicants = JSON.parse(localStorage.getItem('applicants')) || [];

document.getElementById('newApplicantForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let cnic = document.getElementById('newCnic').value;
    let firstName = document.getElementById('newFirstName').value;
    let lastName = document.getElementById('newLastName').value;

    let applicant = new Applicant(cnic, firstName, lastName);

    // Add the new applicant to the existing array
    storedApplicants.push(applicant);

    // Store the updated array back to local storage
    localStorage.setItem('applicants', JSON.stringify(storedApplicants));

    // Clear the input fields
    document.getElementById('newCnic').value = '';
    document.getElementById('newFirstName').value = '';
    document.getElementById('newLastName').value = '';
});

document.getElementById("printNew").addEventListener('click', function(event) {
    event.preventDefault();

    // Redirect to the other HTML page
    window.location.href = 'nextpage.html';
});
