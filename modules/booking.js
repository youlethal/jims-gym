// Booking Module
function initializeBooking() {
    const bookingSection = document.createElement('section');
    bookingSection.id = 'booking';
    bookingSection.innerHTML = `
        <h2>Book an Appointment</h2>
        <form class="booking-form">
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <input type="tel" placeholder="Your Phone" required>
            <input type="date" required>
            <input type="time" required>
            <textarea placeholder="Additional Notes"></textarea>
            <button type="submit">Book Appointment</button>
        </form>
    `;
    
    document.querySelector('main').appendChild(bookingSection);
}