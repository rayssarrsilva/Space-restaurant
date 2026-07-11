// pages/reservation.js

export default function loadReservation() {
    const reservation = document.createElement("section");
    reservation.className = "reservation";

    reservation.innerHTML = `
        <div class="reservation-wrapper">

            <div class="reservation-info">

                <p class="reservation-tag">
                    Mission Reservation
                </p>

                <h2 class="reservation-title">
                    Reserve Your Table
                </h2>

                <p class="reservation-description">
                    Secure your seat aboard Space Bakery and enjoy an unforgettable dining experience beyond Earth's atmosphere.
                </p>

                <div class="reservation-details">

                    <div class="detail">
                        <span>Hours</span>
                        <p>09:00 AM — 10:00 PM</p>
                    </div>

                    <div class="detail">
                        <span>Location</span>
                        <p>Orbital Station Alpha</p>
                    </div>

                    <div class="detail">
                        <span>Mission Code</span>
                        <p>SB-2049</p>
                    </div>

                </div>

            </div>

            <form class="reservation-form">

                <input
                    type="text"
                    placeholder="Full Name"
                    required
                >

                <input
                    type="email"
                    placeholder="Email"
                    required
                >

                <input
                    type="date"
                    required
                >

                <input
                    type="time"
                    required
                >

                <input
                    type="number"
                    min="1"
                    max="12"
                    placeholder="Guests"
                    required
                >

                <button type="submit">
                    Reserve Mission
                </button>

            </form>

        </div>
    `;

    return reservation;
}