import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, AUTH_TOKEN, fetchAPI } from "./Api";
import axios from "axios";

// Function to fetch user data
const fetchUserData = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/users/me/`, {
    method: "GET",
    headers: {
      Authorization: `Token ${AUTH_TOKEN}`,
    },
  });
  const data = await response.json();
  return data.username;
};

// Function to submit booking data using Axios
const submitBooking = (formData, username, selectedTime) => {
  const bookingDate = `${formData.date}T${selectedTime}:00+05:30`; // Create the required datetime format

  const requestBody = {
    name: `${username}'s ${formData.occasion}`,
    no_of_guests: formData.numberOfTables, // Assuming numberOfTables is the number of guests
    booking_date: bookingDate,
  };

  console.log("Request Body: ", requestBody);

  // Directly submit the form data (no async wait for now)
  axios
    .post(
      "https://restrobackend-kbfs.onrender.com/restaurant/booking/tables/",
      requestBody,
      {
        headers: {
          Authorization: `Token ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 201) {
        // Successfully submitted the booking
        console.log("Booking Submitted Successfully");
      }
    })
    .catch((error) => {
      console.error("Error submitting booking:", error.response?.data || error.message);
    });
};

function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    numberOfTables: "",
    occasion: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [availableTimes, setAvailableTimes] = useState([]);
  const [username, setUsername] = useState(""); // Store the fetched username
  const navigate = useNavigate();

  // Fetch username when component mounts
  useEffect(() => {
    const getUserData = async () => {
      const fetchedUsername = await fetchUserData();
      setUsername(fetchedUsername);
    };
    getUserData();
  }, []);

  const validateForm = () => {
    const errors = {};
    const { firstName, lastName, email, date, time, numberOfTables, occasion } = formData;

    if (!firstName) errors.firstName = "First name is required.";
    if (!lastName) errors.lastName = "Last name is required.";
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.email = "Valid email is required.";
    if (!date) errors.date = "Please select a valid date.";
    if (!time) errors.time = "Please select a time period.";
    if (!numberOfTables || numberOfTables < 1)
      errors.numberOfTables = "Please enter a valid number of tables (min 1).";
    if (!occasion) errors.occasion = "Please select an occasion.";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleDateChange = async (event) => {
    const selectedDate = event.target.value;
    setFormData((prev) => ({ ...prev, date: selectedDate }));
    const times = await fetchAPI(selectedDate); // Fetch available times dynamically
    setAvailableTimes(times);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate the form
    // if (!validateForm()) return;


    const [startTime] = formData.time.split(" - ");

    const bookingDate = `${formData.date}T${startTime}:00+05:30`;
    const requestBody = {
      name: `${username}'s ${formData.occasion}`,
      no_of_guests: formData.numberOfTables,
      booking_date: bookingDate,
    };

    // Make the API request
    axios
      .post(
        "https://restrobackend-kbfs.onrender.com/restaurant/booking/tables/",
        requestBody,
        {
          headers: {
            Authorization: `Token ${AUTH_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          console.log("Booking Submitted Successfully");
          navigate("/confirmed"); // Navigate to confirmation page
        } else {
          console.log("Unexpected response status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error submitting booking:", error.response?.data || error.message);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <div className="container mb-5">
        <main>
          <div className="py-5 text-center">
            <h2>Book a table for any occasion!</h2>
            <p className="lead">
              Celebrate life's special moments with us. Whether it's an intimate dinner, a birthday bash, or a business gathering, our warm ambiance and exceptional service make every occasion unforgettable. Reserve your table now and make it a moment to cherish!
            </p>
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Booking Details</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex p-3 justify-content-between lh-sm">
                  <div>
                    <p className="my-0">Date of Booking</p>
                  </div>
                  <span className="text-muted">{formData.date || "Not selected"}</span>
                </li>
                <li className="list-group-item d-flex p-3 justify-content-between lh-sm">
                  <div>
                    <p className="my-0">Time Period</p>
                  </div>
                  <span className="text-muted">{formData.time || "Not selected"}</span>
                </li>
                <li className="list-group-item d-flex p-3 justify-content-between lh-sm">
                  <div>
                    <p className="my-0">Number of Tables</p>
                  </div>
                  <span className="text-muted">{formData.numberOfTables || "Not specified"}</span>
                </li>
                <li className="list-group-item d-flex p-3 justify-content-between lh-sm">
                  <div>
                    <p className="my-0">Occasion</p>
                  </div>
                  <span className="text-muted">{formData.occasion || "Not selected"}</span>
                </li>
              </ul>
            </div>

            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3 text-primary">Billing and Details</h4>
              <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-sm-12">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      disabled
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      disabled
                    />
                  </div>

                  <hr className="mb-3 mt-5" />

                  <div className="col-md-6">
                    <label htmlFor="date" className="form-label">
                      Date of Booking
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      value={formData.date}
                      onChange={handleDateChange}
                      required
                    />
                    {formErrors.date && <div className="text-danger">{formErrors.date}</div>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="numberOfTables" className="form-label">
                      Number of Tables
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="numberOfTables"
                      value={formData.numberOfTables}
                      onChange={handleChange}
                      required
                    />
                    {formErrors.numberOfTables && <div className="text-danger">{formErrors.numberOfTables}</div>}
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="occasion" className="form-label">
                      Occasion
                    </label>
                    <select
                      className="form-control"
                      id="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business</option>
                      <option value="others">Others</option>
                    </select>
                    {formErrors.occasion && <div className="text-danger">{formErrors.occasion}</div>}
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="time" className="form-label">
                      Time of Booking
                    </label>
                    <select
                      className="form-control"
                      id="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose...</option>
                      {availableTimes.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {formErrors.time && <div className="text-danger">{formErrors.time}</div>}
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100" type="submit">
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default BookingForm;
