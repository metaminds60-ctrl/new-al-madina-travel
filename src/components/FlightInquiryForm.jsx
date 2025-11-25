import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./FlightInquiryForm.css";

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  departureCity: "",
  destination: "",
  departureDate: "",
  returnDate: "",
  passengers: "",
  tripType: "One Way",
  travelClass: "Economy",
  preferredAirline: "",
  budgetCurrency: "USD",
  budgetPerPerson: "",
  notes: "",
};

const FlightInquiryForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generatePdf = (message) => {
    try {
      const doc = new jsPDF();
      const leftMargin = 14;
      let y = 18;

      doc.setFontSize(16);
      doc.text("Flight Inquiry - Al Madina Travels", leftMargin, y);
      y += 10;

      doc.setFontSize(11);
      const lines = doc.splitTextToSize(message, 180);
      const lineHeight = 6;

      lines.forEach((line) => {
        if (y > 280) {
          doc.addPage();
          y = 18;
        }
        doc.text(line, leftMargin, y);
        y += lineHeight;
      });

      doc.save("flight-inquiry.pdf");
    } catch (err) {
      console.error("Error generating PDF:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.departureCity ||
      !formData.destination ||
      !formData.departureDate ||
      !formData.passengers ||
      !formData.travelClass ||
      !formData.tripType
    ) {
      setError("Please fill all required fields marked with *");
      return;
    }

    const {
      name,
      phone,
      email,
      departureCity,
      destination,
      departureDate,
      returnDate,
      passengers,
      tripType,
      travelClass,
      preferredAirline,
      budgetCurrency,
      budgetPerPerson,
      notes,
    } = formData;

    const message = `New Worldwide Flight Inquiry - Al Madina Travels

Passenger Name: ${name}
Phone / WhatsApp: ${phone}
Email: ${email || "Not provided"}

Trip Type: ${tripType}
Route: ${departureCity} ➝ ${destination}
Departure Date: ${departureDate}
Return Date: ${returnDate || "One way / Not provided"}
Number of Passengers: ${passengers}
Travel Class: ${travelClass}

Preferred Airline: ${
      preferredAirline || "Any / Not specified"
    }
Budget (per person): ${
      budgetPerPerson
        ? `${budgetCurrency} ${budgetPerPerson}`
        : "Not specified"
    }

Additional Notes:
${notes || "No additional notes."}

This client can book from anywhere in the world. Please reply with the best manual fares and options.`;

    // ✅ WhatsApp number (without + and spaces)
    const whatsappNumber = "923160494679"; // +92 316 049 4679

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    const emailSubject = "New Worldwide Flight Inquiry - Al Madina Travels";
    const mailtoUrl = `mailto:metaminds60@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(message)}`;

    // 1) PDF download for records
    generatePdf(message);

    // 2) Open WhatsApp (new tab)
    window.open(whatsappUrl, "_blank");

    // 3) Open Email client (same tab)
    window.location.href = mailtoUrl;

    setSuccess(
      "Your inquiry is ready in WhatsApp and your email app. A PDF has been downloaded — you can attach it if needed."
    );
    setFormData(initialFormState);
  };

  return (
    <section className="flight-inquiry-section" id="flight-inquiry">
      <div className="flight-inquiry-card">
        <div className="flight-inquiry-header">
          <p className="flight-inquiry-tag">Worldwide Cheap Flight Booking</p>
          <h2 className="flight-inquiry-title">
            Find <span>Cheap Worldwide Flights</span>
          </h2>
          <p className="flight-inquiry-subtitle">
            Share your trip details and we&apos;ll manually search the{" "}
            <strong>lowest fares</strong>, best routes and airlines for you.
          </p>
        </div>

        <form className="flight-inquiry-form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="field-group">
            <label htmlFor="name">
              Full Name <span className="required">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter passenger name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="field-group">
            <label htmlFor="phone">
              Phone / WhatsApp <span className="required">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+92..., +966..., +971..."
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="field-group">
            <label htmlFor="email">Email (optional)</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Trip Type */}
          <div className="field-group">
            <label htmlFor="tripType">
              Trip Type <span className="required">*</span>
            </label>
            <select
              id="tripType"
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
            >
              <option value="One Way">One Way</option>
              <option value="Round Trip">Round Trip</option>
              <option value="Multi City">Multi City</option>
            </select>
          </div>

          {/* Departure City */}
          <div className="field-group">
            <label htmlFor="departureCity">
              From (City / Airport) <span className="required">*</span>
            </label>
            <input
              id="departureCity"
              name="departureCity"
              type="text"
              placeholder="e.g. Lahore, Riyadh, London"
              value={formData.departureCity}
              onChange={handleChange}
            />
          </div>

          {/* Destination */}
          <div className="field-group">
            <label htmlFor="destination">
              To (City / Airport) <span className="required">*</span>
            </label>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="e.g. Madinah, Dubai, Toronto"
              value={formData.destination}
              onChange={handleChange}
            />
          </div>

          {/* Departure Date */}
          <div className="field-group">
            <label htmlFor="departureDate">
              Departure Date <span className="required">*</span>
            </label>
            <input
              id="departureDate"
              name="departureDate"
              type="date"
              value={formData.departureDate}
              onChange={handleChange}
            />
          </div>

          {/* Return Date */}
          <div className="field-group">
            <label htmlFor="returnDate">Return Date (optional)</label>
            <input
              id="returnDate"
              name="returnDate"
              type="date"
              value={formData.returnDate}
              onChange={handleChange}
            />
          </div>

          {/* Passengers */}
          <div className="field-group">
            <label htmlFor="passengers">
              Number of Passengers <span className="required">*</span>
            </label>
            <input
              id="passengers"
              name="passengers"
              type="number"
              min="1"
              placeholder="1"
              value={formData.passengers}
              onChange={handleChange}
            />
          </div>

          {/* Travel Class */}
          <div className="field-group">
            <label htmlFor="travelClass">
              Travel Class <span className="required">*</span>
            </label>
            <select
              id="travelClass"
              name="travelClass"
              value={formData.travelClass}
              onChange={handleChange}
            >
              <option value="Economy">Economy</option>
              <option value="Premium Economy">Premium Economy</option>
              <option value="Business">Business</option>
              <option value="First">First</option>
            </select>
          </div>

          {/* Preferred Airline */}
          <div className="field-group">
            <label htmlFor="preferredAirline">Preferred Airline</label>
            <input
              id="preferredAirline"
              name="preferredAirline"
              type="text"
              placeholder="e.g. Saudia, Qatar Airways, Emirates"
              value={formData.preferredAirline}
              onChange={handleChange}
            />
          </div>

          {/* Budget Currency */}
          <div className="field-group">
            <label htmlFor="budgetCurrency">Budget Currency</label>
            <select
              id="budgetCurrency"
              name="budgetCurrency"
              value={formData.budgetCurrency}
              onChange={handleChange}
            >
              <option value="USD">USD</option>
              <option value="SAR">SAR</option>
              <option value="AED">AED</option>
              <option value="PKR">PKR</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>

          {/* Budget per person */}
          <div className="field-group">
            <label htmlFor="budgetPerPerson">Budget per Person (approx.)</label>
            <input
              id="budgetPerPerson"
              name="budgetPerPerson"
              type="number"
              min="0"
              placeholder="e.g. 500"
              value={formData.budgetPerPerson}
              onChange={handleChange}
            />
          </div>

          {/* Notes */}
          <div className="field-group field-full">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              placeholder="Share flexible dates, transit preferences, special assistance, etc."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {/* Alerts */}
          {error && <p className="form-message error">{error}</p>}
          {success && <p className="form-message success">{success}</p>}

          {/* Submit button */}
          <div className="submit-row">
            <button type="submit" className="primary-btn full-width-btn">
              <span>Send Worldwide Flight Inquiry</span>
            </button>

            <p className="small-note">
              We&apos;ll reply on WhatsApp or Email with tailored flight options
              and manual fares.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FlightInquiryForm;
