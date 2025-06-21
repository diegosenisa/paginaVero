// This file contains the JavaScript code for the webpage. It handles interactivity, such as form submissions, dynamic content loading, and any other client-side logic.

document.addEventListener('DOMContentLoaded', () => {
    const rentalForm = document.getElementById('rental-form');
    const listingsContainer = document.getElementById('listings-container');

    rentalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(rentalForm);
        const rentalData = {
            name: formData.get('name'),
            email: formData.get('email'),
            propertyType: formData.get('property-type'),
            budget: formData.get('budget'),
        };
        displayRentalRequest(rentalData);
        rentalForm.reset();
    });

    function displayRentalRequest(data) {
        const listingElement = document.createElement('div');
        listingElement.classList.add('listing');
        listingElement.innerHTML = `
            <h3>${data.propertyType} Request</h3>
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Budget: $${data.budget}</p>
        `;
        listingsContainer.appendChild(listingElement);
    }
});